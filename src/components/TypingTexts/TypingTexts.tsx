import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./TypingTexts.less";

interface Props {}
const TypingTexts: React.FC<Props> = () => {
  return (
    <div className="main-about">
      <h1>
        Hey
        <span role="img" aria-label="sheep">
          👋
        </span>
        <br />
        I'm Eric
      </h1>
      <h3>
        <span role="img" aria-label="sheep">
          💻
        </span>{" "}
        I'm a full-stack developer with knowledge in
      </h3>
      <h3>
        <ReactTypingEffect
          eraseSpeed={100}
          eraseDelay={500}
          speed={300}
          typingDelay={500}
          text={[
            "Django",
            "Ruby on Rails",
            "React JS",
            "Angular",
            "Rest API",
            "Software architecture",
          ]}
        />
      </h3>
    </div>
  );
};

export default TypingTexts;
