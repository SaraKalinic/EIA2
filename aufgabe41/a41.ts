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
        
        
       if ( n < 8) {  
            element.addEventListener("click", mark);
             }
        }

   let mouseBox: HTMLDivElement = document.createElement("div");   
     document.body.appendChild(mouseBox); 
     mouseBox.className = "mouseBox"; // 
     document.addEventListener("mousemove", boxbewegen); 
        
   
        function boxbewegen (Event : MouseEvent) { 
            mouseBox.style.left = (Event.clientX + 30) + "px";
            mouseBox.style.top = (Event.clientY + 30) + "px";
            }   
    

        function mark(event: MouseEvent) {
            let target: HTMLDivElement = <HTMLDivElement>event.target;

            if ( target.className.includes("marked")) {
    
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

       for (let i: number = 0; i < marked.length; i++) {
             sum += parseInt(marked[i].innerText);
             mouseBox.innerText = "Dez:" + sum.toString() + "\r\n" + "hexDez:" + sum.toString(16);
             } 
 
       if (marked.length == 0) {   
             mouseBox.style.display = "none"; 
             }
    
       else {
            mouseBox.style.display = "inline-block"; 
             }   
        

 
        console.log(sum + "\r\n" + sum.toString(16) );

     
}










}); 