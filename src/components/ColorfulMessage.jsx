/**書き方① */
// const ColorfulMessage = (props) => {
//   const contentStyle = {
//     color: props.color, //引数のcolorを取得
//     fontSize: "18px"
//   };
//   return <p style={contentStyle}>{props.message}</p>;
// };

/**
 * 書き方②　タグで囲った値をchildrenをできる
 */
// const ColorfulMessage = (props) => {
//   const { color, children } = props; //分割代入
//   const contentStyle = {
//     color, //プロパティ名を省略できる
//     fontSize: "18px"
//   };
//   return <p style={contentStyle}>{children}</p>;
// };
// export default ColorfulMessage;

/**
 * export defaultを使わない場合
 */
export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    color, //プロパティ名を省略できる
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
