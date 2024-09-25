document.getElementById('donate-for-feni').addEventListener('click', function(){

    const collectedDonationForFeni = getCollectedDonationById('collected-donation-for-feni');
    const inputedDonationForFeni = getInputValueById('donation-for-feni');
    const myBalance = getMyBalanceById('my-balance');
    const feniTitle = getTitleById('title-feni');

    if (!isNaN(inputedDonationForFeni) && inputedDonationForFeni > 0) {

        let newCollectedDonationForFeni = collectedDonationForFeni + inputedDonationForFeni;
        let newBalance = myBalance - inputedDonationForFeni;

        document.getElementById('collected-donation-for-feni').innerText = newCollectedDonationForFeni;
        document.getElementById('my-balance').innerText = newBalance;

        alert(`Congratulations! You have donated ${inputedDonationForFeni} to ${feniTitle}`);

    } else {

        alert("Please enter a valid donation amount");
    }
});