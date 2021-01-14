import { FC } from 'react';
import type { AppProps } from 'next/app';

export const PageContianer: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  //TODO: add your custom rendering logic or props here
  return <Component {...pageProps} />;
};
