
function backToTop() {
    document.body.scrollTop = 0; // Cho Safari
    document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
}

// Hiển thị hoặc ẩn nút "Back to Top" dựa trên vị trí cuộn
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
