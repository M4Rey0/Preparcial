# Preparcial I18N con Next.js

Base mínima para cumplir el preparcial de internacionalización con App Router.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`. El Proxy redirige a `/es` o `/en` según:

1. Cookie guardada.
2. Idioma del navegador (`Accept-Language`).
3. Español como idioma por defecto.

## Validar antes de entregar

```bash
npm run typecheck && npm run lint && npm run build
```

## Estructura importante

```text
src/
├── app/
│   ├── globals.css
│   └── [lang]/
│       ├── dictionaries/
│       │   ├── es.json
│       │   └── en.json
│       ├── dictionaries.ts
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── LanguageSwitcher.tsx
├── i18n/config.ts
└── proxy.ts
```

## Qué hace cada archivo

- `src/proxy.ts`: detecta o recupera el idioma y redirige a una URL con prefijo.
- `src/i18n/config.ts`: define idiomas válidos, idioma por defecto y cookie.
- `dictionaries/*.json`: contiene todos los textos visibles.
- `dictionaries.ts`: carga únicamente el JSON del idioma actual en el servidor.
- `[lang]/layout.tsx`: valida el idioma y coloca `<html lang={lang}>`.
- `LanguageSwitcher.tsx`: cambia la URL y guarda la preferencia en cookie.

## Para el parcial

No reemplaces esta base. Agrega las rutas y componentes nuevos dentro de `src/app/[lang]/` y conserva:

- `src/proxy.ts`
- `src/i18n/config.ts`
- `src/app/[lang]/dictionaries.ts`
- `src/app/[lang]/dictionaries/es.json`
- `src/app/[lang]/dictionaries/en.json`
- el `lang` dinámico del layout

Los nombres, botones, títulos, mensajes y metadatos estáticos nuevos deben agregarse a ambos JSON.
