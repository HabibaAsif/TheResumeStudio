import  { React,useRef, useState,useContext } from "react";
import Resume from "../Resume/Resume";
import Navbar from '../Navbar/Navbar';
import Editor from "../Editor/Editor";
import styles from "./Body.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Printer,Download } from "react-feather";
import { themeContext } from "../../Context";
import Swal from 'sweetalert2';

function Body() {
  
  const theme = useContext(themeContext);
  const Alert = async () =>{
    Swal.fire({
      icon:'question',
      title: 'Do you also want to save your work ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Download Only',
      denyButtonText: `Yes`,
      denyButtonColor: "#2f8efb",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Download Complete!', '', 'success')
        pdfGenerate.call()
      } else if (result.isDenied) {
        Swal.fire('Saved!', '', 'success')

      }
    })
  }
  const pdfGenerate = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');
    const pdf = new jsPDF("portrait","pt","a4",true);
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
    (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Resume.pdf');};
  const color =['#A91079','#0081C9','#379237','#D36B00','#FF5B00','#D2001A']
  const sections = {
    basicInfo: "Basics",
    workExp: "Experience",
    project: "Project",
    education: "Education",
    achievement: "Achievement",
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
        <Navbar/>
        <Container className={styles.container1}>
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
                          <ReactToPrint
                              trigger={() => {
                                
                                return (
                                  <div  className={styles.button_print}>
                                    Print
                                    <Printer/>
                                    </div>
                                );
                              }}
                              content={() => resumeRef.current}
                          />
                        <div  
                        className={styles.button_download}
                        onClick={Alert} type='button'>Download<Download/></div>
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
