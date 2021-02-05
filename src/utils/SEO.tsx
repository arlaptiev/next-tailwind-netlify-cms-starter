import React from 'react';

import { NextSeo } from 'next-seo';

import { Config } from './Config';

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
} & typeof defaultProps;

const defaultProps = {
  title: Config.title,
  description: Config.description,
};

const SEO = (props: SEOProps) => (
  <>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: Config.locale,
        site_name: Config.site_name,
      }}
    />
  </>
);

SEO.defaultProps = defaultProps;

export { SEO };
