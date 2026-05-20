export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/20 blur-3xl rounded-full"
        ></div>

        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-3xl rounded-full"
        ></div>

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Navbar */}
        <header className="flex items-center justify-between py-8">

          <div className="flex items-center gap-3">

            <div
              className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500"
            ></div>

            <h1 className="text-2xl font-bold tracking-tight">
              ActionPilot
            </h1>

          </div>

          <a
            href="https://github.com/apps/ActionPilot"
            className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition shadow-lg"
          >
            Install App
          </a>

        </header>

        {/* Hero */}
        <section className="text-center py-28">

          <div
            className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 text-sm font-medium mb-8 backdrop-blur"
          >

            GitHub App • Embedded Linux • CI/CD

          </div>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8"
          >

            Secure GitHub
            <br />
            Automation Platform

          </h2>

          <p
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12"
          >

            ActionPilot provides secure GitHub automation for Yocto builds,
            Raspberry Pi 5 kernel compilation, bootloader workflows,
            and scalable DevOps CI/CD pipelines.

          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >

            <a
              href="https://github.com/apps/ActionPilot"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition shadow-2xl"
            >
              Install on GitHub
            </a>

            <a
              href="https://github.com/spikynavin/ActionPilot#readme"
              className="px-8 py-4 rounded-2xl border border-slate-700 bg-slate-900/60 font-semibold hover:bg-slate-800 transition"
            >
              Documentation
            </a>

          </div>

          {/* Workflow Preview */}
          <div
            className="max-w-4xl mx-auto bg-slate-950/80 border border-slate-800 rounded-3xl p-8 text-left shadow-2xl backdrop-blur overflow-hidden"
          >

            <div className="flex gap-2 mb-6">

              <div className="w-3 h-3 rounded-full bg-red-400"></div>

              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

              <div className="w-3 h-3 rounded-full bg-green-400"></div>

            </div>

            <pre className="overflow-x-auto text-sm text-slate-300 leading-7">
{`name: ActionPilot

on:
  workflow_dispatch:

jobs:
  yocto-build:
    runs-on: ubuntu-latest

    steps:
      - name: Generate Token
        uses: actions/create-github-app-token@v1

      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Build Raspberry Pi Kernel
        run: make -j$(nproc)
`}
            </pre>

          </div>

        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6 pb-28">

          {/* Card */}
          <div
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur hover:border-indigo-500/30 transition"
          >

            <div
              className="w-14 h-14 rounded-2xl bg-indigo-500/20 mb-6 flex items-center justify-center text-2xl"
            >
              🔐
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Secure
            </h3>

            <p className="text-slate-400 leading-relaxed">
              GitHub App authentication using short-lived tokens and
              least-privilege repository access.
            </p>

          </div>

          {/* Card */}
          <div
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur hover:border-violet-500/30 transition"
          >

            <div
              className="w-14 h-14 rounded-2xl bg-violet-500/20 mb-6 flex items-center justify-center text-2xl"
            >
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Automated
            </h3>

            <p className="text-slate-400 leading-relaxed">
              CI/CD pipelines, GitHub Actions integration,
              release workflows, and infrastructure automation.
            </p>

          </div>

          {/* Card */}
          <div
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur hover:border-indigo-500/30 transition"
          >

            <div
              className="w-14 h-14 rounded-2xl bg-indigo-500/20 mb-6 flex items-center justify-center text-2xl"
            >
              🚀
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Embedded Linux
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Designed for Yocto workflows,
              Raspberry Pi 5 kernel builds,
              and bootloader development pipelines.
            </p>

          </div>

        </section>

        {/* Footer */}
        <footer
          className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm"
        >

          © 2026 ActionPilot • GitHub Automation Platform

        </footer>

      </div>

    </div>
  )
}