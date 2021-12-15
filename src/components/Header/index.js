import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      finaldata {
        headers {
          logo {
            url
          }
          mode {
            url
          }
          toggle
          location {
            url
          }
          pais
          linkedin
          github 
      }
    }
  }
  `);

  const query = data.finaldata.headers[0];

  return (
    <>
      <S.Container>
        <S.Boxlogo>
        <S.Imag src={query.logo.url} alt="logo do site" />
        </S.Boxlogo>
        <S.Boxlocation>
          <S.Local src={query.location.url}/>
          <S.Paragraph>{query.pais}</S.Paragraph>
        </S.Boxlocation>
        <S.Boxsocials>
        <S.Paragraph><a href="https://www.linkedin.com/in/ian-andrade-349b0320a/">{query.linkedin}</a></S.Paragraph>
          <S.Paragraph><a href="https://github.com/IanAndrade2003">{query.github}</a></S.Paragraph>
        </S.Boxsocials>
      </S.Container>
    </>
  );
}