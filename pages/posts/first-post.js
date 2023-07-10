import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <div>First Post</div>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}

export default FirstPost;
