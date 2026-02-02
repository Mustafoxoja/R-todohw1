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
    setTodo((prev) => [newtodo, ...prev]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((t) => t.id !== id));
    console.log(id);
  };
  const togTodo = (id) => {
    setTodo((prev) =>
      prev.map((data) =>
        data.id === id ? { ...data, done: !data.done } : data,
      ),
    );
  };

  console.log(todo);
  const clearall = () => {
    setTodo([]);
  };
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
          <Button onClick={clearall}>Clear all</Button>
        </Form>
        <Span>Total:{todo.length}</Span>
        <Span>Done:{todo.filter((data) => data.done).length}</Span>

        <ul>
          {todo.map((value, index) => {
            return (
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                key={value.id}
              >
                <li>
                  <input type="checkbox" onChange={() => togTodo(value.id)} />
                  <span
                    style={{
                      flex: 1,
                      textDecoration: value.done ? "Line-through" : "none",
                    }}
                  >
                    {index + 1}. {value.text}
                  </span>
                </li>
                <button onClick={() => deleteTodo(value.id)}>delete</button>
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
const Span = styled.span`
  display: flex;
  margin-left: 130px;
`;
export default Todolist;
