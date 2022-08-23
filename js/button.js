const playerCardArray = [];

//  function start here
function getPlayer(playerCard) {
    const playerTable = document.getElementById("card-players");
    playerTable.innerHTML = "";
    
    
    for (let i = 0; i < playerCard.length; i++) {

        const player = playerCard[i].playerName;
        
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
// function start here 