import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
};

const SocialMeta = ({ title, description, image, url, keywords }: Props) => (
  <Head>
    <meta name="twitter:site" content="@stoked-dev" />
    <meta
      name="twitter:card"
      content={image ? "summary_large_image" : "summary"}
    />
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="og:image" content={`https://stoked.dev${image}`} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
);

export default SocialMeta;
