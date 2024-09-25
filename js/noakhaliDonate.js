


document.getElementById('donate-for-noakhali').addEventListener('click', function(){


    const collEctedDonationForNoakhali = getCollectedDonationById('collected-donation-for-noakhali');



    const inputedDonationForNoakhali = getInputValueById('donation-for-noakhali');

    const myBalance = getMyBalanceById('my-balance');

    const noakhaliTitle = getTitleById('title-noakhali')


if (!isNaN(inputedDonationForNoakhali) && inputedDonationForNoakhali > 0){

    let newCollEctedDonationForNoakhali = collEctedDonationForNoakhali + inputedDonationForNoakhali;
    let newBalance = myBalance - inputedDonationForNoakhali;

    document.getElementById('collected-donation-for-noakhali').innerText = newCollEctedDonationForNoakhali;
    document.getElementById('my-balance').innerText = newBalance;


    alert(`Congratulations! You have donated ${inputedDonationForNoakhali} to ${noakhaliTitle}`)
}else{

    alert("Please enter a valid donation amount");

}
    


})