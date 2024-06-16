let colorHistory = ''; // Initialize an empty string to store color history

// Function to handle the color selection
function chooseColor(color) {
    // Set "Hello world!" text and change its color to the chosen color
    document.getElementById('helloWorld').textContent = 'Hello world!';
    document.getElementById('helloWorld').style.color = color;  
}
