import React, { useState } from "react";
import styled from "styled-components";

const Todolist = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  console.log(text);

  const addTodo = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    const newtodo = {
      id: Date.now(),
      text: value,
      done: false,
    };
    setTodo((prev) => [newtodo, ...todo]);
    // setTodo("");
  };
  const todonew = (id) => {
    setTodo((prev) => prev.filter((d) => d.id !== id));
  };
  console.log(todo);

  return (
    <ToContainer>
      <ToWrapper>
        <h1>Todo List:</h1>
        <Form onSubmit={addTodo}>
          <Input
            type="text"
            placeholder="todo list"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">Add</Button>
        </Form>
        <span>total:{todo.length}</span>
        {/* <ul>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <li>Running</li>
            <button>delete</button>
          </div>{" "}
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <li>Running</li> <button>delete</button>
          </div>
        </ul> */}

        <ul>
          {todo.map((value, index) => {
            return (
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                key={value.id}
              >
                <li>
                  {index}. {value.text}
                </li>
                <button onClick={() => todonew(value.id)}>delete</button>
              </div>
            );
          })}
        </ul>
      </ToWrapper>
    </ToContainer>
  );
};
const ToContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ToWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 8px;
  /* width: 500px; */
  padding: 20px;
`;
const Form = styled.form`
  display: flex;

  justify-content: center;
`;
const Button = styled.button`
  padding: 8 px 20px;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 300px;
  padding-left: 10px;
`;

export default Todolist;
