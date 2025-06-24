export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-20 flex flex-col items-center bg-blue-200 dark:bg-[#0a1a2f] text-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <p className="mb-6 text-center text-lg max-w-xl">
        You can view or download my resume below.
      </p>

      <div className="flex gap-4">
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          Download PDF
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          View in New Tab
        </a>
      </div>

      <iframe
        src="/resume.pdf"
        className="mt-10 w-full max-w-4xl h-[800px] border border-gray-300 dark:border-gray-700"
      ></iframe>
    </main>
  );
}
