import { FunctionComponent } from "react";
import cn from "classnames";

import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/Footer";
import { LayoutProps } from "./Layout.props";
import { AppContextProvider, IAppContext } from "../context/app.context";
import styles from "./Layout.module.css";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper)}>
      <Header className={cn(styles.header)} />
      <Sidebar className={cn(styles.sidebar)} />
      <div className={cn(styles.body)}>{children}</div>
      <Footer className={cn(styles.footer)} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory} >
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
