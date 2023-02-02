import type { NextPage } from 'next';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';
import FeatureA from '../components/FeatureA';
import FeatureB from '../components/FeatureB';
import Hero from '../components/Hero';
import Stats from '../components/Stats';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <FeatureA />
      <FeatureB />
      <Stats />
      <CTA />
    </>
  );
};

export default Home;
