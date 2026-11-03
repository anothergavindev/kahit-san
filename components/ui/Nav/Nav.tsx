export default function Nav() {
  return (
    <nav className="flex items-center justify-between rounded-t-xl bg-[#f8f6f1] px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="flex size-7 items-center justify-center rounded-xl bg-[#c8553d] text-white">
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M5 3v6a3 3 0 0 0 6 0V3M8 3v18M16 21V3c2.5 0 4 2 4 5s-1.5 5-4 5" />
          </svg>
        </span>
        <span className="font-brand text-sm font-extrabold text-[#2a2420]">
          food roulette
        </span>
      </div>

      <button
        type="button"
        aria-label="Surprise me"
        className="flex size-7 items-center justify-center rounded-full bg-[#ebcb6b] text-[#1f1a17]"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z" />
        </svg>
      </button>
    </nav>
  );
}
