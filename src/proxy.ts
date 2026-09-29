import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  locales,
  type Locale,
} from "./i18n/config";

function localeFromHeader(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase();

  if (!acceptLanguage) {
    return defaultLocale;
  }

  for (const language of acceptLanguage.split(",")) {
    const code = language.trim().split(";")[0]?.split("-")[0];

    if (isLocale(code)) {
      return code;
    }
  }

  return defaultLocale;
}

function preferredLocale(request: NextRequest): Locale {
  const savedLocale = request.cookies.get(localeCookieName)?.value;

  if (isLocale(savedLocale)) {
    return savedLocale;
  }

  return localeFromHeader(request);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameLocale) {
    const response = NextResponse.next();
    response.cookies.set(localeCookieName, pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const locale = preferredLocale(request);
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set(localeCookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
