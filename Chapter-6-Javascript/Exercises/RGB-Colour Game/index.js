// RGB COLOR GUESSING GAME | BONUS
// EXTERNAL JAVASCRIPT FILE 

// Get certain elements through their respective ids and store them in const variables
const rgbValueElement = document.getElementById('rgbValue');
const colorsElement = document.getElementById('colors');
const messageElement = document.getElementById('message');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const resetButtonElement = document.getElementById('resetButton');

// variables to keep track of game score, lives and store the correct color 
let score = 0;
let lives = 3;
let correctColor = null;

// Function to generate a random RGB color (between 0 and 255)
function generateRandomColor() {
    // selects random numbers (between 1 and 255) for rgb values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // returns the numbers in this format rgb(r, g, b)
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to reset/restart the game
function generateGameRound() {

    // hides the reset button initially
    resetButtonElement.classList.add('hidden'); 
    // clears the message div
    messageElement.textContent = ''; 

    // Generate a random RGB color (using its specific function) and set it as the correct color choice
    correctColor = generateRandomColor();
    rgbValueElement.textContent = correctColor;

    // Generate other color choices and loop through them in a list
    const colors = [correctColor];
    // loop continues until the array lendth is equal to 3
    while (colors.length < 3) {
        // generates a new color (temporarily stored in newColor)
        const newColor = generateRandomColor();
        // if the newColor is not in the array
        if (!colors.includes(newColor)) {
            // newColor is added to the colors array
            colors.push(newColor);
        }
    }

    // Shuffles the color choices in the colors array
    colors.sort(() => Math.random() - 0.5);

    // clears the element with id colors (with the three color choices)
    colorsElement.innerHTML = '';
    // loop that iterates through each color choice in the colors array
    colors.forEach((color) => {
        // creates a div element, for each color in the array
        const colorDiv = document.createElement('div');
        // assigns div elements a class name "color" 
        colorDiv.className = 'color';
        // sets the background color of the div element to its respective rgb color value
        colorDiv.style.backgroundColor = color;
        // adds a click event listener to the each color div
        colorDiv.addEventListener('click', () => handleColorClick(color));
        // appends the new div elements to the element with colors id, which allows the colors to be displayed on the web page.
        colorsElement.appendChild(colorDiv);
    });
}

// called when a color choice is clicked, it checks whether the choice is a correct or not 
// checks whether the clicked color is the correct choice 
function handleColorClick(color) {
    // if the choice is guessed correctly
    if (color === correctColor) {
        // player's score is incremented by one
        score++;
        // score is displayed in the element with id "score", by updating its content
        scoreElement.textContent = `Score: ${score}`;
        // element with id "message" is updated to display a "Correct!" message
        messageElement.textContent = 'Correct!';
    } 
    // if the choice is incorrect
    else {
        //player's lives are decremented by 1
        lives--;
        // number of lives left is displayed in the element with id "lives", by updating its content
        livesElement.textContent = `Lives: ${lives}`;
        // element with id "message" is updated to display an "Incorrect!" message along with the correct color choice
        messageElement.textContent = `Incorrect! The correct color was: ${correctColor}`;
    }

    // checks if the player has run out of lives
    if (lives <= 0) {
        // displays a "Game Over" message with the player's final score
        messageElement.textContent = 'Game Over! Final Score: ' + score;
        // clears the contents of the element with id colors
        colorsElement.innerHTML = '';
        // shows the reset button
        resetButtonElement.classList.remove('hidden'); 
        // stops further execution of the function
        return;
    }

    // Generate a new game round
    // if player still has lives left, the main function is called again, to start a new round of the game
    generateGameRound();
}

// adds an event listener to the resetButtonElement (when button is clicked, following function is executed)
resetButtonElement.addEventListener('click', () => {
    // player's score is reset to zero
    score = 0;
    // player's lives are reset to 3
    lives = 3;
    // updates the content of the element with id "score", to display the reset score (0)
    scoreElement.textContent = `Score: ${score}`;
    // updates the content of the element with id "lives", to display the reset number of lives (3)
    livesElement.textContent = `Lives: ${lives}`;
    // clears the message element
    messageElement.textContent = ''; 
    // hides the reset button
    resetButtonElement.classList.add('hidden'); 
    // sets up a new round of the game
    generateGameRound();
});

// Initialize the game
// after the reset button event listener, generateGameRound() is called again to start an initial round of the game when the page loads
generateGameRound();
