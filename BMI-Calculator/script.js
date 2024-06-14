const formValue = document.querySelector('form')
const body = document.querySelector('body')

formValue.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('.height').value)
    const weight = parseInt(document.querySelector('.weight').value)
    const result = document.querySelector('.resultValue')

    const formulaBMI = weight / ((height * height) / 10000)

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter valid height`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter valid weight`
    } else {
        const yourBMI = formulaBMI.toFixed(2)

        if (formulaBMI < 18) {
            result.innerHTML = `<div>BMI - ${yourBMI}</div>You are Underweight, Try putting on some weight.`
        } else if (formulaBMI > 18 && formulaBMI < 25) {
            result.innerHTML = `<div> BMI - ${yourBMI}</div>You BMI lie under Normal Range.`
        } else if (formulaBMI > 25) {
            result.innerHTML = `<div>BMI - ${yourBMI}</div>You are Overweight, Try losing some weight.`
        }
    }
})
