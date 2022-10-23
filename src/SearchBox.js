import React, { useState } from "react";

export default function SearchBox(props) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = (e) => {
    // e.preventDefault();
    console.log("State'teki değerimiz: ", text)
    // console.log("boş olduğu zaman çalışır")
    // console.log("Dolu gelme durumu: ", text);
  };

  return (
    <div className="search-box" style={{ zIndex: '100' }} >
      <input
        type="text"
        onChange={onChange}
        value={text}
        placeholder="Search"
        className="search-input"
      />
      <button type="submit" className="button-click" onClick={onClick}>
        Tıkla
      </button>
    </div>
  );
}
