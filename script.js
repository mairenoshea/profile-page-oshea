console.log("page loaded...");

var requestAction = document.querySelector(".requestaction");
var philRequest = document.querySelector("#philrequest");
var toddRequest=document.querySelector("#toddrequest");
var connectionsRequests=document.querySelector("#connectionsrequests");
var totalRequests = 2;
var totalConnections=500;
var connections=document.querySelector("#connections");

var userName=document.querySelector("#username");


function removeRequest(element) {
    console.log("button was clicked");
    element.remove();
    totalRequests--;
    console.log(totalRequests);
    connectionsRequests.innerText=totalRequests;

    if (this.alt="accept") {
        console.log("accept button was clicked");
        totalConnections++;
        console.log(totalConnections);
        connections.innerText=totalConnections +"+";
    }
}

function editProfile() {
    console.log("edit button was clicked");
    userName.innerText="Any Other Name";
}
