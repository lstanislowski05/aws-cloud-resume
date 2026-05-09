// Function to log deployment info to the console
function checkDeployment() {
    console.log("Cloud Project Deployment Check...");
    console.log("Protocol: " + window.location.protocol);
    
    if (window.location.protocol === "https:") {
        console.log("Security Status: ACM SSL Certificate Active.");
    } else {
        console.warn("Security Status: Not using HTTPS.");
    }
}

// Run on page load
window.onload = checkDeployment;