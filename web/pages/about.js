import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME} - Escape the city. Work from anywhere.</title>
        </Head>
        <Container>
          <Intro />
          This is my about page
        </Container>
      </Layout>
    </>
  );
}
