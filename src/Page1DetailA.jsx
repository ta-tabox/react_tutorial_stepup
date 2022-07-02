import { useHistory, useLocation } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickBach = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBach}>戻る</button>
    </div>
  );
};