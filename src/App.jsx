import { useState, useCallback } from "react";

import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false); //　表示非表示を切り替えるフラグ

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open); //open stateを反転させる

  // アロー関数で作った関数は毎回新しいものが作成されていると判断される
  // useCallback()を使用する→第二引数に監視したい配列を入れる→setOpneという値が変わったらこの関数を実行するようになる
  const onClickClose = useCallback(() => setOpen(false),[setOpen]); 

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button> {/* ボタンクリックで表示を反転 */}
      {/**propsに関数を渡すと親が再レンダリングされた時別の関数を渡されていると判断する→memo化してても再レンダリングが起きる */} 
      {/**useCallbackを使用して関数の再作成をさせないようにする */}
      <ChildArea open={open} onClickClose={onClickClose} /> {/**open stateをコンポーネントに渡す */}
    </div>
  );
}
