function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueInNumber = parseFloat(inputValue);
    return inputValueInNumber;
}

function getCollectedDonationById(id){
    const collectedDonation = document.getElementById(id).innerText;
}