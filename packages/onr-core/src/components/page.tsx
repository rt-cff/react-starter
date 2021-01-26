import { FC, ReactNode, ReactElement } from 'react';
import { Layout } from 'antd';
import { Header, SideMenu } from './';

export interface PageProps {
  children: ReactNode
}

export const Page: FC<PageProps> = ({ children }: PageProps): ReactElement => {
  return (
    <Layout>
      <Header />
      <Layout hasSider>
        <SideMenu />
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};
