document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const ism = this.querySelector('[name="ism"]').value;
        const email = this.querySelector('[name="email"]').value;
        const xabar = this.querySelector('[name="xabar"]').value;

        const data = { ism, email, xabar };

        fetch('https://fbpaezxcpykwdfowypqw.supabase.co/rest/v1/aloqa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicGFlenhjcHlrd2Rmb3d5cHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTY0NTYsImV4cCI6MjA2MzY3MjQ1Nn0.aFeFK0jvaDoQbPyA2a3qFQu0KFEp4hGPU39n6z8Hhsk',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicGFlenhjcHlrd2Rmb3d5cHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTY0NTYsImV4cCI6MjA2MzY3MjQ1Nn0.aFeFK0jvaDoQbPyA2a3qFQu0KFEp4hGPU39n6z8Hhsk',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('resultMessage').textContent = 'Xabaringiz muvaffaqiyatli yuborildi!';
                document.getElementById('resultMessage').style.color = 'green';
                document.getElementById('contactForm').reset();
            } else {
                return response.json().then(data => {
                    throw new Error(data.message || 'Xatolik yuz berdi.');
                });
            }
        })
        .catch(error => {
            console.error('Xatolik:', error);
            document.getElementById('resultMessage').textContent = 'Xatolik yuz berdi: ' + error.message;
            document.getElementById('resultMessage').style.color = 'red';
        });
    });
});
