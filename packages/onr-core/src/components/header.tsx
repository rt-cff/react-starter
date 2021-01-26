import { FC } from 'react';
import { Layout } from 'antd';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <Layout.Header>
      <Link href="/">
        <a className="brand">
          <strong className="mx-1 text-black">Next Starter</strong>
        </a>
      </Link>
    </Layout.Header>
  );
};
