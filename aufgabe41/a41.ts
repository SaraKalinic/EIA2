let sum = 0;
document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    let line = 0;
    for (let n = 0; n < 64; n++) {
        let element = document.createElement("div");
        if (((n + line) % 2) == 0) {
            element.className = "board black";
        }
        else {
            element.className = "board white";
        }
        if (((n + 1) % 8) == 0) {
            line++;
        }
        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
        
        
       if ( n < 8 ) {  
    element.addEventListener("click", mark);
    
}
       
  }       
        
function mark(event: MouseEvent) {
   let target: HTMLDivElement = <HTMLDivElement>event.target;
    if (target.className.includes("marked")) {
        if (target.className.includes("black")) {
            target.className = "board black";
        }
        else {
            target.className = "board white";
        }
    }
    else {
        target.className += " marked";
    }
    sum = 0;
    let marked: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>document.getElementsByClassName("marked");

    for (let i = 0; i < marked.length; i++) {
        sum += parseInt(marked[i].innerText);
    }
    
    console.log(" Summe Reiskörner: " + "\r\n" + "Dezimal: " + sum.toString() + "\r\n" + "Hexadezimal: " + sum.toString(16));
}
    
   let mouseBox: HTMLDivElement = document.createElement("div");   
     document.body.appendChild(mouseBox);
    mouseBox.className = "mouseBox";
    
    mouseBox.addEventListener("mousemove", function (event: MouseEvent) {
        mouseBox.style.left = (Event.clientX + 10) + "px";
        mouseBox.style.top = (Event.clientY + 10) + "px";
    });

    
    
   

 });
//# sourceMappingURL=a41.js.map