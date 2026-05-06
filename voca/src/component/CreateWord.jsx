import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const InputArea = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
`;

const Select = styled.select`
  width: 400px;
  height: 40px;
  font-size: 20px;
`;

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch("http://localhost:3001/words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다!");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <InputArea>
        <Label>Eng</Label>
        <Input type="text" placeholder="computer" ref={engRef} />
      </InputArea>

      <InputArea>
        <Label>Kor</Label>
        <Input type="text" placeholder="컴퓨터" ref={korRef} />
      </InputArea>

      <InputArea>
        <Label>Day</Label>
        <Select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </Select>
      </InputArea>

      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
