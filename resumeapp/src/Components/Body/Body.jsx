import React, { useRef, useState } from "react";
import Resume from "../Resume/Resume";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Printer,Download } from "react-feather";
import Editor from "../Editor/Editor";
import styles from "./Body.module.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Navbar from '../Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Body() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const color =['#850000','#790252','#2B3467','#285430','#227C70']
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(color[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  return (
    <div className={styles.main}>
        <Navbar></Navbar>
        <Container className={styles.container}>
            <Row className={styles.row}>
                <Col sm={6} className={styles.editor_left}>
                    <div className={styles.toolbar}>
                        <div className={styles.palette}>
                        {color.map((item) => (
                            <span
                              key={item}
                              style={{ backgroundColor: item }}
                              className={`${styles.color} ${
                                activeColor === item ? styles.active : ""
                              }`}
                              onClick={() => setActiveColor(item)}
                            />
                          ))}
                        </div>
                        <span style={{color: darkMode? 'black': ''}} className={styles.empty}>```````````</span>
                        <div href='#' className={styles.button_print}>Print<Printer/></div>
                        <div href='#' className={styles.button_download}>Download<Download/></div>
                    </div>
                    <div className={styles.editor}>
                    <Editor 
                    sections={sections}
                    information={resumeInformation}
                    setInformation={setResumeInformation}/>
                    </div>
                </Col>
                <Col sm={6} className={styles.resume_right}>
                <Resume
                  ref={resumeRef}
                  sections={sections}
                  information={resumeInformation}
                  activeColor={activeColor}
                />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Body
