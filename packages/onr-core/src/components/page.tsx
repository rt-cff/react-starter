import { FC, ReactNode, ReactElement } from 'react';

export interface PageProps {
  children: ReactNode
}

export const Page: FC<PageProps> = ({ children }: PageProps): ReactElement => {
  console.log('hi');
  return <div>{children}</div>;
};
