import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr1 = [...Array(100).keys()]; //受け渡しに使用する配列
  const arr2 = [...Array(100).keys()]; //受け渡しに使用する配列

  const history = useHistory(); //useHistoryをhistoryという変数に展開
  const onClickDetailA = () => history.push("/page1/detailA"); //pushメソッドを利用、引数に遷移先のパスを指定

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: { arr1, arr2 } }}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
