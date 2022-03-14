(function gameFlow() {
    const gridSquares = document.querySelectorAll(".grid");
    const contEl = document.querySelector(".result");
    const playerOne = document.querySelector('.player1').textContent;
    const playerTwo = document.querySelector('.player2').textContent;

    let xClicked = false;
    let oClicked = false;
    
    for (let i = 0; i < gridSquares.length; i++) {
        function playRound() {
            if (gridSquares[i].textContent === "") {
                if (!xClicked && !oClicked) {
                    gridSquares[i].textContent = "❌";
                    xClicked = true;
                    checkWinner("❌", playerOne);
                } else if (xClicked && !oClicked) {
                    gridSquares[i].textContent = "⭕";
                    oClicked = true;
                    xClicked = false;
                    checkWinner("⭕", playerTwo);
                } else if (!xClicked && oClicked) {
                    gridSquares[i].textContent = "❌";
                    xClicked = true;
                    oClicked = false;
                    checkWinner("❌", playerOne);
                }
            }
        }
        gridSquares[i].addEventListener("click", playRound);
    }

    const checkWinner = function (symbol, winner) {

        for (let i = 0; i < 3; i++) {
            if (gridSquares[i].textContent === symbol &&
                gridSquares[i].textContent === gridSquares[i+3].textContent &&
                gridSquares[i+3].textContent === gridSquares[i+3+3].textContent) {

                return declareWinner(winner);
            }
        }
        for (let i = 0; i < 7; i+=3) {
            if (gridSquares[i].textContent === symbol &&
                gridSquares[i].textContent === gridSquares[i+1].textContent &&
                gridSquares[i+1].textContent === gridSquares[i+1+1].textContent) {

                return declareWinner(winner);
            }
        }
        if (gridSquares[0].textContent === symbol &&
            gridSquares[0].textContent === gridSquares[0+4].textContent &&
            gridSquares[0+4].textContent === gridSquares[0+4+4].textContent ||
            gridSquares[2].textContent === symbol &&
            gridSquares[2].textContent === gridSquares[2+2].textContent &&
            gridSquares[2+2].textContent === gridSquares[2+2+2].textContent) {

            return declareWinner(winner);
        }
    }
    
    let declareCalled = false;
    function declareWinner(name) {

        if (!declareCalled) {
            const winner = document.createElement("h2");
            winner.textContent = `${name.slice(0, -1)} won the game!`;
            contEl.appendChild(winner);
            declareCalled = true;
        }

        for (let i = 0; i < gridSquares.length; i++) {
            if (gridSquares[i].textContent === "") {
                gridSquares[i].addEventListener("click", function () {
                    gridSquares[i].textContent = "";
                });
            }
        } 
    }

})();