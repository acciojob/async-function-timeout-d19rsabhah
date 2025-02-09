//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;
    const outputDiv = document.getElementById("output");
    
    // Clear previous output
    outputDiv.textContent = "";
    
    // Validate input
    if (!textInput.trim()) {
        alert("Please enter a message.");
        return;
    }
    
    const delay = parseInt(delayInput);
    if (isNaN(delay) || delay < 0) {
        alert("Please enter a valid delay in milliseconds.");
        return;
    }
    
    // Async function to delay execution
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Display message after delay
    outputDiv.textContent = textInput;
});
