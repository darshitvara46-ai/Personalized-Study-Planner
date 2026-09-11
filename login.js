const supabaseUrl = "https://mitobngigufknrijzhxq.supabase.co";
const supabaseKey = "sb_publishable_qxAqMx5EMNIAoNUzyNm_UQ_JXX3Gu6E";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');

if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password'
            ? 'text'
            : 'password';

        passwordInput.setAttribute('type', type);
        togglePasswordBtn.classList.toggle('visible');
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailValue = document.getElementById('email').value.trim();
        const passwordValue = document.getElementById('password').value;

        console.log("Attempting login for:", emailValue);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: emailValue,
            password: passwordValue
        });

        if (error) {
            console.error("Login Error:", error.message);
            alert("Login failed: " + error.message);
        } else {
            console.log("Login Successful:", data);
            alert("Welcome back!");
            window.location.href = "index.html";
        }
    });
}