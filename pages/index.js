import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! My name is Cameron Chardukian. I'm a full-stack software
          developer, juggler, and foreign language enthusiast.
        </p>
        <p>
          You can get in touch with me on{" "}
          <a href="https://github.com/camchardukian">Github</a> or{" "}
          <a href="https://www.linkedin.com/in/cameron-chardukian/">
            LinkedIn.
          </a>
        </p>
      </section>
    </Layout>
  );
}
