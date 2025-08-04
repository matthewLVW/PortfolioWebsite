import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Matthew VW</h2>
      <div className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/resume" className="hover:underline">Resume</Link>
      </div>
    </nav>
  );
}
