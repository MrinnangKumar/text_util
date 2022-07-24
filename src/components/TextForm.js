import React, {useState} from 'react'
 
export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    //SetText("You have clicked on handleUpClick")
    let newText = text.toUpperCase();
    SetText(newText)
    props.showAlert("Converted to uppercase!", "success" )
  }

  const handleLowClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    SetText(newText)
    props.showAlert("Converted to lowercase!", "success" )
  }

  const handleOnChange = (event) =>{                                                    
    // console.log("On Change");
    // The value of the text will be updated to text+new value which we'll give to the box. Now we can type in the box.
     SetText(event.target.value) 
  }

  const handleCopy = ()=>{
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text to clipboard!", "success" )
  }

  const handleExtraSpace = () => {
    // this is saying that if there are more than 1 spaces split that text & array will be splitted. So if there is more than 1 spaces or even 1 space that will 
    // be removed & an array will be formed & after that it will be joined with just 1 space
    let newText = text.split(/ [ ] + /);
    SetText(newText.join (" "))
    props.showAlert("Extra space removed", "success" )
  }





  const[text, SetText] = useState('Enter text here ');

  // text = "new text";  This is the wrong way to change text
  // setText("new Text"); Correct way to change the text.
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#03045E'}}>      
      <h1>{props.heading }  </h1>

      <div class="mb-3">           
      {/* In this text area there's a value which is equal to text & text is that variable that belongs to the state variable which can be updated only by setText.
       So when user want to change the value of setText so at that moment the value of text will be = text+added characters. By applying this we'll be able to type in the 
      text box  */}

      <textarea class="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
       color: props.mode==='dark'?'white':'grey'}} id="MyBox" rows="8"></textarea>
      </div>

      {/* buttons Of App */}
      <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>


      <button className="btn btn-primary mx-2" onClick={handleLowClick}>convert to LowerCase</button> 
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> 
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button> 

    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#03045E'}}>
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length } words and {text.length} characters. </p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p> {text.length>0?text:"Enter your text here to preview it here!"} </p>
    </div>
    </>
    
  )
}



