import React from "react";

export default function MoveReCord({ moveRecord, onClick, history }) {


  return (
    <div
      style={{
        flexGrow: 1,
        textAlign: "center",
      }}
    >
      <button className="surrender-btn" /*onClick={}*/>Đầu hàng</button>
      <h2>Steps</h2>
      <h2>{moveRecord}</h2>
      {/*<ButtonStyle shouldFitContainer>{history}</ButtonStyle>*/}
    </div>
  );
}
