import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState('');    //this is defalut value
//   setText("Entered Text");                               //specified value ->correct way to change state
//   text = "Entered Text";                                  Wrong Way 

// const [history, setHistory] = useState([]);

const handleonChange = (event)=>{
    console.log("On Changed");
    setText(event.target.value); 
}


const BtnUpClick = () => {
    console.log("Clicked");
    setText(text.toUpperCase())
    if(text.length!==0 ?props.alertMsg('Converted to Upper case' , 'success'):props.alertMsg('Enter Some Text' , 'danger'));
}

const BtnLoClick = () => {
  console.log("Clicked");
  setText(text.toLowerCase())
  if(text.length!==0 ?props.alertMsg('Converted to Lower case' , 'success'):props.alertMsg('Enter Some Text' , 'danger'));
}

const handleCopy = () => {
  var text = document.getElementById("myBox");
  if(text.length!=='0' ?alert("Copied to clipboard"):alert("Please Enter text first"));
  navigator.clipboard.writeText(text.value);
}

const RemExSpc = () => {
  // if(text.length!=='0' ?props.alertMsg('Extra spaces removed' , 'success'):props.alertMsg('Enter Text' , 'danger'));
  var newtext = text.replace(/\s+/g,' ');
  setText(newtext);
}

const ClearText = ()=>{
  var newText = text.replace(text,' ');
  setText(newText);
}

  return (
    <>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <div>
          <h1>{props.heading}</h1>

          <div className="mb-3">
            <textarea
              value={text}
              className="form-control"
              onChange={handleonChange}
              style={{backgroundColor:props.mode==='dark'?'#c3c1c1':'white' , color:props.mode==='dark'?'white':'black'}}
              id="myBox"
              rows="3"
            ></textarea>
          </div>
          <button className="btn-btn-primary mx-1 my-1" onClick={BtnUpClick}>
            Convert to upperCase
          </button>
          <button className="btn-btn-primary mx-1 my-1" onClick={BtnLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn-btn-primary mx-1 my-1" onClick={handleCopy}>
           Copy Text
          </button>
          <button className="btn-btn-primary mx-1 my-1" onClick={ClearText}>
           Clear Text
          </button>
          <button className="btn-btn-primary mx-1 my-1" onClick={RemExSpc}>
           Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" "&&"\n").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 *60* text.split(" ").filter((element)=>{return element.length!==0}).length} Seconds to read the above text</p>
        <p>
          <ol className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              TextPreview
            </a>
            <ul className="dropdown-menu" style={{backgroundColor:props.mode==='dark'?'gray':'white' ,color:props.mode==='dark'?'white':'gray' , margin:1}}>
              {text}
            </ul>
          </ol>
        </p>
      </div>
    </>
  );
}


// use bootstrap to change color :- bootstrap->components->buttons