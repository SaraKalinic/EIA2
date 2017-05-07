/*Aufgabe: (Nummer 7b)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (07.05.17)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 

In Zusammenarbeit mit Nadia Credidio*/

namespace StudiVZ {
    interface StudentData {
        matrikel: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für weiblich oder 1 für männlich) und Kommentar");
                alert(saveData(input)); 
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer")); 
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let strArr: string[] = _input.split(","); 
        let student: StudentData = {                      
            matrikel: parseInt(strArr[0]),        
            name: strArr[1],
            firstname: strArr[2],
            age: parseInt(strArr[3]),
            sex: parseInt(strArr[4]) == 1,
            comment: strArr[5]
        };

        students.push(student);  

        let sex: string;
        if (parseInt(strArr[4]) == 1) {   
            sex = "m";
        }
        else {                      
            sex = "w";
        }
        
        return "Deine Daten: \n" + "\n Matrikelnummer: " + student.matrikel + "\n Name: " + student.name + "\n Vorname: " + student.firstname + "\n Alter: " + student.age + "\n Geschlecht: " + sex + "\n Kommentar: " + student.comment + "\n Vielen Dank" ;
    }

    function queryData(_matrikel: number): string {

        for (let i: number = 0; i < students.length; i++) {  

            if (students[i].matrikel == _matrikel) {        
                let sex: string = students[i].sex ? "m" : "w"; 
                return "Deine Daten zur Matrikelnummer: " + students[i].matrikel + "\n Name: " + students[i].name + "\n Vorname: " + students[i].firstname + "\n Alter: " + students[i].age + "\n Geschlecht: " + sex + "\n Kommentar: " + students[i].comment;
            }

            else {                
                return "Diese Matrikelnummer konnte nicht gefunden werden. ";
            }
        }
    }
}