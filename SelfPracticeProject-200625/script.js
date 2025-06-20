function updateStatus(message){
    const statusDiv = document.getElementById("status-log");
    const p = document.createElement("p");
    p.textContent = message;
    statusDiv.appendChild(p);
}

function submitName() {
    var name = document.getElementById("guestName").value;
    updateStatus("Hello, " + name + "!");
    new Promise((resolve) => {
        setTimeout(resolve, 1000);
    })
    .then(serveWater)
    .then(() => new Promise((resolve) => setTimeout(resolve,1000)))
    .then(serveMenu);
    // After menu, wait for user to choose dish and click confirm
}

function serveWater() {
    updateStatus("Serving water...");
    return new Promise((resolve) => {
        setTimeout(() => {
            updateStatus("Water served!");
            resolve();
        }, 2000);
    });
}

function serveMenu() {
    updateStatus("Serving menu...");
    return new Promise((resolve) => {
        setTimeout(() => {
            updateStatus("Menu served!");
            setTimeout(() => {
                updateStatus("Please choose your dish...");
                document.getElementById("type-dish").style.display = "block";
                resolve();
            }, 2000);
        }, 1500);
    });
}

function submitDish(){
    var dish = document.getElementById("dishName").value;
    updateStatus("You have chosen " + dish);
    document.getElementById("type-dish").style.display = "none";
    // Now serve the dish in sequence
    serveDish()
    .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
    .then(serveDessert)
    .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
    .then(payBill)
    .catch((error) => {
        updateStatus("Apologies, we couldn't serve your order. Please try again later.");
        document.getElementById("retryBtn").style.display = "inline-block";
    });
}

function serveDish(){
    const dish = document.getElementById("dishName").value;
    updateStatus("Serving "+ dish);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.25) {
                updateStatus("Sorry! "+ dish +" is out of stock.");
                reject("Dish unavailable");
            } else{
                updateStatus(dish + " served!");
                resolve();
            }
        }, 2000);
    });
}

function serveDessert(){
    updateStatus("Serving dessert...");
    return new Promise((resolve) => {
        setTimeout(() => {
            updateStatus("Dessert served!");
            resolve();
        }, 1000);
    });
}

function payBill() {
    updateStatus("Processing bill...");
    return new Promise((resolve) => {
        setTimeout(() => {
            updateStatus("Bill paid. Thank you for dining with us!");
            resolve();
        }, 1500);
    });
}

function retryOrder() {
    const statusDiv = document.getElementById("status-log");
    statusDiv.innerHTML = "";
    document.getElementById("dishName").value = "";
    document.getElementById("retryBtn").style.display = "none";
    document.getElementById("type-dish").style.display = "block";
    updateStatus("Please choose your dish again...");
}