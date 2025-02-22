// Format credit card number with spaces
document.getElementById('card-number').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = value;
});

// Restrict month input to 2 digits
document.getElementById('exp-month').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    e.target.value = value.slice(0, 2);
});

// Restrict year input to 2 digits
document.getElementById('exp-year').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    e.target.value = value.slice(0, 2);
});

// Restrict CVC input to 3 digits
document.getElementById('cvc').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    e.target.value = value.slice(0, 3);
});

// Alert message when submitting
document.getElementById('submit-button').addEventListener('click', function() {
    alert('Payment Submitted!');
});
