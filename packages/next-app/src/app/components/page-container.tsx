import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Page } from '@onr/core';

export const PageContianer: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  //TODO: add your custom rendering logic or props here
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};
