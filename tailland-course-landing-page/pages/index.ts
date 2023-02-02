import type { NextPage } from 'next';
import Benefits from '../components/benefits';
import Blog from '../components/blog';
import Branches from '../components/branches';
import CTA from '../components/cta';
import Features from '../components/features';
import Hero from '../components/hero';
import Remote from '../components/remote';
import CTAAlt from '../components/cta_alt';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <Blog />
      <CTA />
      <Remote />
      <Branches />
      <CTAAlt />
      <Footer />
    </>
  );
};

export default Home;
