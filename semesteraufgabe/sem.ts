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
    let n: number = 20;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#adebad";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Hintergrund malen lassen
        drawDecke(500, 800, "#80aaff", "#80aaff", "#cce6ff", "#cce6ff");
        drawTeller(600, 700, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawTeller(1300, 300, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawKorb(950, 500, 50, 180, 270, "#d9b38c", "#d9b38c", "#734d26", "#734d26");
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

                //Game Over
                if (ant.length < 2) {
                    alert(" Game Over");
                };

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


    };
    // Hintergrund mal funktionen
    function drawDecke(_x: number, _y: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string): void {
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

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y);
        crc2.lineTo(_x + 20, _y - 600);
        crc2.lineTo(_x, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 60, _y);
        crc2.lineTo(_x + 80, _y);
        crc2.lineTo(_x + 80, _y - 600);
        crc2.lineTo(_x + 60, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 120, _y);
        crc2.lineTo(_x + 140, _y);
        crc2.lineTo(_x + 140, _y - 600);
        crc2.lineTo(_x + 120, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 180, _y);
        crc2.lineTo(_x + 200, _y);
        crc2.lineTo(_x + 200, _y - 600);
        crc2.lineTo(_x + 180, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 240, _y);
        crc2.lineTo(_x + 260, _y);
        crc2.lineTo(_x + 260, _y - 600);
        crc2.lineTo(_x + 240, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 300, _y);
        crc2.lineTo(_x + 320, _y);
        crc2.lineTo(_x + 320, _y - 600);
        crc2.lineTo(_x + 300, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 360, _y);
        crc2.lineTo(_x + 380, _y);
        crc2.lineTo(_x + 380, _y - 600);
        crc2.lineTo(_x + 360, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 420, _y);
        crc2.lineTo(_x + 440, _y);
        crc2.lineTo(_x + 440, _y - 600);
        crc2.lineTo(_x + 420, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 480, _y);
        crc2.lineTo(_x + 500, _y);
        crc2.lineTo(_x + 500, _y - 600);
        crc2.lineTo(_x + 480, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 540, _y);
        crc2.lineTo(_x + 560, _y);
        crc2.lineTo(_x + 560, _y - 600);
        crc2.lineTo(_x + 540, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 600, _y);
        crc2.lineTo(_x + 620, _y);
        crc2.lineTo(_x + 620, _y - 600);
        crc2.lineTo(_x + 600, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 660, _y);
        crc2.lineTo(_x + 680, _y);
        crc2.lineTo(_x + 680, _y - 600);
        crc2.lineTo(_x + 660, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 720, _y);
        crc2.lineTo(_x + 740, _y);
        crc2.lineTo(_x + 740, _y - 600);
        crc2.lineTo(_x + 720, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 780, _y);
        crc2.lineTo(_x + 800, _y);
        crc2.lineTo(_x + 800, _y - 600);
        crc2.lineTo(_x + 780, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 840, _y);
        crc2.lineTo(_x + 860, _y);
        crc2.lineTo(_x + 860, _y - 600);
        crc2.lineTo(_x + 840, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x + 900, _y);
        crc2.lineTo(_x + 920, _y);
        crc2.lineTo(_x + 920, _y - 600);
        crc2.lineTo(_x + 900, _y - 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 40);
        crc2.lineTo(_x + 920, _y - 40);
        crc2.lineTo(_x + 920, _y - 60);
        crc2.lineTo(_x, _y - 60);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 100);
        crc2.lineTo(_x + 920, _y - 100);
        crc2.lineTo(_x + 920, _y - 120);
        crc2.lineTo(_x, _y - 120);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 160);
        crc2.lineTo(_x + 920, _y - 160);
        crc2.lineTo(_x + 920, _y - 180);
        crc2.lineTo(_x, _y - 180);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 220);
        crc2.lineTo(_x + 920, _y - 220);
        crc2.lineTo(_x + 920, _y - 240);
        crc2.lineTo(_x, _y - 240);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 280);
        crc2.lineTo(_x + 920, _y - 280);
        crc2.lineTo(_x + 920, _y - 300);
        crc2.lineTo(_x, _y - 300);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 340);
        crc2.lineTo(_x + 920, _y - 340);
        crc2.lineTo(_x + 920, _y - 360);
        crc2.lineTo(_x, _y - 360);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 400);
        crc2.lineTo(_x + 920, _y - 400);
        crc2.lineTo(_x + 920, _y - 420);
        crc2.lineTo(_x, _y - 420);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 460);
        crc2.lineTo(_x + 920, _y - 460);
        crc2.lineTo(_x + 920, _y - 480);
        crc2.lineTo(_x, _y - 480);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = _fillColor1;
        crc2.strokeStyle = _strokeColor1;
        crc2.moveTo(_x, _y - 520);
        crc2.lineTo(_x + 920, _y - 520);
        crc2.lineTo(_x + 920, _y - 540);
        crc2.lineTo(_x, _y - 540);
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

        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.strokeStyle = "red";
        crc2.moveTo(_x + 80, _y);
        crc2.arc(_x + 80, _y, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.moveTo(_x - 75, _y);
        crc2.arc(_x - 75, _y, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.strokeStyle = "red";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.strokeStyle = "yellow";
        crc2.moveTo(_x, _y + 75);
        crc2.arc(_x, _y + 75, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.strokeStyle = "orange";
        crc2.moveTo(_x, _y - 75);
        crc2.arc(_x, _y - 75, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.moveTo(_x + 50, _y - 50);
        crc2.arc(_x + 50, _y - 50, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.strokeStyle = "yellow";
        crc2.moveTo(_x - 50, _y - 50);
        crc2.arc(_x - 50, _y - 50, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.strokeStyle = "red";
        crc2.moveTo(_x - 50, _y + 50);
        crc2.arc(_x - 50, _y + 50, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.strokeStyle = "orange";
        crc2.moveTo(_x + 50, _y + 50);
        crc2.arc(_x + 50, _y + 50, 30, 180, 270);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

}
