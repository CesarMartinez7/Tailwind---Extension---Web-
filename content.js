const btn = document.createElement("button");
const btnPosition = document.createElement("button")

let width = window.innerWidth

// Boton Principal
btn.innerText = tailwindBreakPoint(width);
btn.id = "mi-botoncito";
btn.title = "¡Haz clic!";
btn.onclick = () => {
    alert("¡Hola desde el botoncito!");
};

// Segundo Btn
// btnPosition.textContent = "Cesar mARTINE"
// btnPosition.onclick = () => {
//     window.alert("Pornito")
// }


function tailwindBreakPoint (width) {
    
    if(typeof width === "number" || "string"){
        if( width <= 768 ){
            return ` ${width} SM`
        }
        
        if(width >= 768 && width <= 1024 ){
            return ` ${width} MD`
        }
        
        if(width >= 1024 && width <= 1280 ){
            return `${width} LG`
        }
        
        if(width >= 1280 ){
            return `${width} XL`
        }
        
    }

    return `${width}`
    
}


// btn.appendChild(btnPosition)
document.body.appendChild(btn);

window.onresize = () => {
    console.log("pornito")
    width = window.innerWidth
    btn.textContent = `${tailwindBreakPoint(width)}`
}





