const cToF = document.getElementById("radio1")
const fToC = document.getElementById("radio2")
const convButton = document.getElementById("convButton")
const tempText = document.getElementById("tempText")



convButton.onclick = function(){
    let tempInput = document.getElementById("tempInput").value

    let finalTemp;

    if(cToF.checked){
        console.log(tempInput)
        console.log("Converting C to F")
        finalTemp = (tempInput*(9/5) + 32)
        finalTemp = finalTemp.toFixed(2)
        console.log(`final temp: ${finalTemp}`)
        tempText.textContent = (`${finalTemp}°F`)
    }

    else if(fToC.checked){
        console.log("Converting F to C")
        finalTemp = (tempInput-32) * (5/9)
        finalTemp = finalTemp.toFixed(2)
        console.log(`final temp: ${finalTemp}`)
        tempText.textContent = (`${finalTemp}°F`)

    }
}




