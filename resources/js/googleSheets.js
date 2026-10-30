// In googleSheets.js
function setUpGoogleSheets() {
    const scriptURL = '<PUT URL HERE>';
    const form = document.querySelector('#scoutingForm');
    const btn = document.querySelector('#submit');
 
    form.addEventListener('submit', e => {
      e.preventDefault();
      btn.disabled = true;
      btn.innerHTML = "Sending...";

      let tsvString = getData(dataFormat);
      console.log("TSV Data to send:", tsvString);

      let encodedData = new URLSearchParams();
      encodedData.append('tsvData', tsvString);

      fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: encodedData 
      })
      .then(() => { 
        alert('Request sent to Google Sheets!'); 
      })
      .catch(error => {
        alert('Network Error: ' + error.message);
      })
      .finally(() => {
        btn.disabled = false;
        btn.innerHTML = "Send to Google Sheets";
      });
    });
}