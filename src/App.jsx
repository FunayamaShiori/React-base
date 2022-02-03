import React, { useEffect, useState } from "react";
//import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //カウントアップボタンを押したら、数字が増えていく
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  //顔文字の表示・非表示
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //3の倍数の時だけ顔文字が表示される
  //↓エラーになるコード
  // if (num % 3 === 0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* 書き方1 */}
      <ColorfulMessage color="blue" message="お元気ですか？" />
      {/* 書き方2 */}
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>（＾∇＾）</p>}
    </>
  );
};

export default App;
