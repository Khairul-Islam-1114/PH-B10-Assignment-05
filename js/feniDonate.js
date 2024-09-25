document.getElementById('donate-for-feni').addEventListener('click', function(){

    const collectedDonationForFeni = getCollectedDonationById('collected-donation-for-feni');
    const inputedDonationForFeni = getInputValueById('donation-for-feni');
    const myBalance = getMyBalanceById('my-balance');
    const feniTitle = getTitleById('title-feni');
    const date = new Date().toString();

    if (!isNaN(inputedDonationForFeni) && inputedDonationForFeni > 0) {

        let newCollectedDonationForFeni = collectedDonationForFeni + inputedDonationForFeni;
        let newBalance = myBalance - inputedDonationForFeni;

        document.getElementById('collected-donation-for-feni').innerText = newCollectedDonationForFeni;
        document.getElementById('my-balance').innerText = newBalance;

        alert(`Congratulations! You have donated ${inputedDonationForFeni} to ${feniTitle}`);

        // Show the modal after the donation
        document.getElementById('donation-modal').showModal();

 // Adding to History

 const div  = document.createElement('div');
 div.classList.add('history-container');

 div.innerHTML = `
 <div class="p-5 border rounded-md">
     <h2 class="text-2xl font-bold">${inputedDonationForFeni} Taka is donated for ${feniTitle}</h2>
     <p>${date}</p>
 </div>
 `;
        document.getElementById('history-container').appendChild(div);

    } else {

        alert("Please enter a valid donation amount");
    }
});