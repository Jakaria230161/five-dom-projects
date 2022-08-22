const playerArray = [];
function display(playerProduct) {

    let totalPrice = 0;
    const tableBody = document.getElementById("cart-player");
    tableBody.innerHTML = "";

    for (let i =0; i < playerArray.length; i++){
        const name = playerArray[i].playerName;
        

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <tr>
        <th>${i+1}</th>
        <td>${name}</td>
        `;

        tableBody.appendChild(tr);
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td >
    `;
    tableBody.appendChild(tr);
}

function playerAddToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: productName,
    }
    playerArray.push(playerObj);
    

    document.getElementById("total-added-player").innerText = playerArray.length;
    
    display(playerArray);
}