import withLayout from "../lib/withLayout";
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
      <h1>This is the Index Page</h1>
    </div>
  );
};

export default withLayout(Index);
