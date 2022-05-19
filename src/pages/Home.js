import React from "react";
import "../style/Style.css";
import DistortedTK from "../img/distorted_tk.png";

export default function Home() {
  return (
    <section className="home contactPage">
      <div>
        <img src={DistortedTK} alt="animated Jesus distorted" />
      </div>
      <div className="homeText">
        <h1>Hello, I'm Jesus Balandra</h1>
        <h3>
          I'm a{" "}
          <span>full stack developer</span>
        </h3>
        <br />
        <div className="resumeBtn">
          <a
            class="btn btn-danger col-4"
            href="https://drive.google.com/file/d/1g98MdkmMuh865XDznyeQZlxo5qxbHREB/view?usp=sharing"
            target="_blank" rel="noreferrer"
          >
            Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
