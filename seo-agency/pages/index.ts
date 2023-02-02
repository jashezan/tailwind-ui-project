import type { NextPage } from 'next';
import Hero from '@components/hero';
import Beneftis from '@components/benefits';
import Services from '@components/services';
import Portfolio from '@components/portfolio';
import CTA from '@components/CTA';
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Beneftis />
      <Services />
      <Portfolio />
      <CTA />
    </>
  );
};

export default Home;
