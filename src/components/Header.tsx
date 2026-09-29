import Link from "next/link";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface HeaderProps {
  lang: Locale;
  texts: {
    brand: string;
    home: string;
    languageSelector: string;
    spanish: string;
    english: string;
  };
}

export default function Header({ lang, texts }: HeaderProps) {
  return (
    <header className="bg-[#FF6B35] text-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={`/${lang}`} className="text-xl font-bold">
          {texts.brand}
        </Link>

        <div className="flex flex-wrap items-center gap-4">
          <Link href={`/${lang}`} className="font-medium hover:underline">
            {texts.home}
          </Link>

          <LanguageSwitcher
            currentLocale={lang}
            labels={{
              selector: texts.languageSelector,
              spanish: texts.spanish,
              english: texts.english,
            }}
          />
        </div>
      </nav>
    </header>
  );
}
