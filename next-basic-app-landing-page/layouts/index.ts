import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
type Props = {
  children?: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <main>
      <Head>
        <title>NextJS Basic App Landing Page</title>
        <meta
          name='description'
          content='Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS.'
        />
        <link rel='canonical' href='https://talland-basic-app.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Basic App Landing Page' />
        <meta
          property='og:description'
          content='Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS.'
        />
        <meta property='og:image' content='LINK TO THE IMAGE FILE' />
        <meta
          property='og:url'
          content='https://tailland-basic-app.vercel.app/'
        />
        <meta property='og:site_name' content='Basic App Landing Page' />
        <meta name='twitter:title' content='TITLE OF POST OR PAGE' />
        <meta
          name='twitter:description'
          content='Save time and get to market faster with this free fully responsive single page html template built with TailwindCSS.'
        />
        <meta name='twitter:image' content='LINK TO IMAGE' />
        <meta name='twitter:site' content='@britzdm' />
        <meta name='twitter:creator' content='@britzdm' />
        <meta name='robots' content='index, follow' />
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
