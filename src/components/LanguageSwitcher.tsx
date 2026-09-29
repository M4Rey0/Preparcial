"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeCookieName } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  labels: {
    selector: string;
    spanish: string;
    english: string;
  };
}

export default function LanguageSwitcher({
  currentLocale,
  labels,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (nextLocale: Locale) => {
    document.cookie = `${localeCookieName}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;

    const segments = pathname.split("/");
    segments[1] = nextLocale;

    const nextPath = segments.join("/") || `/${nextLocale}`;
    router.push(`${nextPath}${window.location.search}`);
  };

  return (
    <div
      className="flex items-center gap-2"
      aria-label={labels.selector}
      role="group"
    >
      <button
        type="button"
        onClick={() => changeLanguage("es")}
        aria-pressed={currentLocale === "es"}
        className={`rounded px-3 py-1.5 text-sm font-medium transition ${
          currentLocale === "es"
            ? "bg-white text-orange-700"
            : "text-white hover:bg-orange-500"
        }`}
      >
        {labels.spanish}
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("en")}
        aria-pressed={currentLocale === "en"}
        className={`rounded px-3 py-1.5 text-sm font-medium transition ${
          currentLocale === "en"
            ? "bg-white text-orange-700"
            : "text-white hover:bg-orange-500"
        }`}
      >
        {labels.english}
      </button>
    </div>
  );
}
