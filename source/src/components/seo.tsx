import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const { site } = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        siteUrl: string;
      };
    };
  }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  );

  const { title: defaultTitle, siteUrl } = site.siteMetadata;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description:
      description ||
      "Tim Head Counselling - Professional marriage, teens, and family counselling services in South Surrey and Ladner, BC.",
    url: `${siteUrl}${pathname || ""}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};

export default SEO;
