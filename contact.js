// contact.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Formani default yuborishni bloklaymiz

        const formData = new FormData(this);

        fetch('procces_contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Natijani chiqaramiz
            document.getElementById('resultMessage').innerHTML = data;
            document.getElementById('resultMessage').style.color = data.includes('muvaffaqiyatli') ? 'green' : 'red';
            if (data.includes('muvaffaqiyatli')) {
                document.getElementById('contactForm').reset();
            }
        })
        .catch(error => {
            document.getElementById('resultMessage').innerHTML = 'Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.';
            document.getElementById('resultMessage').style.color = 'red';
        });
    });
});
