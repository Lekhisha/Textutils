import React,{useState} from 'react'
const totitlecase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Word(props){

  
  const handleupclick=()=>{
    
    let newtext =Text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase",'success');
  }
  const handleloclick=()=>{
   
    let newtext1 =Text.toLowerCase();
    setText(newtext1);
    props.showAlert("converted to lowercase",'success');
    
  }
  const handleclearclick=()=>{
     let newtext1=''
     setText(newtext1);
     props.showAlert("Text is cleared",'success');
     
   }
   
   const handletitleclick=(str)=>{
   
    setText(totitlecase(Text));
    props.showAlert("converted to titlecase",'success');
    
    
     
   }
   const handlecopy = () => {
    var textArea = document.getElementById("mybox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value)
      .then(() => {
        console.log("Text copied to clipboard!");
        props.showAlert("Text copied to clipboard",'success');
      })
      .catch(err => {
        console.error("Error copying text: ", err);
      });
    }
    const handleonchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
       
    }
    
   
    const [Text,setText]=useState('');
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>    
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>convert to uppercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloclick}>convert to lowercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>clear text</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handletitleclick}>convert to titlecase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>copy text</button>
       
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} words and {Text.length} characters</p>
      <p>{0.008*Text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes read</p>
      <h3>Preview</h3>
      <p>{Text.length>0?Text:'Enter text to preview it'}</p>
    </div>
    </>
    
  )
}

