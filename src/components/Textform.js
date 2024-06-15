import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("converted to UpperCase", "success")
    }
    const handleOnClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("converted to LowerCase", "success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleClick=(e)=>{
        const inputText = e.target.value;
        const transformedText = inputText.split('').map(char => {
            if (char === char.toUpperCase()) {
                return char.toLowerCase();
            } else {
                return char.toUpperCase();
            }
        }).join('');
        setText(transformedText);
        props.showAlert("Inversed", "success")
    }

    const [text, setText]=useState('Enter the text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upppercase</button>  
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClick}>Convert to Lowercase</button>  
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" value={text} onClick={handleClick}>Convert to InverseCase</button>  
   </div>
   <div className="container mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summery</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Show Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
   </div>
   </>
  )
}
