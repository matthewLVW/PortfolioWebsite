export default function VideoWalkthrough({
  url,
  title,
}: {
  url?: string;
  title: string;
}) {
  if (!url) return null;
  let id: string | null = null;
  try {
    const parsed = new URL(url);
    if (["youtu.be", "www.youtu.be"].includes(parsed.hostname))
      id = parsed.pathname.slice(1).split("/")[0];
    if (
      ["youtube.com", "www.youtube.com", "m.youtube.com"].includes(
        parsed.hostname,
      )
    )
      id =
        parsed.searchParams.get("v") ??
        parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] ??
        null;
  } catch {
    return null;
  }
  if (!id || !/^[a-zA-Z0-9_-]{11}$/.test(id)) return null;
  return (
    <section className="video-section">
      <h2>Project walkthrough</h2>
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={`${title} — video walkthrough`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <a className="text-link" href={url} target="_blank" rel="noreferrer">
        Watch on YouTube ↗
      </a>
    </section>
  );
}
