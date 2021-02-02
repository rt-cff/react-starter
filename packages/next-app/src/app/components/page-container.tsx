import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Page } from '@onr/core';

// import { createGlobalStyle } from 'styled-components';
import lessToJs from 'less-vars-to-js';
import paletteLess from '!!raw-loader!../styles/antd-custom.less';

import pick from 'lodash/pick';

const obj = { a: 'a', b: 'b' };

pick(obj, 'a');

typeof pick;

import _camelCase from 'lodash/camelCase';
import { camelCase } from 'lodash';

const a = camelCase;
const b = _camelCase;

camelCase('321' as string);

const lessVariables = lessToJs(paletteLess || '', {
  resolveVariables: true,
  stripPrefix: true,
});

const a = '123';

const b = camelCase(a);
b;
const theme = Object.entries(lessVariables).reduce((res, [key, value]) => {
  const newKey = camelCase(key);
  console.log(newKey);
  return { ...res, [newKey]: value };
}, {});

console.log(theme);

// camelCasedVariables = objectToCamelCase(lessVariables),
// theme = {
//   ...camelCasedVariables,
// };

export const PageContianer: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  //TODO: add your custom rendering logic or props here
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};
