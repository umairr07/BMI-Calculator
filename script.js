const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.getElementById("weight").value);

    const result = document.getElementById("result")
    const range = document.getElementById('range')


    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter a valid weight ${weight}`
    } else {
        var bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }

    result.style.marginTop = "20px";
    result.style.fontSize = "20px"
    result.style.fontWeight = "bold";
    result.style.color = "red";
    result.style.backgroundColor = "black"
    result.style.padding = "10px"

    if (bmi < 18.6) {
        range.innerHTML = "Under Weight";
    } else if (bmi > 18.6 && bmi < 24.9) {
        range.innerHTML = "Normal Range"
    } else if (bmi > 24.9 && bmi < 50.9) {
        range.innerHTML = "Over Weight"
    }


    range.style.marginTop = "20px";
    range.style.fontSize = "20px"
    range.style.fontWeight = "bold";
    range.style.color = "green";
    range.style.backgroundColor = "black"
    range.style.padding = "10px"

})