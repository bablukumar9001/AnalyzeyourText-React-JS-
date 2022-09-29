import React from "react";
import { useState } from "react";

export default function Textform(props){

 const handleUpClick=()=>{
   
   
    //  console.log("button was clicked" + text)
    //  setText("you have clicked on handleupclick")

     let newText= text.toUpperCase()
     setText(newText)
     props.showAlert(" Converted to UpperCase  ","primary")
 }
 const handleLwClick=()=>{
 
     let newText= text.toLowerCase()
     setText(newText)
     props.showAlert(" Converted to LowerCase  ","primary")


 }
 const handleClearClick=()=>{
 
     let newText= ""
     setText(newText)
     props.showAlert(" Text Cleared  ","primary")


 }
 const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Your text has been Copied  ","primary")
    document.getSelection().removeAllRanges();


}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra space removed ","primary")
}


const RemovePuncts = () => {
     console.log(text)
    let newText =  text.replace(punctuation,"");
    console.log(newText)
    setText(newText)
    props.showAlert(" Punctuations removed ","primary")
}

const RemoveNewLine = () => {
     console.log(text)
    let newText =  text.replace(/[\r\n]/gm, ' ');
    console.log(newText)
    setText(newText)
    props.showAlert(" Line Breaks Removed  ","primary")
}

var punctuation = /[!-/:-@[-`{-~¡-©«-¬®-±´¶-¸»¿×÷˂-˅˒-˟˥-˫˭˯-˿͵;΄-΅·϶҂՚-՟։-֊־׀׃׆׳-״؆-؏؛؞-؟٪-٭۔۩۽-۾܀-܍߶-߹।-॥॰৲-৳৺૱୰௳-௺౿ೱ-ೲ൹෴฿๏๚-๛༁-༗༚-༟༴༶༸༺-༽྅྾-࿅࿇-࿌࿎-࿔၊-၏႞-႟჻፠-፨᎐-᎙᙭-᙮᚛-᚜᛫-᛭᜵-᜶។-៖៘-៛᠀-᠊᥀᥄-᥅᧞-᧿᨞-᨟᭚-᭪᭴-᭼᰻-᰿᱾-᱿᾽᾿-῁῍-῏῝-῟῭-`´-῾\u2000-\u206e⁺-⁾₊-₎₠-₵℀-℁℃-℆℈-℉℔№-℘℞-℣℥℧℩℮℺-℻⅀-⅄⅊-⅍⅏←-⏧␀-␦⑀-⑊⒜-ⓩ─-⚝⚠-⚼⛀-⛃✁-✄✆-✉✌-✧✩-❋❍❏-❒❖❘-❞❡-❵➔➘-➯➱-➾⟀-⟊⟌⟐-⭌⭐-⭔⳥-⳪⳹-⳼⳾-⳿⸀-\u2e7e⺀-⺙⺛-⻳⼀-⿕⿰-⿻\u3000-〿゛-゜゠・㆐-㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉃㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꘍-꘏꙳꙾꜀-꜖꜠-꜡꞉-꞊꠨-꠫꡴-꡷꣎-꣏꤮-꤯꥟꩜-꩟﬩﴾-﴿﷼-﷽︐-︙︰-﹒﹔-﹦﹨-﹫！-／：-＠［-｀｛-･￠-￦￨-￮￼-�]|\ud800[\udd00-\udd02\udd37-\udd3f\udd79-\udd89\udd90-\udd9b\uddd0-\uddfc\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc00-\udc7e]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83-\udd84\udd8c-\udda9\uddae-\udddd\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83c[\udc00-\udc2b\udc30-\udc93]/g;


 const handleOnChange=(event)=>{

    //  console.log("on change ")

     setText(event.target.value )
 }




const   [text, setText] =useState(" ")

 return (
    <>
        
     <div   className="container" style={{color:props.mode==="dark"?"white":"black"}}>
<h1  > {props.heading}</h1>
<div className="mb-2"  >
  <label htmlFor="exampleFormControlTextarea1" className="form-label mb-2"    ></label>
  <textarea className="form-control"    value={text} id="myBox" rows="7" onChange={handleOnChange}  style={{color:props.mode==="dark" ? "white":"black",background:props.mode==="dark"?"#4a4f5c":"white"
}} ></textarea>
</div>
 <button disabled={text.length===0}  className="btn btn-primary mx-1  my-1" onClick={handleUpClick} >UpperCase</button>

 <button disabled={text.length===0}  className="btn btn-primary mx-1  my-1" onClick={handleLwClick} >LowerCase</button>


 <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

 <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
 <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={RemovePuncts}>Remove Punctuations</button>
 <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={RemoveNewLine}>Remove Line Breaks</button>
 <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleClearClick} >Clear</button>



 </div> 

 <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>

     <h1>Your text summary </h1> 
     <p>{ <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> } words and { <b>{text.length}</b>} characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
     <h3>Preview</h3>
     <p>{text.length>0 ? text : " Enter something in the textbox above to preview it here "}</p>
 </div>

 </>



     )
}