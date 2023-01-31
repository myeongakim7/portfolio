import React from "react";
import Nav from "../components/Nav";

function About() {
  return (
    <>
      <Nav />
      <div className="container title">
        <h1>About</h1>
        <p>내 소개</p>
      </div>
      <div
        className="container"
        style={{ textAlign: "center", background: "#ccc" }}
      >
        <h2>직무능력(Skills)</h2>
        <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,vscode,git,github,vootstrap,sqlite&perline=3" />
        <hr></hr>
        <img src="https://skillicons.dev/icons?i=photoshop,figma&theme=light" />
        {/* 띄어쓰기 하면 아이콘 적용이 안됨  */}
        {/* &뒤에는 옵션값 - 궁금하면 찾아보기 */}
        {/* https://github.com/tandpfun/skill-icons */}
      </div>
    </>
  );
}

export default About;
