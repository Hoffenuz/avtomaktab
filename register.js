document.getElementById("testForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const ism = document.getElementById("ism").value;
    const yosh = parseInt(document.getElementById("yosh").value);
    const guruh = document.getElementById("guruh").value;
    const oqituvchi_id = parseInt(document.getElementById("oqituvchi_id").value);

    const response = await fetch("https://fbpaezxcpykwdfowypqw.supabase.co/rest/v1/project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicGFlenhjcHlrd2Rmb3d5cHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTY0NTYsImV4cCI6MjA2MzY3MjQ1Nn0.aFeFK0jvaDoQbPyA2a3qFQu0KFEp4hGPU39n6z8Hhsk",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicGFlenhjcHlrd2Rmb3d5cHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTY0NTYsImV4cCI6MjA2MzY3MjQ1Nn0.aFeFK0jvaDoQbPyA2a3qFQu0KFEp4hGPU39n6z8Hhsk",
            "Prefer": "return=representation"
        },
        body: JSON.stringify({
            ism,
            yosh,
            guruh,
            oqituvchi_id
        })
    });

    const result = document.getElementById("result");

    if (response.ok) {
        const data = await response.json();
        result.innerHTML = `<div class="alert alert-success">Ma'lumot muvaffaqiyatli yuborildi</div>`;
    } else {
        const error = await response.json();
        result.innerHTML = `<div class="alert alert-danger">Xatolik: <pre>${JSON.stringify(error, null, 2)}</pre></div>`;
    }
});
