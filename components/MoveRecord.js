import React from "react";


export default function MoveRecord({ moveRecords }) {
  return (
    <div
      style={{
        flexGrow: 1,
        textAlign: "center"
      }}
    >
      <button className="surrender-btn" /*onClick={}*/>Đầu hàng</button>
      <h2>Step number: {moveRecords.length}</h2>
      {moveRecords.map((record) => (
        <p shouldFitContainer>
          Previous move point:{record[0]}-{record[1]}
        </p>
      ))}
    </div>
  );
}
