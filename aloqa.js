document.addEventListener('DOMContentLoaded', () => {
    // === MOBIL MENYU ===
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

    // === FORMA YUBORISH ===
    const form = document.getElementById('contactForm');
    const resultMessage = document.getElementById('resultMessage');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const ism = document.getElementById('ism')?.value.trim();
            const familiya = document.getElementById('familiya')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const telefon = document.getElementById('telefon')?.value.trim();
            const xabar = document.getElementById('xabar')?.value.trim();

            if (!ism || !email || !xabar) {
                resultMessage.textContent = 'Iltimos, kerakli maydonlarni to‘ldiring.';
                resultMessage.style.color = 'red';
                return;
            }

            const data = { ism, familiya, email, telefon, xabar };

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
                    resultMessage.textContent = 'Xabaringiz yuborildi!';
                    resultMessage.style.color = 'green';
                    form.reset();
                } else {
                    throw new Error('Xatolik yuz berdi. Qayta urinib ko‘ring.');
                }
            })
            .catch(error => {
                resultMessage.textContent = 'Xatolik: ' + error.message;
                resultMessage.style.color = 'red';
            });
        });
    }
});
