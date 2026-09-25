let message = document.getElementById("message");
let orderResult = document.getElementById("savedOrder");
let usernameResult = document.getElementById("savedUsername");

displaySavedData();

function submitOrder() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let order = document.getElementById("order").value;

    let usernameRegex = /^\S+$/;
    let passwordRegex = /^(?=.*[0-9]).{8,}$/;
    let phoneRegex = /^07[0-9]{8}$/;

    if (!usernameRegex.test(username)) {
        message.textContent = "Username must not be empty or contain spaces.";
        return;
    }

    if (!passwordRegex.test(password)) {
        message.textContent = "Password must have at least 8 characters and one number.";
        return;
    }

    if (!phoneRegex.test(phone)) {
        message.textContent = "Phone must be 10 digits and start with 07.";
        return;
    }

    message.textContent = "Welcome, " + username;

    localStorage.setItem("order", order);
    sessionStorage.setItem("username", username);

    displaySavedData();
}

function displaySavedData() {
    let savedOrder = localStorage.getItem("order");
    let savedUsername = sessionStorage.getItem("username");

    if (savedOrder !== null) {
        orderResult.textContent = "Saved Order: " + savedOrder;
    }

    if (savedUsername !== null) {
        usernameResult.textContent = "Saved Username: " + savedUsername;
    }
}