document.addEventListener('DOMContentLoaded', function () {
    // === MOBIL MENYU FUNKSIYASI ===
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && closeBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // === ALOQA FORMASI YUBORISH FUNKSIYASI ===
    const form = document.getElementById('contactForm');
    const resultMessage = document.getElementById('resultMessage');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const data = {
                ism: document.getElementById('ism').value,
                familiya: document.getElementById('familiya').value,
                email: document.getElementById('email').value,
                telefon: document.getElementById('telefon').value,
                xabar: document.getElementById('xabar').value
            };

            fetch('https://fbpaezxcpykwdfowypqw.supabase.co/rest/v1/aloqa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicGFlenhjcHlrd2Rmb3d5cHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NjI5NjYsImV4cCI6MjAzMDAyODk2Nn0.-JXubBIMLhxC2zDKZRC5snMfZJysWyTfTGp2aqOxzhY',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicGFlenhjcHlrd2Rmb3d5cHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4NjI5NjYsImV4cCI6MjAzMDAyODk2Nn0.-JXubBIMLhxC2zDKZRC5snMfZJysWyTfTGp2aqOxzhY'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok || response.status === 201) {
                    resultMessage.textContent = 'Xabaringiz muvaffaqiyatli yuborildi!';
                    resultMessage.style.color = 'green';
                    form.reset();
                } else {
                    return response.json().then(data => {
                        throw new Error(data.message || 'Xatolik yuz berdi.');
                    });
                }
            })
            .catch(error => {
                console.error('Xatolik:', error);
                resultMessage.textContent = 'Xatolik yuz berdi: ' + error.message;
                resultMessage.style.color = 'red';
            });
        });
    }
});
