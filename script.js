const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;
        document.querySelectorAll(".menu-item").forEach(item => {
            item.classList.toggle("hidden", filter !== "all" && item.dataset.category !== filter);
        });
    });
});

document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("click", () => {
        toast.textContent = `تم اختيار "${button.dataset.item}" — أضف وسيلة الطلب الخاصة بالمطعم لربط الزر بالطلب.`;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3500);
    });
});
