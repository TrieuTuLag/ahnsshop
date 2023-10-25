let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Khong cho người dùng ấn login ở đăng nhập khi chưa nhập email và mật khẩu
document.getElementById("login_success").addEventListener("click", function() {
  var email1 = document.getElementById("email1").value;
  var password1 = document.getElementById("password1").value;

  if(email1.trim() !== "" || password1.trim() !== ""){
      alert("Information has been updated"); 
      window.location.href = "ahns-shop.html"; 
  }
});

// KHong cho người dùng ấn Subrice ở footer khi chưa nhập email
document.getElementById("login_footer").addEventListener("click", function(){
  var email2 = document.getElementById("email2").value;
  if(email2.trim() !== "") alert("Information has been updated.");
});


var swiper = new Swiper(".product-slider", {
    // Tùy chọn này cho phép vòng lặp vô hạn trong trình chiếu, tức là sau khi bạn đạt tới sản phẩm cuối cùng, trình chiếu sẽ quay lại sản phẩm đầu tiên.
    loop:true,
    // Tùy chọn này xác định khoảng cách giữa các sản phẩm trong trình chiếu. Ở đây, khoảng cách giữa các sản phẩm là 20px.
    spaceBetween: 20,
    // Tùy chọn autoplay cho phép trình chiếu tự động trượt qua các sản phẩm. delay xác định thời gian chờ giữa các trượt tự động (đơn vị là mili giây),
    // ở đây là 10000ms (10 giây). 
    // disableOnInteraction xác định liệu việc tương tác của người dùng (ví dụ: kéo trượt) có dừng trình chiếu tự động hay không.
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    // Tùy chọn này giúp đảm bảo rằng trang hiển thị luôn căn giữa sản phẩm hiện tại trong trình chiếu.
    centeredSlides: true,
    // Đây là tùy chọn cho phép bạn xác định cách hiển thị trình chiếu ứng với kích thước màn hình khác nhau. 
    // Đối với màn hình có độ rộng dưới 835px, sẽ hiển thị 1 sản phẩm (slidesPerView: 1). 
    // Đối với màn hình có độ rộng từ 835px đến 1020px, sẽ hiển thị 2 sản phẩm (slidesPerView: 2). 
    // Đối với màn hình có độ rộng trên 1020px, sẽ hiển thị 3 sản phẩm (slidesPerView: 3). 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },  
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true, 
    spaceBetween: 20,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

//TRANG TAO TAI KHOAN
document.getElementById("submit").addEventListener("click", function() {
  var surname = document.getElementById("surname").value;
  var name = document.getElementById("name").value;
  var tendangnhap = document.getElementById("tendangnhap").value;
  var phone_email = document.getElementById("phone_email").value;
  var password = document.getElementById("password").value;
  var xacthuc = document.getElementById("xacthuc").value;
  
  if(surname.trim()!=="" || name.trim()!=="" || tendangnhap.trim()!=="" || phone_email.trim()!=="" || password.trim()!=="" || xacthuc.trim()!==""){
      alert("Information has been updated"); 
      window.location.href = "ahns-shop.html";
  }
});

// TRANG QUÊN MẬT KHẨU (SDT)
function validateForm() {
  var inputElement = document.getElementById("numberInput");
  var inputValue = inputElement.value;
  // Kiểm tra xem giá trị nhập vào có phải là số hay không
  if(isNaN(inputValue)){
      alert("Your phone number is invalid!");
      inputElement.value = ""; // Xóa giá trị không hợp lệ
      return false; // Ngăn chặn việc gửi biểu mẫu
  } 
  else{
      window.location.href = "ahns-shop.html";
  }
}


