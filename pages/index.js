import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am <b>Joy</b>. I am a frontend developer who is provocative in
          learning and find peace when coding.{" "}
        </p>
      </section>
    </Layout>
  );
}
