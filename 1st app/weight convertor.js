const grams = document.getElementById('grams');

const pounds = document.getElementById('pounds');

const ounces = document.getElementById('ounces');

function multiply(a, b) {
    return a*b;
}

document.getElementById('weight').addEventListener("input", function changeWeight() {
    const weight = document.getElementById('weight').value;
    let toGrams = multiply(weight, 1000);
    grams.innerHTML = toGrams;

    let toPounds = multiply(weight, 2.205);
    pounds.innerHTML = toPounds;

    let toOunces = multiply(weight, 35.274);
    ounces.innerHTML = toOunces;
}
);


 
