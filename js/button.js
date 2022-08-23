const playerCardArray = [];

//  function start here
function getPlayer(playerCard) {
    const playerTable = document.getElementById("card-players");
    playerTable.innerHTML = "";

    for (let i = 0; i < playerCard.length; i++) {

        const player = playerCard[i].playerName;

        if (playerCard.length > 5) {
        
            alert("Only five players are allowed to selecting in your team.")
            return;
        }
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${player}</td>
        `
        playerTable.appendChild(tr);
        
    }
}
//  function end here

//  function start here
function clickButton(element) {

    const playerName = element.parentNode.parentNode.childNodes[1].innerText

    const playerObject = {
        playerName: playerName
    }
    playerCardArray.push(playerObject);


    document.getElementById("selected-list").innerText = playerCardArray.length;
    getPlayer(playerCardArray);
} 
//<-------------------- function end here---------------------->//

// let buttonDisabled = document.getElementById("clickButton");
//     buttonDisabled.classList.add("disabled");

//   if (playerCard.length > 5) {
//     clickButton.disabled = false;
//     }
//     else {
//     clickButton.disabled = true;
// }

//     playerCardArray(element){
//     element.disabled = true;
// }