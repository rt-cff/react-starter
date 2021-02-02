import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { APPLICATION_TITLE, APPLICATION_ICON } from '../configs/app-configs';
import { PageContianer } from './page-container';

import 'antd/dist/antd.css';

export const MyApp: FC<AppProps> = (props: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
      />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* Default tab title and icon, could be override with Head component in page-level component*/}
      {/* could be refactor out to core component */}
      <title>{APPLICATION_TITLE}</title>
      <link rel="shortcut icon" href={APPLICATION_ICON} />
      <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700" rel="stylesheet" />
    </Head>
    <PageContianer {...props} />
  </>
);
