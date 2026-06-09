// Animated hero backdrop. Metro-style polylines with packets of "data" traveling
// along each track, evoking signal flow through a neural circuit.
//
// To tweak: edit `tracks` below — each entry has a color (matches a --uais-* CSS var),
// a polyline path, a speed (seconds per loop), and a delay offset.

const tracks = [
  { color: "blue",   d: "M40,120 L200,120 L240,160 L420,160 L460,140 L640,140",                dur: 6.5, delay: 0 },
  { color: "green",  d: "M80,260 L260,260 L300,300 L520,300 L560,260 L760,260 L800,300 L980,300", dur: 8,   delay: 0.6 },
  { color: "yellow", d: "M60,420 L220,420 L260,460 L480,460 L520,500 L700,500 L740,470 L900,470", dur: 7.5, delay: 1.2 },
  { color: "orange", d: "M500,80 L700,80 L740,120 L980,120 L1020,160 L1160,160",                dur: 7,   delay: 0.3 },
  { color: "red",    d: "M640,360 L820,360 L860,400 L1100,400",                                  dur: 5.5, delay: 1.5 },
  { color: "pink",   d: "M780,560 L940,560 L980,520 L1140,520",                                  dur: 6,   delay: 0.9 },
] as const;

// Endpoint nodes (static glowing dots at line termini).
const nodes: { x: number; y: number; c: string }[] = [
  { x: 40, y: 120, c: "blue" },   { x: 640, y: 140, c: "blue" },
  { x: 80, y: 260, c: "green" },  { x: 980, y: 300, c: "green" },
  { x: 60, y: 420, c: "yellow" }, { x: 900, y: 470, c: "yellow" },
  { x: 500, y: 80, c: "orange" }, { x: 1160, y: 160, c: "orange" },
  { x: 640, y: 360, c: "red" },   { x: 1100, y: 400, c: "red" },
  { x: 780, y: 560, c: "pink" },  { x: 1140, y: 520, c: "pink" },
];

export const NeuralBackdrop = () => (
  <svg
    aria-hidden
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1200 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      {tracks.map((t) => (
        <radialGradient key={`g-${t.color}`} id={`packet-${t.color}`}>
          <stop offset="0%" stopColor={`hsl(var(--uais-${t.color}))`} stopOpacity="1" />
          <stop offset="60%" stopColor={`hsl(var(--uais-${t.color}))`} stopOpacity="0.4" />
          <stop offset="100%" stopColor={`hsl(var(--uais-${t.color}))`} stopOpacity="0" />
        </radialGradient>
      ))}
    </defs>

    {/* Static, dim "tracks" */}
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.35">
      {tracks.map((t) => (
        <path key={`track-${t.color}`} d={t.d} stroke={`hsl(var(--uais-${t.color}))`} />
      ))}
    </g>

    {/* Traveling packets — each packet is a glowing dot animated along its track */}
    {tracks.map((t, i) => (
      <g key={`packet-g-${i}`}>
        {/* leading bright packet */}
        <circle r="6" fill={`url(#packet-${t.color})`}>
          <animateMotion dur={`${t.dur}s`} repeatCount="indefinite" begin={`${t.delay}s`} path={t.d} rotate="auto" />
        </circle>
        {/* trailing softer packet for sense of motion */}
        <circle r="3.5" fill={`hsl(var(--uais-${t.color}))`} opacity="0.7">
          <animateMotion dur={`${t.dur}s`} repeatCount="indefinite" begin={`${t.delay + 0.18}s`} path={t.d} />
        </circle>
        <circle r="2" fill={`hsl(var(--uais-${t.color}))`} opacity="0.45">
          <animateMotion dur={`${t.dur}s`} repeatCount="indefinite" begin={`${t.delay + 0.34}s`} path={t.d} />
        </circle>
      </g>
    ))}

    {/* Endpoint nodes */}
    {nodes.map((n, i) => (
      <g key={`node-${i}`}>
        <circle cx={n.x} cy={n.y} r={5} fill={`hsl(var(--uais-${n.c}))`} />
        <circle cx={n.x} cy={n.y} r={9} fill="none" stroke={`hsl(var(--uais-${n.c}))`} strokeOpacity="0.35" />
      </g>
    ))}
  </svg>
);

export default NeuralBackdrop;
