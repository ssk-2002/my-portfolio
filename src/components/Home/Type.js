import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer..",
          "PERN Stack Developer..",
          "Technical Content Writer..",
        ],
        autoStart: true,
        loop: true,
        // typingSpeed: 5,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
