import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center; /* 글씨를 중앙으로! */
  margin: 20px 0;
`;
function MainPage(props) {
  const { posts } = props; 
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <MainTitleText>소플의 미니 블로그</MainTitleText>

        <PostList
          posts={posts}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
