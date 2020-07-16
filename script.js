const calculatorScreen = document.querySelector('.layar-kalkulator')

const updateScreen = (number) => {
	calculatorScreen.value = number
} 
const numbers = document.querySelectorAll(".nomor")

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

numbers.forEach((number) =>{
	number.addEventListener("click", (event) => {
	inputNumber(event.target.value)
	updateScreen(currentNumber)	
	})
})

//script operator
const operators = document.querySelectorAll('.operator')

const inputOperator = (operator) => {
	if (calculatorOperator === '') {
		prevNumber = currentNumber
	}
	calculatorOperator = operator
	currentNumber = '0'
}

operators.forEach((operator) =>{
	operator.addEventListener("click", (event) => {
	inputOperator(event.target.value)	
	})
})

//script total
const totals = document.querySelector('.total')

totals.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

const calculate = () => {
	let result = ''
	switch(calculatorOperator) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case '-':
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break
		case '*':
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break
		case '/':
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break
		default:
			break
	}
	currentNumber = result
	calculatorOperator = ''
}


//script button bersihkan semua
const bersihkanBtn = document.querySelector('.bersihkan-semua')

bersihkanBtn.addEventListener('click', () => {
	hapusSemua()
	updateScreen(currentNumber)
})

const hapusSemua = () => {
	prevNumber = ''
	calculatorOperator= ''
	currentNumber = '0'
}

//script membuat dersimal
const desimal = document.querySelector('.desimal')

desimal.addEventListener('click', (event) => {
	masukanDesimal(event.target.value)
	updateScreen(currentNumber)
})

masukanDesimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	} 
	currentNumber += dot
}

//perhitungan persen
const persen = document.querySelector('.persentase')

persen.addEventListener('click', () => {
	persenTase()
	updateScreen(hasil)
})

const persenTase = () => {
	if (currentNumber === '0'){
		return
	}
	currentNumber = currentNumber / 100
}

