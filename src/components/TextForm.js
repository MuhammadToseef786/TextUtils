import React, {useState} from 'react'

export default function TextForm(props) {

    const[text, setText] = useState('');
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleCapitalize = () => {
        let newText = text.toLowerCase().replace(
            /(^|[.!?]\s+|\n\s*)([a-z])/g, 
            (match, p1, p2) => p1 + p2.toUpperCase());
        setText(newText);
        props.showAlert("Text Capitalized!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")

    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Coppied to Clipboard!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


  return (
    <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button> 
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((word) => {return word.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((word) => {return word.length !== 0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
        </div>
    </>
  )
}