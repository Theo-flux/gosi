import { Layout } from "../shared";
import { Hero, Publications } from "../components/publication";

function PublicationContainer() {
  return (
    <Layout>
        <Hero/>
        <Publications/>
    </Layout>
  );
}

export default PublicationContainer;
