        
        let playerScore = 0
        let computerScore = 0
        let score = ''
        function getComputerChoice() {
            let randomNumber = Math.floor(Math.random() * 3)
              switch (randomNumber) {
                case 0:
                    return 'ROCK'
                case 1:
                    return 'PAPER'
                case 2:
                    return 'SCISSORS'
                }
        }
        const roundWinner = document.getElementById('roundWinner')
        const ps = document.getElementById('playerScore')
        const ppick = document.getElementById('playerChoice')
        const cpick = document.getElementById('computerChoice')
        const cs = document.getElementById('cs')
        const winner = document.getElementById('winner')
        const choice = document.querySelectorAll('button')
        choice.forEach((button) => {
            button.addEventListener('click', () => {
                playRound(playerSelection = button.id)
                
            })
        })
        
        function playRound() {
       let computerSelection = getComputerChoice()
       cpick.textContent = `Computer Picked: ${computerSelection}`
       if (playerSelection === computerSelection) {
        score = 'tie'
        }
        if (
            (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
            (playerSelection === 'PAPER' && computerSelection === 'ROCK')
        ) {
            playerScore += 1;
            score = 'player'
        }
        if (
            (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK')
        ) {
            computerScore += 1;
            score = 'computer'
        }
        if (playerScore == 5) {
            result += `<br><br>YOU WIN!`
            winner.textContent = "YOU WIN"
            const btn = document.createElement("button")
            btn.textContent = "reset"
            btn.onclick = () => location.reload()
            container.appendChild(btn)
            disableButtons()
        } else if (computerScore == 5) {
            winner.textContent = "LOSWER DECKER!!!"
            const btn = document.createElement("button")
            btn.textContent = "reset"
            btn.onclick = () => location.reload()
            container.appendChild(btn)
            disableButtons()
        }
       updateScore()
       }
    function updateScore() {
        if (score === 'tie') {
            roundWinner.textContent = "It's a tie"
            ppick.textContent = `You Picked: ${playerSelection}`
    }   else if (score === 'player') {
            roundWinner.textContent = "You won!"
            ps.textContent = `Player: ${playerScore} Computer: ${computerScore}`
            ppick.textContent = `You Picked: ${playerSelection}`
    }   else if (score === 'computer') {
            roundWinner.textContent = "You lost!"
            ps.textContent = `Player: ${playerScore} Computer: ${computerScore}`
            ppick.textContent = `You Picked: ${playerSelection}`
    }
    }
function disableButtons() {
    choice.forEach(elem => {
        elem.disabled = true
        roundWinner.remove()
    })
}