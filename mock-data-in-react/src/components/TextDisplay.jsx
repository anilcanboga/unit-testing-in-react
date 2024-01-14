import { useState } from "react";
import Output from "./Output";

const TextDisplay = () => {
  const [changedText, setChangedText] = useState(false);
  function changeTextHandler() {
    setChangedText(true);
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>How are you?</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default TextDisplay;
