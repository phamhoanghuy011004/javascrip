function validateAndNext() {
    var form = document.getElementById('profileForm');
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
}