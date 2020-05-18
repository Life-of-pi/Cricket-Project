// document.addEventListener("DOMContentLoaded", function(){
// let tableRow;
// team1-tbody
// for(let i=0; i<10;i++){
//     for(let j=0; j<6;j++){
//         tableRow = `<tr>
//     <th scope="row">Player ${i+1}</th>
//     <td id="player-${i}-${j}"></td>
//     <td id="player-${i}-${j}"></td>
//     <td id="player-${i}-${j}"></td>
//     <td id="player-${i}-${j}"></td>
//     <td id="player-${i}-${j}"></td>
//     <td id="player-${i}-${j}"></td>
//     <td id="player-${i}-${j}"></td>
//     </tr>`;
//     }
//     document.getElementById("team1-tbody").innerHTML += tableRow;
// }
// }); 
var playerTableRow;
var RunsTableRow;
var team1Tbody = document.getElementById("team1-tbody");
// tabel for team 1
for (var i = 0; i < 10; i++) {
    var tr = document.createElement("tr");
    team1Tbody.appendChild(tr);
    playerTableRow = document.createElement("th");
    playerTableRow.scope = "row";
    playerTableRow.innerHTML = "Player " + (i + 1);
    tr.appendChild(playerTableRow);
    for (var j = 0; j <= 6; j++) {
        RunsTableRow = document.createElement("td");
        RunsTableRow.id = "player-" + i + "-" + j;
        tr.appendChild(RunsTableRow);
    }
}
var team2Tbody = document.getElementById("team2-tbody");
// table for team 2
for (var i = 0; i < 10; i++) {
    var tr2 = document.createElement("tr");
    team2Tbody.appendChild(tr2);
    playerTableRow = document.createElement("th");
    playerTableRow.scope = "row";
    playerTableRow.innerHTML = "Player " + (i + 1);
    tr2.appendChild(playerTableRow);
    for (var j = 0; j <= 6; j++) {
        RunsTableRow = document.createElement("td");
        RunsTableRow.id = "player2-" + i + "-" + j;
        tr2.appendChild(RunsTableRow);
    }
}
