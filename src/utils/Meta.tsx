import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Config } from './Config';

type MetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
} & typeof defaultProps;

const defaultProps = {
  title: Config.title,
  description: Config.description,
};

const Meta = (props: MetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        href={`${process.env.baseUrl}/apple-touch-icon.png`}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.baseUrl}/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.baseUrl}/favicon-16x16.png`}
        key="icon16"
      />
      <link rel="icon" href={`${process.env.baseUrl}/favicon.ico`} key="favicon" />

      {/* PWA
          https://gist.github.com/gabskoro/c3dea97a743fa1dd43f1
      */}
      {/*
      <meta name="msapplication-TileColor" content="#2b5797" />
      <link rel="manifest" href={`${process.env.baseUrl}/site.webmanifest`} />
      */}

      {/*
      Safari Pinned Tab
      http://markhagethorn.com/2015/11/23/apple_pinned_tab.html
      */}
      <link
        rel="mask-icon"
        href={`${process.env.baseUrl}/safari-pinned-tab.svg`}
        color={Config.theme_primary_color}
      />

      {/*
      Surrounding user interface color for Android:
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
      */}
      <meta name="theme-color" content={Config.theme_primary_color} />
    </Head>

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

Meta.defaultProps = defaultProps;

export { Meta };
