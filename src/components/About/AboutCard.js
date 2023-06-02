import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sughosh </span>
            from <span className="purple"> Bengaluru, Bharath 🇮🇳.</span>
            <br /> I am a final year student pursuing an Integrated MTech
            in Data Science at BITS Pilani.
            <br />
            Additionally, I am currently employed as a Data Analyst at
            Oracle.
            <br />
            <br />
            Coding by profession, Footballer by passion, Civilizationalist by ideology!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Offensive Footballer - I believe scoring goals is the best feeling! 
            </li>
            <li className="about-activity">
              <ImPointRight /> Sing Patriotic Songs and Bhajans on a weekly basis
            </li>
            <li className="about-activity">
              <ImPointRight /> Aspire to build transformative web and mobile applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Dream to eradicate Colonial Consciousness amongst people of Bharat and rebuild the sense of being a Bharateeya. Proud of my Bharateeya Civilization heritage - rather than getting intimidated on what the so-called 'West' does
            </li>
            <li className="about-activity">
              <ImPointRight /> A quick learner - Throw any task at me, within a week I can show progress
            </li>
            <li className="about-activity">
              <ImPointRight /> Coming from a Defense family - have the Army mindset 🪖
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's be more informed and less opinionated 😅! "{" "}
          </p>
          <footer className="blockquote-footer">Sughosh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
