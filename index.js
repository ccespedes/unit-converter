/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById('input')
const convertBtnEl = document.getElementById('convert-btn')
const metersEl = document.getElementById('meters')
const litersEl = document.getElementById('liters')
const massEl = document.getElementById('mass')

convertBtnEl.addEventListener('click', () => {
    convert(inputEl.value, metersEl, 'meters')
    convert(inputEl.value, litersEl, 'liters')
    convert(inputEl.value, massEl, 'mass')
})

function convert(inputVal, element, unit){
    if(unit === 'meters'){
        const meters = Math.round((inputVal * 3.281) * 1000) / 1000
        const feet = Math.round((inputVal / 3.281) * 1000) / 1000
        const result = `${inputVal} meters = ${meters} feet | ${inputVal} feet = ${feet} meters`
        element.innerText = result
    } else if (unit === 'liters'){
        const liters = Math.round((inputVal * 0.264) * 1000) / 1000
        const gallons = Math.round((inputVal / 0.264) * 1000) / 1000
        const result = `${inputVal} liters = ${liters} gallons | ${inputVal} gallons = ${gallons} liters`
        element.innerText = result
    } else {
        const kilos = Math.round((inputVal * 2.204) * 1000) / 1000
        const pounds = Math.round((inputVal / 2.204) * 1000) / 1000
        const result = `${inputVal} kilos = ${kilos} pounds | ${inputVal} pounds = ${pounds} kilos`
        element.innerText = result
    }
}