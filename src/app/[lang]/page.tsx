import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <section>
      <p className="mb-2 font-semibold uppercase tracking-widest text-orange-600">
        {dictionary.home.eyebrow}
      </p>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        {dictionary.home.title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        {dictionary.home.description}
      </p>

      <p className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
        <strong>{dictionary.home.currentLanguageLabel}:</strong>{" "}
        {dictionary.home.currentLanguageValue}
      </p>

      <h2 className="mt-10 text-2xl font-bold">
        {dictionary.home.featuresTitle}
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {dictionary.home.features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="mt-2 leading-7 text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
