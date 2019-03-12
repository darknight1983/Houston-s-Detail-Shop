import withLayout from "../lib/withLayout";
import IndexContent from "../components/IndexContent";
import Head from "next/head";

const Index = props => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta
          name="description"
          content="This is the description of the Index page"
        />
      </Head>
      <IndexContent />
    </div>
  );
};

export default withLayout(Index);
