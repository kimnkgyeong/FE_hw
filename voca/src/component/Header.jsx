import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

const StyledLink = styled(Link)`
  border: 1px solid #333;
  padding: 10px;
  margin-left: 10px;
  background-color: #efefef;
  font-weight: bold;
  border-radius: 4px;
`;

export default function Header() {
  return (
    <HeaderWrap>
      <h1>
        <Link to="/">영어 단어장 만들기</Link>
      </h1>
      <Menu>
        <StyledLink to="/create_word">단어 추가</StyledLink>
        <StyledLink to="/create_day">Day 추가</StyledLink>
      </Menu>
    </HeaderWrap>
  );
}
