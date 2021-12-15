import React from "react";
import GlobalStyle from "../components/GlobalStyles";
import Header from "../components/Header";
import Route from "../components/Route";

export default function Index() {
  return (
    <>
      <GlobalStyle />

      <Header/>
      <Route />

    </>
  );
}