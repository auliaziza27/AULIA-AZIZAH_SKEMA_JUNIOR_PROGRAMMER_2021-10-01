// Ambil element <button> menggunakan class "number" dan print-kan di dalam console
const numbers = document.querySelectorAll(".number")
console.log(numbers)

// Tambahkan Event listener ke setiap element dengan menggunakan metode forEach
numbers.forEach((number) => {
  console.log(number)
})

// Tambahkan click event ke setiap element menggunakan addEventListener
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log("number is pressed")
  })
})

// Tambahkan argument event
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value)
  })
})

// Tarik element di code JS dan definisikan function "updateScreen"
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value = number
}

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value)
  })
})

// Definisikan 3 variable "prevNumber", "currentNumber", dan "calculationOperator". Nilai awal "currentNumber" adalah 0
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// Berikan angka yang di klik ke currentNumber di dalam function "inputNumber" dan rubah argument "updateScreen" menjadi currentNumber
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

// Masukkan if statement untuk memperbaiki angka yang ditampilkan diawali dengan angka 0
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

// Ambil element-element <button> menggunakan class "operator" dan tambahkan click event ke setiap tombol operator
const operators = document.querySelectorAll(".operator")

// Jalankan function "inputOperator" saat operator di klik
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
    console.log(event.target.value)
  })
})

// Definisikan function "inputOperator" dan XXXX
const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

// Tambahkan click event, jalankan Function Calculate dan perbarui layarnya
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  console.log('equal button is pressed')
  calculate()
  updateScreen(currentNumber)
})

// Definisikan function Calculate, perbarui variable currentNumber, nilai dari calculationOperator kosong, gunakan method parseFloat
const calculate = () => {
  let result = ''
  switch (calculationOperator) {
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
      return
  }
  currentNumber = result
  calculationOperator = ''
}

// Ambil element <button> menggunakan class "all-clear" dan tambahkan click event
const clearBtn = document.querySelector('.all-clear')

// Jalankan function saat tombol AC di klik dan perbarui layar tampilan setelah itu
clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
  console.log('AC button is pressed')
})

// Definisikan function "clearAll" dan tetapkan angka 0 ke currentNumber, dan kosongkan 2 variable yang lain
const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

// Ambil element <button> yang memiliki class "decimal" class
const decimal = document.querySelector('.decimal')

// Jalankan function inputDecimal ke saat tombol titik desimal di klik dan perbarui layar tampilan setelah itu, tambahkan click event ke element tersebut
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
  console.log(event.target.value)
})

// Definisikan function inputDecimal dan tambahkan titik desimal ke currentNumber
// Selesaikan function inputDecimal sebelum titik desimal ditambahkan ke currentNumber
inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}
// Ambil element <button> yang memiliki class "percentage", tambahkan click event ke element tersebut
const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', () => {
  updateScreen(calculatorScreen.value / 100)
})