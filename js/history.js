document.getElementById('history-button').addEventListener('click', function() {
    console.log('History button clicked');

    const mainSection = document.getElementById('main-section');
    mainSection.classList.add('hidden');

    const historyContainer = document.getElementById('history-container');

    historyContainer.classList.remove('hidden');

   const historyButton = document.getElementById('history-button');
   historyButton.classList.add('bg-[#B4F461]');

   const donationButton = document.getElementById('donation-button');
   donationButton.classList.remove('bg-[#B4F461]')
    

});


