import Head from 'next/head';
import { SEO_IMAGE } from 'data/constants';

type Props = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const defaultTitle = 'Akshat Samdani - Full Stack Developer';
const defaultKeywords = 'web development, programming, web design, react js, chakra ui';
const defaultDescription = 'Software Engineer. Lover of web and opensource.';

const Meta = ({
  title = defaultTitle,
  keywords = defaultKeywords,
  description = defaultDescription,
  image = SEO_IMAGE
}: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title.includes('Akshat') ? title : title.concat(' | Akshat Samdani')}</title>
    </Head>
  );
};

export default Meta;
