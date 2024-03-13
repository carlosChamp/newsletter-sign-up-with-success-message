const newsletterCard = document.querySelector('#newsletterCard');
const submitedMail = document.querySelector('#submitedMail');
const confirmationMessage = document.querySelector('#confirmationMessage');

const mySearchParams = new URLSearchParams(document.location.search);
const emailSent = mySearchParams.get('txtEmail');

if (emailSent) {
    confirmationMessage.style.display = 'flex';
    newsletterCard.style.display = 'none';
    submitedMail.textContent = emailSent;
}else{
    confirmationMessage.style.display = 'none';
    newsletterCard.style.display = 'flex';
}