import { site } from "@/lib/site";

/**
 * Monogramme « OA » + signature AGENCY ONE.
 * Reconstitution éditoriale : O serif (anneau) avec A serif superposé.
 */
export function Logo({
  variant = "full",
  className = "",
  dark = false,
}: {
  variant?: "full" | "mark";
  className?: string;
  dark?: boolean;
}) {
  const stroke = dark ? "#FAF9F6" : "#141414";

  const Mark = (
    <svg
      viewBox="0 0 120 120"
      width="100%"
      height="100%"
      role="img"
      aria-label={`${site.name} monogramme`}
    >
      {/* O — anneau serif */}
      <ellipse
        cx="56"
        cy="50"
        rx="34"
        ry="36"
        fill="none"
        stroke={stroke}
        strokeWidth="3.4"
      />
      {/* A — serif, apex dans l'anneau, jambes au-delà */}
      <g
        fill="none"
        stroke={stroke}
        strokeWidth="3.4"
        strokeLinecap="butt"
      >
        {/* jambe gauche */}
        <line x1="66" y1="22" x2="44" y2="100" />
        {/* jambe droite */}
        <line x1="66" y1="22" x2="88" y2="100" />
        {/* barre */}
        <line x1="52" y1="74" x2="80" y2="74" />
        {/* empattements */}
        <line x1="38" y1="100" x2="50" y2="100" />
        <line x1="82" y1="100" x2="94" y2="100" />
      </g>
    </svg>
  );

  if (variant === "mark") {
    return <div className={className}>{Mark}</div>;
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="h-10 w-10">{Mark}</div>
      <span
        className="mt-1 text-[10px] font-medium tracking-wider3 uppercase"
        style={{ color: stroke }}
      >
        Agency&nbsp;One
      </span>
    </div>
  );
}
