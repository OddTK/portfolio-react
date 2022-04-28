import React from "react";
import { Foovie, MouseQuest, GymBunny } from "../img/index";
import "../style/Style.css";

export default function Projects() {
  return (
        <section className="projects">
            <h1 className="h1P">Projects</h1>
            <a class="btn btn-danger col-5 d-flex m-auto justify-content-center" href="http://www.github.com/oddtk" target="_blank">Github Repositories</a>
            <br />
          <div className="project">
            <a href="https://gymbunny1000.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={GymBunny} width="100%" height="300"/>
            </a>
            <div>
              {" "}
              <h1>Gym Bunny</h1>
              <p className="innerText">
                A MERN stack application created to help new gym goers find different ways to workout and ease gym anxiety.
              </p>
            </div>
          </div>

          <div className="project">
            <a href="https://newmousequestdu.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={MouseQuest} width="100%" height="300"/>
            </a>
            <div>
              {" "}
              <h1>Mouse Quest</h1>
              <p className="innerText">
                Gaming social network where users can go and display their different equipment for fictional game called Mouse Quest.
              </p>
            </div>
          </div>

          <div className="project">
            <a href="https://zacharyjswatfigure.github.io/FoovieMoodProject/" target="_blank" rel="noreferrer">
              <img src={Foovie} width="100%" height="300"/>
            </a>
            <div>
              {" "}
              <h1>The Foovie Mood</h1>
              <p className="innerText">
                Created to help movie fanatics find different dinner recipes for the region/country their movie is created.
              </p>
            </div>
          </div>
        </section>
  );
}
