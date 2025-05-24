
const SUPABASE_URL = 'https://fbpaezxcpykwdfowypqw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // qisqartirilgan, to'liq qo'ying
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("registrationForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const ism = document.getElementById("ism").value.trim();
    const yosh = parseInt(document.getElementById("yosh").value);
    const guruh = document.getElementById("guruh").value.trim();
    const oqituvchi_id = parseInt(document.getElementById("oqituvchi_id").value);

    const { data, error } = await supabase
        .from('project')
        .insert([{ ism, yosh, guruh, oqituvchi_id }]);

    const resultMessage = document.getElementById("resultMessage");

    if (error) {
        console.error("Xatolik:", error);
        resultMessage.style.backgroundColor = "#dc3545"; // qizil
        resultMessage.textContent = "Xatolik yuz berdi: " + error.message;
    } else {
        resultMessage.style.backgroundColor = "#28a745"; // yashil
        resultMessage.textContent = "Muvaffaqiyatli ro'yxatdan o'tdingiz!";
        document.getElementById("registrationForm").reset();
    }

    resultMessage.style.display = "block";
    resultMessage.style.transform = "translateX(-50%) translateY(0)";
    setTimeout(() => {
        resultMessage.style.transform = "translateX(-50%) translateY(-100%)";
    }, 4000);
});

