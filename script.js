document.addEventListener("DOMContentLoaded", () => {
    const newGameButton = document.querySelector(".btn-1");
    const loadGameButton = document.querySelector(".btn-2");
    const optionsButton = document.querySelector(".btn-3");
    const exitButton = document.querySelector(".btn-4");

    newGameButton.addEventListener("click", () => {
        const imageContainer = document.createElement("div");
        imageContainer.innerHTML = `
            <img src="tno.png" alt="New Game" style="
                width: 400px; 
                position: absolute; 
                top: 50%; 
                left: 50%; 
                transform: translate(-50%, -50%);
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
            ">
        `;
        document.body.appendChild(imageContainer);
    });
    newGameButton.addEventListener("click", () => {
        const textContainer = document.createElement("div");
        textContainer.innerHTML = `
            <p style="
                color: #e6d8b7; 
                font-size: 1.5rem; 
                text-align: center; 
                position: absolute; 
                top: 50%; 
                left: 50%; 
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.8); 
                padding: 20px; 
                border: 2px solid #654321;
            ">
                "You are the Nameless One. You don't remember anything."
            </p>
        `;
        document.body.appendChild(textContainer);
        setTimeout(() => {
            textContainer.remove();
        }, 5000);
    });
    loadGameButton.addEventListener("click", () => {
        const textContainer = document.createElement("div");
        textContainer.innerHTML = `
            <p style="
                color: #e6d8b7; 
                font-size: 1.5rem; 
                text-align: center; 
                position: absolute; 
                top: 50%; 
                left: 50%; 
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.8); 
                padding: 20px; 
                border: 2px solid #654321;
            ">
                "You don't remember anything. No games to load!"
            </p>
        `;
        document.body.appendChild(textContainer);
        setTimeout(() => {
            textContainer.remove();
        }, 5000);
    });
    exitButton.addEventListener("click", () => {
        const confirmation = confirm("Are you sure you want to quit?");
        if (confirmation) {
            window.close();
        }
    });
    optionsButton.addEventListener("click", () => {
        const music = document.getElementById("background-music");
        music.pause();
        alert("Options menu under construction!");
    });
});
