function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueInNumber = parseFloat(inputValue);
    return inputValueInNumber;
}

function getCollectedDonationById(id){
    const collectedDonation = document.getElementById(id).innerText;

    const collectedDonationInNumber = parseFloat(collectedDonation);

    return collectedDonationInNumber;
}

function getTitleById(id){
   const title =  document.getElementById(id).innerText;

   return title;
}

function getMyBalanceById(id){
   const myBalance =  document.getElementById(id).innerText;
   const myBalanceInNumber = parseFloat(myBalance);

   return myBalanceInNumber;
}