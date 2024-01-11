import {
  FC,
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react";
import ProfileContext from "../index";
// import { TextData } from '../types/types';
import SomeTest from "./SomeTest";
import useLocalStorage from "../hooks/useLocalStorage";

// useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

// : FC
const TestComponent = () => {
  /*
    useState
  */
  const [count, setCount] = useState(0);
  const profileInfo = useContext(ProfileContext);
  // 参照：探しに行ってくれる
  const ref = useRef(null);
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(setCount);
  };

  /*
    useEffect
  */
  useEffect(() => {
    console.log("[Debug] reload hooks");

    // setCount(count + 1); // 依存関係を気を付ける
    return () => {};
  }, [count]);

  /*
    useContext
      どこを起点にデータの受け渡しをされているかバケツリレーが改善される
      親から子へ直接渡すことができる
      Redux: storeを持っていてグローバルで渡すとかある
      例：ECサイトのログインアカウント情報とか
  */

  /*
    useRef
      inputのValueを取得したいとか
  */
  const handleRef = () => {
    console.log("[Debug]", ref);
  };

  /*
    useReducer
    ストア：倉庫、情報が入っている
      └ ステート：状態
      └ uiでAction作成される -> Dispatchで通知 -> store
      -> state -> reducer
        └ 0円と追加のアクション
        └ 役割としては前の状態から追加のアクションを足すアルゴリズムを担っている
  */

  /*
    useMemo
    値をブラウザで保存する。簡単に値取得
    関係ないものは前にある値をメモリに保存して処理するってこと
    使うタイミングとは？重い処理とは？
    メモリ圧迫の原因にもなるので塩梅がある
  */
  const [count01, setcount01] = useState(0);
  const [count02, setcount02] = useState(0);

  // const squere = () => {
  //   let i = 0;
  //   while (i < 200000000) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };
  const squere = useMemo(() => {
    let i = 0;
    while (i < 20) {
      i++;
    }
    console.log("[Debug] 02 がクリックされました");
    return count02 * count02;
  }, [count02]);

  /*
    useCallback
    保存する内容は関数、関数のメモ化
    子コンポーネントの余計な処理を発動させない
  */
  // const [counter, setCounter] = useState(0);
  // const showCount = () => {
  //   alert("これは思い処理です");
  // };
  // const showCount = useCallback(
  //   () => {
  //     alert("これは思い処理です");
  //   },
  //   { counter }
  // );

  /*
    カスタムフック
    
  */
  const [age, setAge] = useLocalStorage("age", 30);

  return (
    <div>
      <h1>Practice</h1>
      <hr />
      <h2>useState, useEffect</h2>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>
      <h2>useContext</h2>
      <p>{profileInfo.name}</p>
      <p>{profileInfo.age}</p>
      <h2>useRef</h2>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
      <br />
      <br />
      <h2>useReducer</h2>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>ー</button>
      <br />
      <br />
      <h2>useMemo</h2>
      <div>カウント1：{count01}</div>
      <div>カウント2：{count02}</div>
      <div>結果：{squere}</div>
      <button onClick={() => setcount01(count01 + 1)}>＋</button>
      <button onClick={() => setcount02(count02 + 1)}>＋</button>
      <br />
      <br />
      <h2>useCallback</h2>
      {/* <SomeTest shoCount={showCount} /> */}
      <br />
      <br />
      <h2>カスタムフック</h2>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>
      <hr />
    </div>
  );
};

export default TestComponent;
