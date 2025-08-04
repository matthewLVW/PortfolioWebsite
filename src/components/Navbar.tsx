export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Matthew VW</h2>
      <div className="space-x-6">
        <link href="/" className="hover:underline">Home</link>
        <link href="/projects" className="hover:underline">Projects</link>
        <link href="/resume" className="hover:underline">Resume</link>
      </div>
    </nav>
  );
}
