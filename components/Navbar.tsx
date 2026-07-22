export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            OP
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              OnePrompt AI
            </h1>
            <p className="text-xs text-slate-500">
              One Prompt. Complete Work.
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">API</a>
          <a href="#">About</a>
        </nav>

        <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white">
          Login
        </button>
      </div>
    </header>
  );
}