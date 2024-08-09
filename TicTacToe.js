//Matriz de datos 
let gridT =[1,2,3,
            4,5,6,
            7,8,9];
//Variable de turno
let turno=true;
//Variables de los puntajes, guardado y tomado de datos desde el Local
let victoriasCont=0;
let derrotasCont=0;
let puntuacion= JSON.parse(localStorage.getItem("puntaje"))||[0,0];
let currentPuntaje=[puntuacion[0],puntuacion[1]]

//Trae los contenedores del HTML
let puntosV=document.getElementById("puntosV");
let puntosD=document.getElementById("puntosD");
puntosV.innerHTML=puntuacion[0];
puntosD.innerHTML=puntuacion[1];
let turnoID=document.getElementById("turnoID");
if (turno) {
    turnoID.innerHTML="Turno del jugador"; 
}

//Trae los elementos del HTML
let cell1=document.getElementById("row1_col1");
let cell2=document.getElementById("row1_col2");
let cell3=document.getElementById("row1_col3");
let cell4=document.getElementById("row2_col1");
let cell5=document.getElementById("row2_col2");
let cell6=document.getElementById("row2_col3");
let cell7=document.getElementById("row3_col1");
let cell8=document.getElementById("row3_col2");
let cell9=document.getElementById("row3_col3");

let arrayCells=[cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9];

//Marca las casillas a la hora de jugar y cambia el valor en la matriz madre
cell1.addEventListener("click", function() {
    if (gridT[0]!="X" & gridT[0]!="O") {
        if (turno) {
            gridT[0]="X";
            cell1.style.backgroundImage="url(Img/X.png)";
            cell1.style.backgroundSize="cover";
            turno=false;
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion)); 
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})
cell2.addEventListener("click", function() {
    if (gridT[1]!="X" & gridT[1]!="O") {
        if (turno) {
            gridT[1]="X";
            cell2.style.backgroundImage="url(Img/X.png)";
            cell2.style.backgroundSize="cover";
            turno=false; 
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));   
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})
cell3.addEventListener("click", function() {
    if (gridT[2]!="X" & gridT[2]!="O") {
        if (turno) {
            gridT[2]="X";
            cell3.style.backgroundImage="url(Img/X.png)";
            cell3.style.backgroundSize="cover";
            turno=false; 
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));   
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})
cell4.addEventListener("click", function() {
    if (gridT[3]!="X" & gridT[3]!="O") {
        if (turno) {
            gridT[3]="X";
            cell4.style.backgroundImage="url(Img/X.png)";
            cell4.style.backgroundSize="cover";
            turno=false; 
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));  
            turnoID.innerHTML="Fin del juego" 
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})
cell5.addEventListener("click", function() {
    if (gridT[4]!="X" & gridT[4]!="O") {
        if (turno) {
            gridT[4]="X";
            cell5.style.backgroundImage="url(Img/X.png)";
            cell5.style.backgroundSize="cover";
            turno=false; 
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));   
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})
cell6.addEventListener("click", function() {
    if (gridT[5]!="X" & gridT[5]!="O") {
        if (turno) {
            gridT[5]="X";
            cell6.style.backgroundImage="url(Img/X.png)";
            cell6.style.backgroundSize="cover";
            turno=false; 
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));   
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    }  
    setTimeout(randomPlay,1000);
})
cell7.addEventListener("click", function() {
    if (gridT[6]!="X" & gridT[6]!="O") {
        if (turno) {
            gridT[6]="X";
            cell7.style.backgroundImage="url(Img/X.png)";
            cell7.style.backgroundSize="cover";
            turno=false; 
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));   
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})
cell8.addEventListener("click", function() {
    if (gridT[7]!="X" & gridT[7]!="O") {
        if (turno) {
            gridT[7]="X";
            cell8.style.backgroundImage="url(Img/X.png)";
            cell8.style.backgroundSize="cover";
            turno=false; 
            turnoID.innerHTML="Turno de la Computadora"
        }
        else return

    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));   
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})
cell9.addEventListener("click", function() {
    if (gridT[8]!="X" & gridT[8]!="O") {
        if (turno) {
            gridT[8]="X";
            cell9.style.backgroundImage="url(Img/X.png)";
            cell9.style.backgroundSize="cover";
            turno=false;
            turnoID.innerHTML="Turno de la Computadora"  
        }
        else return
    }
    else return
    if (winVer1()) {
        if (currentPuntaje[0]==puntuacion[0] & currentPuntaje[1]==puntuacion[1]) {
            puntuacion[0]++;
            puntosV.innerHTML=puntuacion[0];
            localStorage.setItem("puntaje", JSON.stringify(puntuacion));   
            turnoID.innerHTML="Fin del juego"
        }
        return
    }
    if (winVer2()) {
        return
    }
    if (draw()) {
        return
    } 
    setTimeout(randomPlay,1000);
})


//Funciones que buscan un ganador

function winVer1() {
    let positionR1=gridT[0];
    let positionR2=gridT[1];
    let positionR3=gridT[2];
    let positionR4=gridT[3];
    let positionR5=gridT[4];
    let positionR6=gridT[5];
    let positionR7=gridT[6];
    let positionR8=gridT[7];
    let positionR9=gridT[8];

    if (positionR1=="X" & positionR2=="X" & positionR3=="X") {
        cell1.style.backgroundColor="rgb(63, 148, 174)";
        cell2.style.backgroundColor="rgb(63, 148, 174)";
        cell3.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    if (positionR4=="X" & positionR5=="X" & positionR6=="X") {
        cell4.style.backgroundColor="rgb(63, 148, 174)";
        cell5.style.backgroundColor="rgb(63, 148, 174)";
        cell6.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    if (positionR7=="X" & positionR8=="X" & positionR9=="X") {
        cell7.style.backgroundColor="rgb(63, 148, 174)";
        cell8.style.backgroundColor="rgb(63, 148, 174)";
        cell9.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    if (positionR1=="X" & positionR4=="X" & positionR7=="X") {
        cell1.style.backgroundColor="rgb(63, 148, 174)";
        cell4.style.backgroundColor="rgb(63, 148, 174)";
        cell7.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    if (positionR2=="X" & positionR5=="X" & positionR8=="X") {
        cell2.style.backgroundColor="rgb(63, 148, 174)";
        cell5.style.backgroundColor="rgb(63, 148, 174)";
        cell8.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    if (positionR3=="X" & positionR6=="X" & positionR9=="X") {
        cell3.style.backgroundColor="rgb(63, 148, 174)";
        cell6.style.backgroundColor="rgb(63, 148, 174)";
        cell9.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    if (positionR1=="X" & positionR5=="X" & positionR9=="X") {
        cell1.style.backgroundColor="rgb(63, 148, 174)";
        cell5.style.backgroundColor="rgb(63, 148, 174)";
        cell9.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    if (positionR3=="X" & positionR5=="X" & positionR7=="X") {
        cell3.style.backgroundColor="rgb(63, 148, 174)";
        cell5.style.backgroundColor="rgb(63, 148, 174)";
        cell7.style.backgroundColor="rgb(63, 148, 174)";
        return true;
    }
    
}

function winVer2() {
    let positionR1=gridT[0];
    let positionR2=gridT[1];
    let positionR3=gridT[2];
    let positionR4=gridT[3];
    let positionR5=gridT[4];
    let positionR6=gridT[5];
    let positionR7=gridT[6];
    let positionR8=gridT[7];
    let positionR9=gridT[8];

    if (positionR1=="O" & positionR2=="O" & positionR3=="O") {
        cell1.style.backgroundColor="rgb(245, 136, 136)";
        cell2.style.backgroundColor="rgb(245, 136, 136)";
        cell3.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
    if (positionR4=="O" & positionR5=="O" & positionR6=="O") {
        cell4.style.backgroundColor="rgb(245, 136, 136)";
        cell5.style.backgroundColor="rgb(245, 136, 136)";
        cell6.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
    if (positionR7=="O" & positionR8=="O" & positionR9=="O") {
        cell7.style.backgroundColor="rgb(245, 136, 136)";
        cell8.style.backgroundColor="rgb(245, 136, 136)";
        cell9.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
    if (positionR1=="O" & positionR4=="O" & positionR7=="O") {
        cell1.style.backgroundColor="rgb(245, 136, 136)";
        cell4.style.backgroundColor="rgb(245, 136, 136)";
        cell7.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
    if (positionR2=="O" & positionR5=="O" & positionR8=="O") {
        cell2.style.backgroundColor="rgb(245, 136, 136)";
        cell5.style.backgroundColor="rgb(245, 136, 136)";
        cell8.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
    if (positionR3=="O" & positionR6=="O" & positionR9=="O") {
        cell3.style.backgroundColor="rgb(245, 136, 136)";
        cell6.style.backgroundColor="rgb(245, 136, 136)";
        cell9.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
    if (positionR1=="O" & positionR5=="O" & positionR9=="O") {
        cell1.style.backgroundColor="rgb(245, 136, 136)";
        cell5.style.backgroundColor="rgb(245, 136, 136)";
        cell9.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
    if (positionR3=="O" & positionR5=="O" & positionR7=="O") {
        cell3.style.backgroundColor="rgb(245, 136, 136)";
        cell5.style.backgroundColor="rgb(245, 136, 136)";
        cell7.style.backgroundColor="rgb(245, 136, 136)";
        return true;
    }
}

function draw() {
    for (let i = 0; i < gridT.length; i++) {
        if (gridT[i]!="X" & gridT[i]!="O") {
            return
        }
    }
    for (let a = 0; a < arrayCells.length; a++) {
        arrayCells[a].style.backgroundColor="rgb(233, 243, 84)";
    }
    turnoID.innerHTML="Empate";
    return true
}

//Retorna el array en la condicion actual
function currentGrid() {
    let currentBoard=[];
    for (let i = 0; i < gridT.length; i++) {
        currentBoard.push(gridT[i]);
    }
    return currentBoard
}
//Retorna el array con las posiciones vacias
function emptyCells(currentBrd) {
    let emptyCellsArray=[]
    for (let i = 0; i < currentBrd.length; i++) {
        if (currentBrd[i]!="X" & currentBrd[i]!="O") {
            emptyCellsArray.push(currentBrd[i])
        }
    }
    return emptyCellsArray;
}
//Juega una casilla disponible random
function randomPlay() {
    let currentArray=[];
    let currentBoard=currentGrid();
    currentArray=emptyCells(currentBoard);
    max=currentArray.length
    let index=Math.floor(Math.random()*max)
    let position = (currentArray[index])-1
    gridT[position]="O";
    let cell= arrayCells[position];
    cell.style.backgroundImage="url(Img/Red_Circle.png)";
    cell.style.backgroundSize="cover";
    console.log(gridT);
    
    if (winVer2()) {
        puntuacion[1]++;
        puntosD.innerHTML=puntuacion[1];
        localStorage.setItem("puntaje", JSON.stringify(puntuacion));
        turnoID.innerHTML="Final del juego"
        return
    } 
    turno=true;
    turnoID.innerHTML="Turno del Jugador"
}
//Limpia el tablero y la matriz
function reload() {
    for (let i = 0; i < gridT.length; i++) {
        gridT[i]=i+1;
    }
    for (let a = 0; a < arrayCells.length; a++) {
        arrayCells[a].style.backgroundImage="none";
        arrayCells[a].style.removeProperty("background-color");
        arrayCells[a].style.border="1px solid black";
    }
    currentPuntaje=[puntuacion[0],puntuacion[1]]
    turno=true;
    turnoID.innerHTML="Turno del Jugador"
}
