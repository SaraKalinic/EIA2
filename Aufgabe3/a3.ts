document.addEventListener('DOMContentLoaded', function () {

    let rice = 1; 
    let line = 0; 
    
for ( let n: number =0; n<64; n++){
    let element: HTMLElement= document.createElement("div");
    
    if (((n + line) % 2) == 0) {
        element.className= "board black";}
    
    else {
        element.className= "board white";} 
    
    
    if (((n + 1) % 8) == 0) {
            line++;
        }
    
    element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
        }
   });



