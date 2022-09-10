import React from "react";
import styled from "styled-components";
import "./App.css";

let Box = styled.div`
  padding: 20px;
  background: pink;
`;

let BlueBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => (props.bg === "blue" ? "white" : "black")};
  padding: 10px;
`;

const Button = styled.button`
  background: ${props => (props.width < 200 ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  // border: 2px solid palevioletred;
  border-radius: 3px;
`;

let Memo = styled.input.attrs({ placeholder: "메모장입니다. 입력해 주세요." })`
  vertical-align: top;
  background: #bbdefb;
  color: #311a91;
  width: 300px;
  height: 500px;
  font-size: 20px;
`;

function App() {
  return (
    <div>
      <Box>
        <BlueBtn bg="blue">블루 버튼</BlueBtn>
        <BlueBtn bg="orange">오렌지 버튼</BlueBtn>
        <Button primary width="100">
          click
        </Button>
        <Button>click</Button>
      </Box>

      <Memo></Memo>
    </div>
  );
}

export default App;
