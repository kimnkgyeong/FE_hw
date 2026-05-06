import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
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

function PostWritePage(props) {
  const { onAddPost } = props;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleComplete = () => {
    if (!title || !content) return alert("제목과 내용을 입력해주세요.");
    onAddPost({ title, content }); 
    navigate("/"); 
  };

  return (
    <Wrapper>
      <Container>
        <h2>소플의 미니 블로그</h2>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목을 입력하세요"
        />
        <TextInput
          height={480}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="내용을 입력하세요"
        />
        <Button title="글 작성하기" onClick={handleComplete} />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
