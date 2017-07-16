/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */


namespace Sem {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let ant: Ameise[] = [];
    let image: ImageData;
    let n: number = 2;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#b3ffb3";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Hintergrund malen lassen
        drawDecke(500, 800, "#cc0000", "#cc0000");
        drawTeller(600, 700, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawTeller(1300, 300, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");

        // Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);


        // Ameise erstellen
        for (let i: number = 0; i < n; i++) {
            ant[i] = new Ameise();

        }

        window.setTimeout(animate, 20);

        // Event Listener hinzufügen
        canvas.addEventListener("touch", killAnt);
        canvas.addEventListener("click", killAnt);
    }




    // Bei Klick auf Ameise soll diese gelöscht werden
    function killAnt(event: MouseEvent): void {
        for (let i: number = 0; i < ant.length; i++) {
            let a: Ameise = ant[i];

            // Position des Klick herausfinden
            let clickX: number = event.clientX;
            let clickY: number = event.clientY;
            //console.log(clickX);
            // console.log(clickY);

            // Differenz zwischen Klick Position und Position der Ameise ausrechnen
            let diffX: number = Math.abs(clickX - a.currentPosX);
            let diffY: number = Math.abs(clickY - a.currentPosY);

            console.log(diffX);
            console.log(diffY);

            // Wenn differenz < 20 wird Ameise gelöscht
            if (diffX < 20) {
                ant.splice(i);
            }
        }
    };

    //Neue Ameise malen lassen
    function drawNeueAmeise(): void {
        let a: Ameise = new Ameise();
        ant.push(a);
        n++;
    }




    // Animate Funktion
    function animate(): void {
        // Hintergrundbild abrufen
        crc2.putImageData(image, 0, 0);

        // Korb malen 
        drawKorb(950, 500, 50, 180, 270, "#d9b38c", "#d9b38c", "#734d26", "#734d26");

        // Ameise animieren
        for (let i: number = 0; i < ant.length; i++) {
            let a: Ameise = ant[i];
            a.update();
        }

        window.setTimeout(animate, 20);
    }


    // Hintergrund mal funktionen
    function drawDecke(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 900, _y);
        crc2.lineTo(_x + 900, _y - 600);
        crc2.lineTo(_x, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawTeller(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 60, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 45, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }

    function drawKorb(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 120, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 100, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

    }

}
