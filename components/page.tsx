import { PropsWithChildren } from "react";

import PageContainer from "./page-container";
import Header from "./header";

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
  sticky?: boolean;
}>;

const Page = ({ title, description, sticky, children }: Props) => {
  return (
    <PageContainer title={title} description={description}>
      <Header sticky={sticky} />
      {children}
    </PageContainer>
  );
};

export default Page;
