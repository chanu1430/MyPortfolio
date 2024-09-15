const sentences=["UI/UX Designer","MERN Stack Developer","Software Tester"];
const ele=document.getElementById("profession");
let sentenceIndex=0;
let letterIndex=0;
function designation(){
  let sentence=sentences[sentenceIndex];
  if(letterIndex<sentence.length){
      ele.innerHTML+=sentence[letterIndex];
      letterIndex++;
      setTimeout(designation,100);
  }
  else{
      setTimeout(changeDesignation,1000);
  }
  
  function changeDesignation(){
    let currentSentence=sentences[sentenceIndex];
    
     if(letterIndex>0){
         ele.innerHTML=currentSentence.substring(0,letterIndex-1);
         letterIndex--;
         setTimeout(changeDesignation,100);
     }
    else{
       sentenceIndex = (sentenceIndex + 1) % sentences.length;
        console.log(sentenceIndex);
        setTimeout(designation, 500);
    }

        // Move to the next sentence or start over if at the end
       
  }
}

designation();
