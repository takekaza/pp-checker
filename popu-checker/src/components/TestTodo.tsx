import React from "react";
import { useState } from "react";

export const TestTodo = () => {
  // state
  const [inputValue, setInputValue] = useState("");
  // 他のバリューが入らないよう事前のTodo[]配列指定
  const [todos, setTodos] = useState<Todo[]>([]);
  // 型定義
  // 自作で型を用意して厳格にする
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log("作成ボタンクリック");
    e.preventDefault();

    // 新しいTodo作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    // スプレッド構文->どんどん入れていく
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  // map関数で取り出す

  // Edit
  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // check
  const handleCheck = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Delete
  const handleDelete = (id: number) => {
    //1つ1つのtodoに対して調べる=>例：1と合ってないなら残す
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>ToDoリスト in TypeScript</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            className="inputText"
          />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              {/* {todo.inputValue} */}
              <input
                type="text"
                onChange={(e) => {
                  handleEdit(todo.id, e.target.value);
                }}
                className="inputText"
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                onChange={(e) => {
                  handleCheck(todo.id, todo.checked);
                }}
              />
              <button onClick={() => handleDelete(todo.id)}>消す</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
