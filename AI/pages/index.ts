import type { NextPage } from "next";
import Hero from "@components/hero";
import CTA from "@components/CTA";
import Companies from "@components/companies";
import FeatureA from "@components/featureA";
import FeatureB from "@components/featureB";
import Benefits from "@components/beneftis";
import Showcase from "@components/showcase";
import Reviews from "@components/reviews";
import Pricing from "@components/pricing";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <FeatureA />
      <FeatureB />
      <Benefits />
      <Showcase />
      <Reviews />
      <Pricing />
      <CTA />
    </>
  );
};

export default Home;
