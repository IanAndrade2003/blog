import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";
import Route from "../../components/Route"
import GlobalStyle from "../../components/GlobalStyles";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      finaldata {
        footers {
          about
          sobre
          linkedin
          github
        }
      }
    }
  `);

  const query = data.finaldata.footers[0];
  
  return (
    <>
    <GlobalStyle />
    <S.Container>
    <S.Subtitle>{query.about}</S.Subtitle>
    <S.Paragraph>{query.sobre}</S.Paragraph>
    <S.Boxsocials>
    <S.Paragraphsocials><a href="https://www.linkedin.com/in/ian-andrade-349b0320a/">{query.linkedin}</a></S.Paragraphsocials>
    <S.Paragraphsocials><a href="https://github.com/IanAndrade2003">{query.github}</a></S.Paragraphsocials>
    </S.Boxsocials>
    <Route />
  </S.Container>
  </>
  );
}