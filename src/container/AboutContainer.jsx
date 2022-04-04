import { Layout } from "../shared";
import { Contact, Hero } from "../components/about";

function AboutContainer() {
  return (
    <Layout>
        <Hero/>
        <Contact/>
    </Layout>
  );
}

export default AboutContainer;
