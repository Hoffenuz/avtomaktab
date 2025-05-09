document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const ism = document.getElementById('ism').value;
    const yosh = document.getElementById('yosh').value;
    const guruh = document.getElementById('guruh').value;
    const oqituvchi_id = document.getElementById('oqituvchi_id').value;

    fetch('https://avftom.onrender.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ism: ism,
            yosh: yosh,
            guruh: guruh,
            oqituvchi_id: oqituvchi_id
        })
    })
    .then(response => response.json())
    .then(data => {
        const resultMessage = document.getElementById('resultMessage');
        resultMessage.classList.remove('alert-danger');
        resultMessage.classList.add('alert-success');
        resultMessage.textContent = data.message || 'Muvaffaqiyatli yuborildi!';
        resultMessage.style.display = 'block';
        setTimeout(() => {
            resultMessage.style.display = 'none';
        }, 3000);
    })
    .catch(error => {
        const resultMessage = document.getElementById('resultMessage');
        resultMessage.classList.remove('alert-success');
        resultMessage.classList.add('alert-danger');
        resultMessage.textContent = 'Xatolik yuz berdi. Qayta urinib ko‘ring.';
        resultMessage.style.display = 'block';
        setTimeout(() => {
            resultMessage.style.display = 'none';
        }, 3000);
        console.error('Xatolik:', error);
    });
});
