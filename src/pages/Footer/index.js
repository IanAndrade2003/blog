import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";
import { Link } from "gatsby";
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
    <S.Box>
      <S.List><Link to="/">inicio</Link></S.List>
      <S.List><Link to="/Main">Projetos</Link></S.List>
      <S.List><Link to="/Footer">Contatos</Link></S.List>
      </S.Box>
  </S.Container>
  </>
  );
}