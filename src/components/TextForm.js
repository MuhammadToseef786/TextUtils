import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")

    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
    }

    const handleCopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const[text, setText] = useState('');

  return (
    <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button> 
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((word) => word !== "").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((word) => word !== "").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in the textarea to preview'}</p>
        </div>
    </>
  )
}