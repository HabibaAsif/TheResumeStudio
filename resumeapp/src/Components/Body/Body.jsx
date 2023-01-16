import  { React,useRef, useState,useContext,useEffect } from "react";
import Resume from "../Resume/Resume";
import Navbar from '../Navbar/Navbar';
import Editor from "../Editor/Editor";
import styles from "./Body.module.css";
import "../Resumeupload/popup.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Printer,Download,PlusCircle ,Upload } from "react-feather";
import { themeContext } from "../../Context";
import Swal from 'sweetalert2';
<><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
crossorigin="anonymous"></script>
<link rel="stylesheet" href="popup.css"/>
    </>
//import "../Profile/Style.css";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';*/

function Body() {
  /////////////////////////////
  const [file , setFile] = useState([])
  const [resumelist , setresumelist] = useState([])
  const [resume , setresume] = useState('')
  // handle file upload
  const fileInputField = useRef(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [image , setImage] = useState('');
   const upload = ()=>{
    Swal.fire('Saved!', '', 'success')

   }
  //////////////////////
  const theme = useContext(themeContext);
  const Alert = async () =>{
    Swal.fire({
      icon:'question',
      title: 'Do you also want to save your work ?',
      showDenyButton: true,
      showCloseButton: true,
      confirmButtonText: 'Download Only',
      denyButtonText: `Yes`,
      denyButtonColor: "#2f8efb",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Download Complete!', '', 'success')
        pdfGenerate.call()
      } else if (result.isDenied) {
        Swal.fire({
        title: 'Upload your resume!',
        icon:'info',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'Download and Upload',
        cancelButtonText:'Cancel',
        cancelButtonColor: "#2f8efb",}).then((result)=>{
          if (result.isConfirmed) {
            /*pdfGenerate.call()*/
            handleShow.call()
          }
        })
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
        <Modal show={show}>
        <Modal.Body>
        <div className="popupcontainer">
          <div className="fileName">
            <a>{image.name}</a>
          </div>
        <div className="file-inputs">
          <input id ="file-upload" type="file" ref={fileInputField} onChange={(e)=>{setImage(e.target.files[0])}}/>
          <div className="file-search-button mt-2">
              <label htmlFor="file" className="custom-file-upload"  onClick={() => fileInputField.current.click()}>
                <h6 className="mb-2 ml-2"> <Upload/>Upload a File</h6>
              </label>
            </div>
          </div>
        </div></Modal.Body>
        </Modal>
    </div>
  )
}

export default Body
