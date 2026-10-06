import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const port = Number(process.env.PORT ?? 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
};

try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error("No static build found. Run npm run build first.");
  process.exit(1);
}

createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    if (basePath && pathname === "/") {
      res.writeHead(302, { Location: `${basePath}/` });
      res.end();
      return;
    }
    if (
      basePath &&
      pathname !== basePath &&
      !pathname.startsWith(`${basePath}/`)
    ) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const relative = pathname.slice(basePath.length);
    const target = resolve(root, `.${relative || "/"}`);
    if (target !== resolve(root) && !target.startsWith(resolve(root) + sep)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    let file = target;
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        res.writeHead(301, { Location: `${pathname}/` });
        res.end();
        return;
      }
      file = resolve(file, "index.html");
    }
    const content = await readFile(file);
    res.writeHead(200, {
      "Content-Type": types[extname(file)] ?? "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(req.method === "HEAD" ? undefined : content);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    const fallback = await readFile(resolve(root, "404.html")).catch(() =>
      Buffer.from("Not found"),
    );
    res.end(req.method === "HEAD" ? undefined : fallback);
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Portfolio preview: http://127.0.0.1:${port}${basePath}/`),
);
