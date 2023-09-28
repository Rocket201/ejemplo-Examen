document.addEventListener("DOMContentLoaded",()=>{

    const calculatebutton= document.getElementById("calculate");
    const resultContainer= document.getAnimations("result");

    calculatebutton.addEventListener("click",()=>{

        const length= document.getElementById("length");
        const width= document.getElementById("width");

        if (!isNaN (length) && !isNaN (width)){

            const area= length*width;
            //template literal 
            resultContainer.innerHTML = `El area del rectángulo es: ${area}`;
        }else{
            resultContainer.innerHTML= 😊😊😊🤣❤😍😒🤦‍♀️😎🌹
        }

    });
});


