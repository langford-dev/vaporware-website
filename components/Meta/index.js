import Head from "next/head";
import metaContent from "../../content/metaContent";

const MetaHead = (props) => {
  const { title } = props;
  return (
    <Head>
      {/* Global Metadata */}
      <meta name="robots" content="follow, index" />
      <meta name="title" content={title || metaContent.title} />
      <meta name="description" content={metaContent.description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/ico" href="/favicon.ico" />
      <title>{title || metaContent.title}</title>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={metaContent.siteName} />
      <meta property="og:url" content={metaContent.url} />
      <meta property="og:title" content={title || metaContent.title} />
      <meta property="og:description" content={metaContent.description} />
      <meta property="og:image" content={metaContent.image} />
      <meta property="og:image:alt" content={metaContent.imageAlt} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaContent.url} />
      <meta property="twitter:title" content={title || metaContent.title} />
      <meta property="twitter:description" content={metaContent.description} />
      <meta property="twitter:image" content={metaContent.image} />
      <meta property="twitter:domain" content={metaContent.url} />
      <meta name="twitter:creator" content={metaContent.twitterCreator} />
      <meta name="twitter:image:alt" content={metaContent.imageAlt} />

      {/* calendly */}
      {/* <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      /> */}
    </Head>
  );
};

export default MetaHead;
