import React from 'react';
import {useState, useRef,useEffect} from 'react';
import { PlusCircle ,Upload} from "react-feather";
import "../Profile/Style.css";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';*/
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import "./popup.css"
//import db from "../firebase";
export default function Popup() {

    const [file , setFile] = useState([])
    const [resumelist , setresumelist] = useState([])
    const [resume , setresume] = useState('')
  
    // handle file upload
    const fileInputField = useRef(null);
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  

   /*const getdocbyq=async(id)=>{
    const collref=collection(firestore,'resumes')
    const q=query(collref,where ("user_id","==",id))
    const docrefs=await getDocs(q);
    //console.log(docrefs)
  const res=[]
  docrefs.forEach(resume=>{
    res.push({
      id:resume.id,...resume.data()
  })
  })
  setFile(res)
  
  }
  getdocbyq("04")*/
  

  
    const [image , setImage] = useState('');
   const upload = ()=>{
   }
    /* if(image == null){
      return};
      const storageRef = ref(storage,'/image/{image.name}');
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on("state_changed" , alert("File uploaded successfully") , alert ,()=>
      {
        // Getting Download Link
        getDownloadURL(storageRef)
        .then((url) => {
          console.log(url)
          const ref=collection(firestore,"resumes");
          let data={user_id:'04',resumefile:url};
              try{
                //ref.doc('id').set(data);
                  addDoc(ref,data,'r2');
                  //const id='04'
  
              }
              catch(e){
                  console.log(e);
              }
          // Insert url into an <img> tag to "download"
        })
        });
    }*/

  return (
    <>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
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
            <link rel="stylesheet" href="Style.css"></link>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>      
          <p>Upload your resume for later reference.</p>
          <div className="popupcontainer">
      <div className='fileName'>
       <a>{image.name}</a>
      </div>
      <div className="file-inputs">
 
      <input id ="file-upload" type="file" ref={fileInputField} onChange={(e)=>{setImage(e.target.files[0])}}/>
      <div className="file-search-button mt-2">

         <label htmlFor='file' className='custom-file-upload ' onClick={() => fileInputField.current.click()}>
              
               <h6 className="mb-3 ml-2"> <PlusCircle/>Upload a File</h6>
          </label>
      </div>
      </div>
      </div></Modal.Body>
        <Modal.Footer>
          <Button  class="btn" onClick={handleClose}>
            Close
          </Button>
          <Button  class="btn" onClick={upload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      
      </>
  )
}
  
