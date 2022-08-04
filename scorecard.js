let homeScore = document.querySelector('.home-score')
let guestScore = document.querySelector('.guest-score')
let resetBtn =document.getElementById('resetbtn')


let homeCount = 0
let guestCount = 0

function homeCountOne(){
    //console.log('click')
   homeCount +=1
			homeScore.textContent = homeCount
}


function homeCountTwo(){
	homeCount += 2
	homeScore.textContent = homeCount
}

function homeCountThree(){
	homeCount += 3
	homeScore.textContent = homeCount
}


function guestCountOne(){
	guestCount += 1
	guestScore.textContent =guestCount
}

function guestCountTwo(){
	guestCount += 2
	guestScore.textContent = guestCount
}

function guestCountThree(){
	guestCount += 3
	guestScore.textContent = guestCount
}

function resetHandler(){
homeScore.textContent =0
guestScore.textContent = 0
homeCount = 0
guestCount = 0

}

