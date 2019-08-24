const result = document.getElementById('weightResult');

function multiply(a, b) {
    return a*b;
};

document.getElementById('weight').addEventListener("input", function changeWeight() {

    const weight = document.getElementById('weight').value;
    const unitChosen = document.getElementById('weightChosen').value;
    const unitSelected = document.getElementById('weightSelected').value;

    let fromKgToG = multiply(weight, 1000);
    let fromKgToLb = multiply(weight, 2.205);
    let fromKgToTon = multiply(weight, 0.001);
    let fromKgToOz = multiply(weight, 35.274);

    let fromGToKg = multiply(weight, 0.001);
    let fromGToLb = multiply(weight, 0.00220462);
    let fromGToTon = multiply(weight, 0.000001);
    let fromGToOz = multiply(weight, 0.035274);

    let fromLbToKg = multiply(weight, 0.453592);
    let fromLbToG = multiply(weight, 453.592);
    let fromLbToTon = multiply(weight, 0.000453592);
    let fromLbToOz = multiply(weight, 16);

    let fromTonToKg = multiply(weight, 1000);
    let fromTonToG = multiply(weight, 1000000);
    let fromTonToLb = multiply(weight, 2204.62);
    let fromTonToOz = multiply(weight, 35273.962);

    let fromOzToKg = multiply(weight, 0.0283495);
    let fromOzToG = multiply(weight, 28.3495);
    let fromOzToLb = multiply(weight, 0.0625);
    let fromOzToTon = multiply(weight, 2.83495e-5);

    if(unitChosen == "kilograms" && unitSelected == "grams"){
        result.innerHTML = fromKgToG;
    }else if(unitChosen == "kilograms" && unitSelected == "pounds"){
        result.innerHTML = fromKgToLb;
    }else if(unitChosen == "kilograms" && unitSelected == "tonnes"){
        result.innerHTML= fromKgToTon;
    }else if(unitChosen == "kilograms" && unitSelected == "ounces"){
        result.innerHTML = fromKgToOz;
    }

    if(unitChosen == "grams" && unitSelected == "kilograms"){
        result.innerHTML = fromGToKg;
    }else if(unitChosen == "grams" && unitSelected == "pounds"){
        result.innerHTML = fromGToLb;
    }else if(unitChosen == "grams" && unitSelected == "tonnes"){
        result.innerHTML= fromGToTon;
    }else if(unitChosen == "grams" && unitSelected == "ounces"){
        result.innerHTML = fromGToOz;
    }

    if(unitChosen == "pounds" && unitSelected == "kilograms"){
        result.innerHTML = fromLbToKg;
    }else if(unitChosen == "pounds" && unitSelected == "grams"){
        result.innerHTML = fromLbToG;
    }else if(unitChosen == "pounds" && unitSelected == "tonnes"){
        result.innerHTML= fromLbToTon;
    }else if(unitChosen == "pounds" && unitSelected == "ounces"){
        result.innerHTML = fromLbToOz;
    }

    if(unitChosen == "tonnes" && unitSelected == "kilograms"){
        result.innerHTML = fromTonToKg;
    }else if(unitChosen == "tonnes" && unitSelected == "grams"){
        result.innerHTML = fromTonToG;
    }else if(unitChosen == "tonnes" && unitSelected == "pounds"){
        result.innerHTML= fromTonToLb;
    }else if(unitChosen == "tonnes" && unitSelected == "ounces"){
        result.innerHTML = fromTonToOz;
    }

    if(unitChosen == "ounces" && unitSelected == "kilograms"){
        result.innerHTML = fromOzToKg;
    }else if(unitChosen == "ounces" && unitSelected == "grams"){
        result.innerHTML = fromOzToG;
    }else if(unitChosen == "ounces" && unitSelected == "pounds"){
        result.innerHTML= fromOzToLb;
    }else if(unitChosen == "kilograms" && unitSelected == "ounces"){
        result.innerHTML = fromOzToTon;
    }
})
