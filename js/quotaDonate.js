document.getElementById('donate-for-quota').addEventListener('click', function(){

    const collectedDonationForQuota = getCollectedDonationById('collected-donation-for-quota');
    const inputedDonationForQuota = getInputValueById('donation-for-quota');
    const myBalance = getMyBalanceById('my-balance');
    const quotaTitle = getTitleById('title-quota');

    if (!isNaN(inputedDonationForQuota) && inputedDonationForQuota > 0) {

        let newCollectedDonationForQuota = collectedDonationForQuota + inputedDonationForQuota;
        let newBalance = myBalance - inputedDonationForQuota;

        document.getElementById('collected-donation-for-quota').innerText = newCollectedDonationForQuota;
        document.getElementById('my-balance').innerText = newBalance;

        alert(`Congratulations! You have donated ${inputedDonationForQuota} to ${quotaTitle}`);

    } else {

        alert("Please enter a valid donation amount");
    }
});
