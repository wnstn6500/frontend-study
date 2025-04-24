// ScrollMagic 사용
const spyEls = document.querySelectorAll('.scroll-spy');
console.log(spyEls);

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {
  //메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!) -라이브러리에서 지정한 문법으로 깊게 이해x
});

// 연도
console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();

// 모바일용 버튼
const btnHamburger = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('header nav');
const menuItems = document.querySelectorAll('header nav ul li a');

btnHamburger.addEventListener('click', function () {
  
  navEl.classList.toggle('active');
});

menuItems.forEach(function (menu , index) {
  menu.addEventListener('click',function () {
    navEl.classList.remove('active');
})
});
