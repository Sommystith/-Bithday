function checkPassword() {
    const password = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    
    // Set your desired password here
    const correctPassword = '05062023';
    
    if (password === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('video-container').style.display = 'block';
    } else {
        errorMessage.textContent = 'wtf you forgot!!.';
    }
}
