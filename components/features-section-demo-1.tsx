import React from "react";
import { useId } from "react";

export default function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-800 dark:text-white text-center">
          Explora la ciudad como nunca antes
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center mt-6 text-lg">
          Kamino convierte cada rincón en una aventura. Estas son tus
          herramientas para descubrir el lado auténtico de la ciudad.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4 max-w-7xl mx-auto mt-12 md:mt-20 px-4 md:px-8">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Rutas Inteligentes y Personalizadas",
    description:
      "Dinos tus gustos y tu tiempo disponible. Kamino crea una ruta a pie única para ti, eliminando la fatiga de decidir.",
  },
  {
    title: "Narrador Urbano (IA)",
    description:
      "Convierte un simple paseo en una historia. Nuestra IA te cuenta anécdotas, datos curiosos y el contexto de cada parada.",
  },
  {
    title: "Descubrimiento de Joyas Ocultas",
    description:
      "Ve más allá de lo turístico. Nuestro motor prioriza cafés, galerías y arte callejero que coinciden con tus gustos.",
  },
  {
    title: "Bitácora de Descubrimientos",
    description:
      "Tu diario personal de exploración. Guarda tus rutas completadas, añade fotos y notas para revivir tus aventuras.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [7, 1],
    [9, 3],
    [8, 5],
    [10, 2],
    [7, 4],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}