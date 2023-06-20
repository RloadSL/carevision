import Head from "next/head";
import React from "react";
import TextApp from "../TextApp";

interface SEOHeaderProps {
  title: string;
  description: string;
}

/**
SEO component that allows you to define both the title and the description of the page, you can add the necessary props for the needed meta tags 
 * @param title Title of the page
 * @param description Description of the page
 */

const SEOHeader = ({ title, description }: SEOHeaderProps) => {
  console.log('aqui',title)
  return (
    <Head>
      <title>
        {title}
      </title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEOHeader;
