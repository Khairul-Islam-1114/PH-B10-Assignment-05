document.getElementById('donate-for-quota').addEventListener('click', function(){

    const collectedDonationForQuota = getCollectedDonationById('collected-donation-for-quota');
    const inputedDonationForQuota = getInputValueById('donation-for-quota');
    const myBalance = getMyBalanceById('my-balance');
    const quotaTitle = getTitleById('title-quota');
    const date = new Date().toString();


    if (!isNaN(inputedDonationForQuota) && inputedDonationForQuota > 0) {

        let newCollectedDonationForQuota = collectedDonationForQuota + inputedDonationForQuota;
        let newBalance = myBalance - inputedDonationForQuota;

        document.getElementById('collected-donation-for-quota').innerText = newCollectedDonationForQuota;
        document.getElementById('my-balance').innerText = newBalance;

        alert(`Congratulations! You have donated ${inputedDonationForQuota} to ${quotaTitle}`);

        // Show the modal after the donation
        document.getElementById('donation-modal').showModal();

        // Adding to History

        const div  = document.createElement('div');
        div.classList.add('history-container');

        div.innerHTML = `
        <div class="p-5 border rounded-md">
            <h2 class="text-2xl font-bold">${inputedDonationForQuota} Taka is donated for ${quotaTitle}</h2>
            <p>${date}</p>
        </div>
        `;

        document.getElementById('history-container').appendChild(div);

    } else {

        alert("Please enter a valid donation amount");
    }
});
