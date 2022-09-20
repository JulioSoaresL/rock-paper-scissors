let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")

const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissor_div = document.getElementById("scissor")

function getComputerChoice()
{
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function convertToPt(word)
{
    if(word === "rock") return "Pedra"
    if(word === "paper") return "Papel"
     return "Tesoura";
}

function win(uc, cc) 
{
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML= computerScore
    const smallWordUser = "Você".fontsize(2).sub()
    const smallWordComp = "Robô".fontsize(2).sub()
    result_p.innerHTML = `${convertToPt(uc)} ${smallWordUser} supera ${convertToPt(cc)} ${smallWordComp}. Você Ganhou!`
    document.getElementById(uc).classList.add('green-glow')
}

function lose(uc, cc) 
{
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML= computerScore
    const smallWordUser = "Você".fontsize(2).sub()
    const smallWordComp = "Robô".fontsize(2).sub()
    result_p.innerHTML = `${convertToPt(uc)} ${smallWordUser} perde para ${convertToPt(cc)} ${smallWordComp}. Você Perdeu...` 
}

function draw(uc, cc) 
{
    const smallWordUser = "Você".fontsize(2).sub()
    const smallWordComp = "Robô".fontsize(2).sub()
    result_p.innerHTML = `${convertToPt(uc)} ${smallWordUser} é igual a ${convertToPt(cc)} ${smallWordComp}. Empate.` 
}

function game(userChoice)
{
    const computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice)
            break
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice)
            break
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice)
            break
    }
}

function main()
{
    rock_div.addEventListener('click', function(){
        game("rock")
    })
    
    paper_div.addEventListener('click', function(){
        game("paper")
    })
    
    scissor_div.addEventListener('click', function(){
        game("scissor")
    })
    
}

main();