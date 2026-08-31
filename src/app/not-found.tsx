import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center py-24 sm:py-32 bg-white">
      <div className="max-w-md mx-auto px-6 text-center flex flex-col items-center gap-6">
        <span className="font-pixel-accent text-text-muted uppercase">
          [ 404 // NOT FOUND ]
        </span>
        <h1 className="font-heading font-normal text-4xl sm:text-5xl text-text-primary tracking-tight">
          Page not found
        </h1>
        <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
          The requested resource does not exist or has been moved.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-6 py-3 rounded-[4px] transition-all"
          >
            Return Home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center bg-white text-text-primary border border-border-structural hover:bg-panel font-heading text-xs uppercase tracking-[0.1em] px-6 py-3 rounded-[4px] transition-all"
          >
            Explore Work
          </Link>
        </div>
      </div>
    </div>
  );
}
