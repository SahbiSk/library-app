import React from "react";
import tank from "../../img/tank.png";
import me from "../../img/chibi.png";
import "./About.css";
import TeamMember from "./TeamMember/TeamMember";

const About = () => {
  const team = [
    {
      name: "Sahbi Barkallah",
      title: "web developer",
      about:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vitae",
      img: me,
    },
    {
      name: "M. Ayoub Shili",
      title: "web developer",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vitae",
      img: tank,
    },
  ];
  return (
    <div className="about-container">
      <div className="about-container__first">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vitae
          minus nam repellendus harum tempore corrupti, distinctio sint, nemo,
          ab expedita! Mollitia, aspernatur repellat illum ipsum totam nam quae
          sint esse voluptatem deserunt alias temporibus recusandae? Consectetur
          animi ipsa ratione deleniti, fuga rerum eum distinctio nesciunt
          expedita quos eligendi enim minima dolorum sit cupiditate? Eaque
          sapiente dolor ratione nobis laudantium assumenda sed enim, voluptatum
          voluptatem nihil? Similique in modi quaerat provident, velit commodi
          voluptatem fuga consectetur atque officia voluptatum, qui natus
          dolorum nihil omnis sequi fugiat earum, hic aliquid placeat ea ad
          tenetur. Accusantium quia quae ipsam debitis ratione labore nam,
          officiis dolores? Modi laboriosam tempore debitis minus aut, nobis
          mollitia, sit expedita corrupti molestias vitae earum cumque
          temporibus officia deleniti quod necessitatibus praesentium hic,
          explicabo sunt incidunt error deserunt iste! Temporibus laboriosam
        </p>
      </div>
      <div className="about-container__second">
        <h2>Team</h2>
        <div className="team">
          {team.map((member, key) => (
            <TeamMember {...member} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
