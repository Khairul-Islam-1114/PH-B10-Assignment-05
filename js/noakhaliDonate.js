


document.getElementById('donate-for-noakhali').addEventListener('click', function(){


    const collEctedDonationForNoakhali = getCollectedDonationById('collected-donation-for-noakhali');



    const inputedDonationForNoakhali = getInputValueById('donation-for-noakhali');

    const myBalance = getMyBalanceById('my-balance');

    const noakhaliTitle = getTitleById('title-noakhali');

    const date = new Date().toString();


if (!isNaN(inputedDonationForNoakhali) && inputedDonationForNoakhali > 0){

    let newCollEctedDonationForNoakhali = collEctedDonationForNoakhali + inputedDonationForNoakhali;
    let newBalance = myBalance - inputedDonationForNoakhali;

    document.getElementById('collected-donation-for-noakhali').innerText = newCollEctedDonationForNoakhali;
    document.getElementById('my-balance').innerText = newBalance;


    alert(`Congratulations! You have donated ${inputedDonationForNoakhali} to ${noakhaliTitle}`);

    // Show the modal after the donation
    document.getElementById('donation-modal').showModal();

 // Adding to History

 const div  = document.createElement('div');
 div.classList.add('history-container');

 div.innerHTML = `
 <div class="p-5 border rounded-md">
     <h2 class="text-2xl font-bold">${inputedDonationForNoakhali} Taka is donated for ${noakhaliTitle}</h2>
     <p>${date}</p>
 </div>
 `;

    document.getElementById('history-container').appendChild(div);
}else{

    alert("Please enter a valid donation amount");

}
    


})