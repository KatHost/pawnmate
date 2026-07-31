export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Artreeland. All rights reserved.
        </p>

        <p>
          Designed & Developed by Artreeland.
        </p>
      </div>
    </footer>
  );
}