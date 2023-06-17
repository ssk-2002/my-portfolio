import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
// DOUBT: I'm not exporting anything called 'Preloader' then how can I import this?
