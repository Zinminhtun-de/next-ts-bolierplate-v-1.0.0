import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';
import { Provider as JotaiProvider } from 'jotai';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/globals.css';
import { LANG_NAMESPACE } from '@/data/lang-namespace-constant';

export const metadata: Metadata = {
  title: 'AIO User',
  description: 'AIO User Site',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: any) => ({ locale }));
}

const i18nNamespaces = [LANG_NAMESPACE.LANG];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <Providers>
          <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
            <JotaiProvider>{children}</JotaiProvider>
          </TranslationsProvider>
        </Providers>
      </body>
    </html>
  );
}
