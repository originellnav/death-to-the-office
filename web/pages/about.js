import Container from "../components/container";
import Layout from "../components/layout";
import markdownStyles from "../components/markdown-styles.module.css";

import { getAboutContent } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import { imageBuilder } from "../lib/sanity";

import Head from "next/head";

import BlockContent from "@sanity/block-content-to-react";

export default function Index({ allAbout, preview }) {
  const about = allAbout[0];

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>About - {CMS_NAME}</title>
        </Head>
        <Container>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 md:mb-16">
              <BlockContent
                blocks={about.info}
                className={markdownStyles.markdown}
              />
            </div>
            <div className="col-span-12 md:col-span-8 mt-6 mb-24 md:mb-0 m-0 md:pl-24 relative self-start">
              <div>
                <img
                  width={1320}
                  height={800}
                  alt={`Cover Image for ${about.name}`}
                  src={imageBuilder
                    .image(about.picture)
                    .width(1320)
                    .height(800)
                    .url()}
                />
                <div className="absolute left-0 bottom-0 md:pl-24">
                  <div className="bg-white rounded m-4 p-5 pr-12">
                    <h3 className="text-lg font-bold mb-2">
                      General Enquiries
                    </h3>
                    {about.email && (
                      <a
                        href={`mailto:${about.email}`}
                        className="text-black text-opacity-50 hover:text-opacity-60 transition duration-150 ease font-medium block mb-2"
                      >
                        {about.email}
                      </a>
                    )}
                    {about.phone && (
                      <a
                        href={`tel:${about.phone.replace(/ /g, "")}`}
                        className="text-black text-opacity-50 hover:text-opacity-60 transition duration-150 ease font-medium block"
                      >
                        {about.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto bg-grey pt-12 pb-6 px-12 rounded-md text-center mb-24 md:mb-32">
            <BlockContent
              blocks={about.mission}
              className={markdownStyles.markdown}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allAbout = await getAboutContent(preview);
  return {
    props: { allAbout, preview },
  };
}
