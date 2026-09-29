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
      <h1 className="text-3xl font-bold text-[#ffffff]">Personajes de Harry Potter</h1>
      <p>Explora el universo magico de Harry Potter: un listado completo de perosnajes y sus casas</p>
      <div className="grid grid-cols-3 gap-4 "> 
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
        <p> gdfgsfdgfdgfd</p>
      </div>
    </section>
  );
}
