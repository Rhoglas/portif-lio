import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function TxtWriter() {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Rhoglas Lobato Aragão")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Rhoglas Lobato Aragão")
            .start();
        }}
      />
    </div>
  );
}

export default TxtWriter;
