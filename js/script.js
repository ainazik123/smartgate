function goToLogin(){
    window.location.href = "login.html";
}

function goToDashboard(){
    window.location.href = "dashboard.html";
}

function goToMonitoring(){
    window.location.href = "monitoring.html";
}

function goToBarrier(){
    window.location.href = "barrier.html";
}

function logout(){
    window.location.href = "index.html";
}

function openBarrier(){

    document.getElementById("barrier").style.transform =
        "rotate(-90deg)";

    document.getElementById("status").innerHTML =
        "Opened";

    document.getElementById("status").classList.remove("closed");

    document.getElementById("status").classList.add("open");
}

function closeBarrier(){

    document.getElementById("barrier").style.transform =
        "rotate(0deg)";

    document.getElementById("status").innerHTML =
        "Closed";

    document.getElementById("status").classList.remove("open");

    document.getElementById("status").classList.add("closed");
}