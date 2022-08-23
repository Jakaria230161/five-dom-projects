const playerCardArray = [];

//  function start here
function getPlayer(playerCard) {
    const playerTable = document.getElementById("card-players");
    playerTable.innerHTML = "";

    for (let i = 0; i < playerCard.length; i++) {

        const player = playerCard[i].playerName;

        if (i > 4) {
        
            alert("Only five players are allowed to selecting in your team.");
            playerCard.length = 5;
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
    let playerButton = element.setAttribute("disabled", "");
    console.log(playerButton);
    const playerObject = {
        playerName: playerName
    }
    playerCardArray.push(playerObject);


    document.getElementById("selected-list").innerText = playerCardArray.length;
    getPlayer(playerCardArray);
} 
//<-------------------- function end here---------------------->//