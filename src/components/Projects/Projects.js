import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/video-activity.png";
import kite from "../../Assets/Projects/kite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Mukha Vignyapaka (Face Recognition and Identification)"
              description="Mukha Vignyapaka is a web application that performs real-time webcam & video face tracking as well as detect and identify faces from images with the help of pre-trained models from face-api.js."
              ghLink="https://github.com/SughoshDixit/azure-vignyapaka"
              demoLink="https://sughoshdixit.github.io/Face-Detect/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Video Activity Recognition using CNN and LSTM"
              description="A project to recognize accurately activity inside a video, from Feature Engineering to model building finally accurately building the trained model."
              ghLink="https://github.com/SughoshDixit/Video-Activity-Recognition-using-CNN---LSTM"
           //   demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sign Language Classifier Using CNN"
              description="Sign Language prediction using CNN"
              ghLink="https://github.com/SughoshDixit/Sign-Language-Classifier"
             // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Covid-19 News Articles 2020-2022 Analysis"
              description="In this dataset, we are provided with a dataset of COVID news articles collected from various sources from 2020 to 2022. The dataset includes articles related to COVID-19's impact on health, society, politics, economy, and technology. The goal of this analysis is to create a knowledge graph that captures the relationships and entities mentioned in these articles. Specifically, we want to extract the following information from the dataset: Identify the named entities mentioned in the articles (such as countries, organizations, people, and diseases)."
              ghLink="https://github.com/SughoshDixit/Covid-19-News-Articles-2020-2022-Analysis"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel-Waiter-Tip-Prediction-Using-Locally-Weighted-Regression"
              description="Predict the tip amount takimg multiple data points"
              ghLink="https://github.com/SughoshDixit/Hotel-Waiter-Tip-Prediction-Using-Locally-Weighted-Regression"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="S&P BSE Sensex Index Price Prediction"
              description="Regression Analysis for the prediction of Bombay Stock Exchange Sensex Abstract The stock price, as represented by the movement of the sensitive index is a complex phenomenon. It is affected by macroeconomic factors, market sentiments, company news, political news and even natural calamities. On top of it, the Sensex also shows random variations, which at times, may be significant. In India, Bombay Stock Exchange (BSE) and Nifty are the two primary Stock Exchanges for share trading. I have developed a Regression model or any other suitable model for the BSE Sensex index which could be used to predict the index value in near terms."
              ghLink="https://github.com/SughoshDixit/S-P-BSE-Sensex-Index-Price-Prediction"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kite}
              isBlog={false}
              title="Automated Algorithmic Day Trading using KiteConnect by Zerodha"
              description="One of the most comprehensive projects on Algorithmic Trading, to optimize and gain , maximum profits. Zerodha has provided a great API in the form of #KiteConnect to enable techno traders to do Day Trading and maximize their profits while automating the exercise of trading using ML algorithms aptly. Recommend this course and project to everyone who wish to do a project in #ml as well as use it in their day-to-day life. (Note: The API is not open source - the key costs ₹2000 and to get historical stock data with the Historical API it costs another ₹2000, but worth the expense 😅 )"
              ghLink="https://udemy-certificate.s3.amazonaws.com/image/UC-f2b9ecbf-32d6-47fa-86c9-8f79743a5ce6.jpg?v=1680319161000"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
