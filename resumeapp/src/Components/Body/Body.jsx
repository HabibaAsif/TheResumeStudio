import React, { useRef, useState } from "react";
import { Printer,Download } from "react-feather";
import Editor from "../Editor/Editor";
import "./Body.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

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
    <div className='main'>
        <h1>Global Navbar Position</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 editor-left'>
                    <div className='toolbar'>
                        <div className='palette'>
                            {color.map(item=>
                            <span 
                            key={item}
                            style={{backgroundColor:item}}
                            className='color'
                            />
                            )}
                        </div>
                        <span style={{color: darkMode? 'var(--orange)': ''}} className="empty">``````````````</span>
                        <div href='#' className='button-print'>Print<Printer/></div>
                        <div href='#' className='button-download'>Download<Download/></div>
                    </div>
                    <div className='editor'>
                    <Editor 
                    sections={sections}
                    information={resumeInformation}
                    setInformation={setResumeInformation}/>
                    </div>
                </div>
                <div className='col-md-6 resume-right'>
                    This will be replaced by resume
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
