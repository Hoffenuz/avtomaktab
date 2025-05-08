document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Forma avtomatik yuborilishini to'xtatamiz

    // Forma ma'lumotlarini olish
    let ism = document.getElementById('ism').value;
    let yosh = document.getElementById('yosh').value;
    let guruh = document.getElementById('guruh').value;
    let oqituvchi_id = document.getElementById('oqituvchi_id').value;

    // Forma ma'lumotlarini serverga yuborish uchun FormData obyekti yaratamiz
    let formData = new FormData();
    formData.append('ism', ism);
    formData.append('yosh', yosh);
    formData.append('guruh', guruh);
    formData.append('oqituvchi_id', oqituvchi_id);

    // Ajax bilan serverga yuborish
    fetch('process_registration.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Natijani ko'rsatish
        let resultMessage = document.getElementById('resultMessage');
        resultMessage.style.display = 'block'; // Xabarni ko'rsatish
        resultMessage.style.backgroundColor = '#28a745'; // Yashil rang
        resultMessage.style.color = 'white'; // Oq matn
        resultMessage.textContent = data; // Xabarni serverdan olgan natijaga o'zgartirish
        resultMessage.style.transform = 'translateX(-50%) translateY(-100%)'; // Xabar yuqoriga tushib chiqadi

        // 5 sekunddan keyin xabarni yashirish
        setTimeout(() => {
            resultMessage.style.display = 'none';
            resultMessage.style.transform = 'translateX(-50%) translateY(0)';
        }, 5000);
    })
    .catch(error => {
        // Xatolik yuz berishi
        let resultMessage = document.getElementById('resultMessage');
        resultMessage.style.display = 'block';
        resultMessage.style.backgroundColor = '#dc3545'; // Qizil rang
        resultMessage.style.color = 'white';
        resultMessage.textContent = 'Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.';
    });
});
