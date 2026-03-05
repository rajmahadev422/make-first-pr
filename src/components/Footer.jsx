export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="mb-2">Built for beginner open-source contributors</p>

        <p className="text-sm">
          © {new Date().getFullYear()} First PR Leaderboard
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a
            href="https://github.com/your-repo"
            className="hover:text-white"
            target="_blank"
          >
            GitHub
          </a>

          <a href="/contributing" className="hover:text-white">
            Contributing Guide
          </a>
        </div>
      </div>
    </footer>
  );
}
