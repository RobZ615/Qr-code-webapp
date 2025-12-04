document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOM is ready.");

    // HTML Element References
    const emailInput = document.getElementById('email-input');
    const emailBtn = document.getElementById('email-btn');
    const urlInput = document.getElementById('url-input');
    const urlBtn = document.getElementById('url-btn');
    const qrCodeContainer = document.getElementById('qrcode');

    // Helper function to generate QR
    function generateQRCode(textToEncode) {
        console.log("Generating QR code for:", textToEncode);
        
        // 1. Clear existing QR code
        qrCodeContainer.innerHTML = ''; 

        // 2. Check if the library is loaded
        if (typeof QRCode === 'undefined') {
            console.error("QRCode library is not loaded! Check your HTML file.");
            alert("Error: QRCode library missing. Please check your internet connection and HTML file.");
            return;
        }

        // 3. Create new QR code
        new QRCode(qrCodeContainer, {
            text: textToEncode,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // Email Button Listener
    emailBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        console.log("Email button clicked. Input:", email);

        if (email) {
            generateQRCode(`mailto:${email}`);
        } else {
            alert('Please enter an email address.');
        }
    });

    // URL Button Listener
    urlBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        console.log("URL button clicked. Input:", url);

        if (url) {
            generateQRCode(url);
        } else {
            alert('Please enter a URL.');
        }
    });
});
