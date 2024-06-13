document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let newPassword = document.getElementById('newPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // If everything is fine, you can send the form data to the server here
    // For this example, we'll just log the form data to the console
    let formData = {
        firstName: document.getElementById('firstName').value,
        secondName: document.getElementById('secondName').value,
        dob: document.getElementById('dob').value,
        district: document.getElementById('district').value,
        sector: document.getElementById('sector').value,
        cell: document.getElementById('cell').value,
        village: document.getElementById('village').value,
        id: document.getElementById('id').value,
        newPassword: newPassword,
    };

    console.log('Form Data Submitted:', formData);
    alert('Account created successfully!');
});
