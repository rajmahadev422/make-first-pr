export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">First PR Leaderboard</h1>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="/contributors" className="hover:text-blue-400 transition">
            Contributors
          </a>

          <a
            href="https://github.com/your-repo"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
