export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Matthew VW</h2>
      <div className="space-x-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/projects" className="hover:underline">Projects</a>
        <a href="/resume" className="hover:underline">Resume</a>
      </div>
    </nav>
  );
}
