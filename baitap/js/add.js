
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Xác thực tên không trống
    if (name.trim() === '') {
        document.getElementById('errorMessage').innerText = 'Vui lòng nhập tên.';
        document.getElementById('successMessage').innerText = '';
        return;
    }

    // Xác thực email không trống và có định dạng hợp lệ
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailRegex.test(email)) {
        document.getElementById('errorMessage').innerText = 'Vui lòng nhập email hợp lệ.';
        document.getElementById('successMessage').innerText = '';
        return;
    }

    // Xác thực tin nhắn không trống
    if (message.trim() === '') {
        document.getElementById('errorMessage').innerText = 'Vui lòng nhập tin nhắn.';
        document.getElementById('successMessage').innerText = '';
        return;
    }

    // Nếu tất cả đều hợp lệ, hiển thị thông báo thành công
    document.getElementById('successMessage').innerText = 'Đã gửi thành công!';
    document.getElementById('errorMessage').innerText = '';
}
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
