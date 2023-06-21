	document.getElementById("registrationForm").addEventListener("submit", function (event) {
   		 event.preventDefault(); 
    // Ngăn chặn gửi form đi để xử lý dữ liệu bằng JavaScript trước

    // Kiểm tra điều kiện dữ liệu trước khi gửi đến servlet
    var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var dob = document.getElementById("dob").value;
	var gender = document.getElementById("gender").value;
	var email = document.getElementById("email").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Kiểm tra điều kiện cho từng trường dữ liệu
	var errorMessages = [];
	
	if (firstName.trim() === "") {
	    errorMessages.push("Họ không được để trống.");
	}
	
	if (lastName.trim() === "") {
	    errorMessages.push("Tên không được để trống.");
	}
	
	if (dob === "") {
	    errorMessages.push("Ngày sinh không được để trống.");
	}
	
	if (email.trim() === "" || !isValidEmail(email)) {
	    errorMessages.push("Địa chỉ email không hợp lệ.");
	}
	
	if (username.trim() === "" || username.length < 8) {
	    errorMessages.push("Tên tài khoản phải có ít nhất 8 ký tự.");
	}
	
	if (password.length < 8 || !isValidPassword(password)) {
	    errorMessages.push("Mật khẩu phải có ít nhất 8 ký tự, có ít nhất một ký tự đặc biệt, một ký tự chữ hoa và một ký tự số.");
	}
	
	// Hiển thị thông báo lỗi (nếu có)
	if (errorMessages.length > 0) {
	    var errorHTML = "<ul>";
	    for (var i = 0; i < errorMessages.length; i++) {
	        errorHTML += "<li>" + errorMessages[i] + "</li>";
	    }
	    errorHTML += "</ul>";
	    document.getElementById("errorMessages").innerHTML = errorHTML;
	} else {
	    document.getElementById("registrationForm").submit(); // Gửi form nếu không có lỗi
	}
	
	function isValidEmail(email) {
	    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	    return emailRegex.test(email);
	}
	
	function isValidPassword(password) {
	    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
	    return passwordRegex.test(password);
	}
	}
	
)