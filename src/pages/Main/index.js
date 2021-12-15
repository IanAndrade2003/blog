import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./styles";
import Route from "../../components/Route"
import GlobalStyle from "../../components/GlobalStyles";

export default function Main() {
  const data = useStaticQuery(graphql`
    query {
      finaldata {
        mains {
          starwars
          strytegy
          recipes
          taxi
          livre
        }  
        }
    }
  `);

  const query = data.finaldata.mains[0];

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Boxproject>
          <S.Boxone>
            <a href="https://starwarsgambiarra.netlify.app/">
              <p>{query.starwars}</p>
            </a> 
          </S.Boxone>
          <S.Boxtwo>
          <a href="https://strytegygambiarra.netlify.app/">
            <p>{query.strytegy}</p>
          </a>
          </S.Boxtwo>
          <S.Boxthree>
            <a href="https://recipesgambiarra.netlify.app/">
            <p>{query.recipes}</p>
            </a>
          </S.Boxthree>
          <S.Boxfour>
            <a href="https://uloax-template.netlify.app/">
            <p>{query.taxi}</p>
            </a>
          </S.Boxfour>
          <S.Boxfive>
            <a href="https://livregambiarra.netlify.app/">
            <p>{query.livre}</p>
            </a>
          </S.Boxfive>
        </S.Boxproject>
        <Route />
      </S.Container>
    </>
  );
}