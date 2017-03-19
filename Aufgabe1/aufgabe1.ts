
document.addEventListener('DOMContentLoaded', function() {
    
    var name : string;
    
    name = prompt("Geben Sie bitte Ihren Namen ein"); 
    document.getElementById("begrüssung").innerHTML += name; 
});