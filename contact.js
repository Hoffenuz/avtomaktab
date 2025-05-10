document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Formani default yuborishni bloklaymiz

        const ism = this.querySelector('[name="ism"]').value;
        const email = this.querySelector('[name="email"]').value;
        const xabar = this.querySelector('[name="xabar"]').value;

        const data = { ism, email, xabar };

        fetch('https://node-2-g32w.onrender.com/aloqa', {  // <=== URL to‘g‘rilandi!
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result); // Konsolga javobni chiqarish
            if (result.message === 'Xabar muvaffaqiyatli yuborildi') {
                document.getElementById('resultMessage').innerHTML = 'Xabaringiz muvaffaqiyatli yuborildi!';
                document.getElementById('resultMessage').style.color = 'green';
                document.getElementById('contactForm').reset();
            } else {
                document.getElementById('resultMessage').innerHTML = 'Xabar yuborishda xatolik yuz berdi.';
                document.getElementById('resultMessage').style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Xatolik:', error);
            document.getElementById('resultMessage').innerHTML = 'Serverga ulanishda xatolik. Qayta urinib ko‘ring.';
            document.getElementById('resultMessage').style.color = 'red';
        });
    });
});
