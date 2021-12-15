import React from "react";
import * as S from "./styles";
import { Link } from "gatsby";

export default function Index() {
    return (
      <>
        <S.Box>
        <S.List><Link to="/">inicio</Link></S.List>
        <S.List><Link to="/Main">Projetos</Link></S.List>
        <S.List><Link to="/Footer">Contatos</Link></S.List>
        </S.Box>
      </>
    );
  }