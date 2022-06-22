import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memoで囲うとpropsが変更されない限り再レンダリングしなくなる
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
console.log("ChildAreaがレンダリングされた!!");

  const data = [...Array(2000).keys()];
  data.forEach( () => {
    console.log("...");
  })

  return (
    <>
      {/**三項演算子でopenの状態に応じて条件分岐 */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
