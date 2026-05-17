export function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect
        width="64"
        height="64"
        rx="14"
        className="fill-ink dark:fill-canvas-alt"
      />
      <path
        d="M20 16 L20 48"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-white dark:stroke-ink"
      />
      <path
        d="M20 32 L38 16"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-white dark:stroke-ink"
      />
      <path
        d="M20 32 L42 48"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-white dark:stroke-ink"
      />
      <circle cx="46" cy="16" r="4" fill="#A78BFA" />
    </svg>
  );
}

export function Wordmark({ size = 15 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <Logo size={size + 11} />
      <span
        className="font-semibold tracking-[-0.4px] text-ink dark:text-white"
        style={{ fontSize: `${size}px` }}
      >
        klivrant<span className="text-brand-500">.</span>
      </span>
    </div>
  );
}
