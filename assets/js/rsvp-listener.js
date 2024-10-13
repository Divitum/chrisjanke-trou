const scriptURL = 'https://script.google.com/macros/s/AKfycbzBsWQXOcX9CKSoq-pNXNS2dkVfeRrdMAaT4TBKO0cEI_8aqXKE1p9fTvMqdIf_8fuW/exec'


const form = document.forms['rsvp-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Dankie! Sien uit om jou daar te sien." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
