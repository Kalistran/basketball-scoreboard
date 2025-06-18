let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeTotalScore = 0
let guestTotalScore = 0
let onePoint = 1
let twoPoint = 2
let threePoint = 3

function add1home(){
    homeScore.innerText = homeTotalScore + onePoint
    homeTotalScore +=onePoint
}
function add2home(){
    homeScore.innerText = homeTotalScore + twoPoint
    homeTotalScore +=twoPoint
}
function add3home(){
    homeScore.innerText = homeTotalScore + threePoint
    homeTotalScore +=threePoint
}
function add1guest(){
    guestScore.innerText = guestTotalScore + onePoint
    guestTotalScore +=onePoint
}
function add2guest(){
    guestScore.innerText = guestTotalScore + twoPoint
    guestTotalScore +=twoPoint
}
function add3guest(){
    guestScore.innerText = guestTotalScore + threePoint
    guestTotalScore +=threePoint
}

function reset(){
    homeTotalScore = 0
    guestTotalScore = 0
    homeScore.innerText = homeTotalScore
    guestScore.innerText = guestTotalScore
}