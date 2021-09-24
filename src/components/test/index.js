import React from "react";

import "./index.css";
import "./index.sass";
import "./index.styl";
import "./index.less";

function Test() {
  return (
    <div>
      <div className="text">test</div>
      <div className="less-text">less test</div>
      <div className="sass-text">sass test</div>
      <div className="styl-text">styl-text</div>
    </div>
  );
}

export default Test;
