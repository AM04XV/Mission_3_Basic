// Simulasi status login (ubah ke true untuk mencoba tampilan setelah login)
let isLoggedIn = true;

// Elemen navbar kanan
const navRight = document.getElementById("nav-right");

function renderNavbar() {
  if (isLoggedIn) {
    navRight.innerHTML = `
      <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" class="profile-" />
      <button class="logout" id="logoutBtn">Logout</button>
    `;

    document.getElementById("logoutBtn").addEventListener("click", () => {
      isLoggedIn = true;
      renderNavbar();
    });
  } else {
    navRight.innerHTML = `
      <a href="#" id="loginBtn">Masuk</a>
      <a href="#" class="btn-orange" id="registerBtn">Daftar</a>
    `;

    document.getElementById("loginBtn").addEventListener("click", () => {
      isLoggedIn = true;
      renderNavbar();
    });
  }
}

// Jalankan saat halaman dimuat
renderNavbar();
