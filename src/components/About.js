import React /*, { useState }*/ from 'react'

export default function About(props) {
    
    
    /*const [mystyle,setmystyle]=useState({
        color:'black',
        backgroundColor:'white',
        border:'1px solid black',
    });*/
    let mystyle={
      color:props.mode==='dark'?'white':'#0c63a3',
      backgroundColor:props.mode==='dark'?'#0c63a3':'white',
      border:'1px solid',
      borderColor:props.mode==='dark'?'rgb(36, 74 104':'white',
    }
    /*const [btnText,setbtnText]=useState("Enable dark mode");

    const togglebtn=()=>{
        if(mystyle.color ==='black'){
            setmystyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white',
            })
            setbtnText("Enable light mode")
        }
        else{
            setmystyle({
                color:'black',
                backgroundColor:'white',
                border:'1px solid dark',
            })
            setbtnText("Enable dark mode")
        }
    }*/
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#0c63a3'}}>
        <h2>About us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
       <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        Textutils gives you a way to analyze your Text quickly and efficiently.Be it word count, character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.Textutils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
       <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, Blog, Books, Excel document, Pdf document, Essays, etc.
      </div>
    </div>
  </div>
</div>
    {/*<div className="container my-3">
    <button type="button" className="btn btn-primary" onClick={togglebtn}>{btnText}</button>
    </div>*/}

    </div>
  )
}
