import React from "react";
import ContextProviders from "./context.providers";
import ReactQueryProvider from "./react-query.provider";

interface IProps {
  children: React.ReactNode;
}
const Providers: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <ReactQueryProvider>
        <ContextProviders>{children}</ContextProviders>
      </ReactQueryProvider>
    </>
  );
};

export default Providers;
