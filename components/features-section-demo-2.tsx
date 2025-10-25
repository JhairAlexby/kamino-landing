import { cn } from "@/lib/utils";
import {
  IconHeart,
  IconCurrencyDollar,
  IconAdjustmentsBolt,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Conexión Auténtica",
      description:
        "No solo visites, conecta. Descubre las historias y personas que le dan vida a la ciudad, más allá de los monumentos.",
      icon: <IconHeart className="w-8 h-8" />,
    },
    {
      title: "Impulsa la Economía Local",
      description:
        "Damos visibilidad a pequeños cafés, artistas y tiendas locales, ayudando a distribuir el turismo de forma más justa.",
      icon: <IconCurrencyDollar className="w-8 h-8" />,
    },
    {
      title: "Contenido Siempre Relevante",
      description:
        "Nuestra base de datos se actualiza en tiempo real con nuevos lugares, eventos y arte urbano. Siempre hay algo nuevo.",
      icon: <IconAdjustmentsBolt className="w-8 h-8" />,
    },
    {
      title: "Inteligencia Real",
      description:
        "Usamos Machine Learning y Minería de Datos para encontrar patrones y recomendarte lugares que ni tú sabías que te gustarían.",
      icon: <IconTerminal2 className="w-8 h-8" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};