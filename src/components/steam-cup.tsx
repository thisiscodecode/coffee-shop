export default function SteamCup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <ellipse cx="52" cy="118" rx="44" ry="8" fill="#d4c4a8" opacity="0.5" />
        <ellipse cx="52" cy="115" rx="40" ry="7" fill="#e8ddd0" />
        <path
          d="M22 55 L28 108 C28 108 30 115 52 115 C74 115 76 108 76 108 L82 55 Z"
          fill="#f2ebe2"
          stroke="#c9a87c"
          strokeWidth="1.5"
        />
        <ellipse cx="52" cy="58" rx="30" ry="7" fill="#5e3b24" />
        <ellipse cx="48" cy="57" rx="12" ry="3" fill="#7d5230" opacity="0.6" />
        <ellipse cx="52" cy="55" rx="31" ry="7.5" fill="none" stroke="#c9a87c" strokeWidth="1.5" />
        <path
          d="M82 62 C92 62 98 72 98 82 C98 92 92 98 82 98"
          fill="none"
          stroke="#c9a87c"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M30 72 L74 72" stroke="#c9a87c" strokeWidth="0.8" opacity="0.5" />
        <path d="M30 76 L74 76" stroke="#c9a87c" strokeWidth="0.5" opacity="0.3" />
        <path
          d="M38 48 C35 38 42 32 39 22 C36 12 44 6 41 0"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="steam-wisp-1"
        />
        <path
          d="M52 46 C49 36 56 30 53 20 C50 10 58 4 55 -2"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="steam-wisp-2"
        />
        <path
          d="M66 48 C63 38 70 32 67 22 C64 12 72 6 69 0"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="steam-wisp-3"
        />
      </svg>
    </div>
  );
}
