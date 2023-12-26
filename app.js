function toggleMenu() {
  let menuMb = document.querySelector(".menuMb");
  menuMb.classList.toggle("toggle");
}
// nut back to top
function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// show nút back top
var lastScrollTop = 0;
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  var backToTopButton = document.querySelector(".back-to-top");
  var scrollTop = document.documentElement.scrollTop; // lấy vtri cuộn hiện tại
  if (scrollTop > 20 && scrollTop > lastScrollTop) {
    // Kiểm tra nếu vị trí của trang lớn hơn 20 pixel và trang đang cuộn hoặc đứng im
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
  // Cập nhật trạng thái cuộn trước đó
  lastScrollTop = scrollTop;
}
