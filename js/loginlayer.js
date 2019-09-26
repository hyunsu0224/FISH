// 시계 함수

const clockTarget = document.getElementById('clock');


function clock() {
  const date = new Date();

  // date Object를 받아오고
  const month = date.getMonth();

  // 달을 받아옵니다
  const clockDate = date.getDate();
  // 몇일인지 받아옵니다
  const day = date.getDay();

  // 요일을 받아옵니다.
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  // 요일은 숫자형태로 리턴되기때문에 미리 배열을 만듭니다.
  const hours = date.getHours();

  // 시간을 받아오고
  const minutes = date.getMinutes();

  // 분도 받아옵니다.
  const seconds = date.getSeconds();

  // 초까지 받아온후
  clockTarget.innerText = `${month + 1}월 ${clockDate}일 ${week[day]}요일 `

    + `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  // 월은 0부터 1월이기때문에 +1일을 해주고

  // 시간 분 초는 한자리수이면 시계가 어색해보일까봐 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 했습니다.
}


function init() {
  clock();

  // 최초에 함수를 한번 실행시켜주고
  setInterval(clock, 1000);

  // setInterval이라는 함수로 매초마다 실행을 해줍니다.

  // setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받습니다. 1000 = 1초
}

function wrapWindowByMask() {
  // 화면의 높이와 너비를 구한다.
  let maskHeight = $(document).height();
  let maskWidth = $(window).width();

  // 문서영역의 크기
  console.log( "document 사이즈:"+ $(document).width() + "*" + $(document).height());
  // 브라우저에서 문서가 보여지는 영역의 크기
  console.log( "window 사이즈:"+ $(window).width() + "*" + $(window).height());

  // 마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
  $('#mask').css({
    'width' : maskWidth,
    'height' : maskHeight
  });

  // 애니메이션 효과
  // $('#mask').fadeIn(1000);
  $('#mask').fadeTo("slow", 0.5);
}

function popupOpen() {
  $('.layerpop').css("position", "absolute");
  // 영역 가운에데 레이어를 뛰우기 위해 위치 계산
  $('.layerpop').css("top",(($(window).height() - $('.layerpop').outerHeight()) / 2) + $(window).scrollTop());
  $('.layerpop').css("left",(($(window).width() - $('.layerpop').outerWidth()) / 2) + $(window).scrollLeft());
  $('.layerpop').draggable();

  $('#layerbox').show();
}

function popupClose() {
  $('#layerbox').hide();
  $('#mask').hide();
}

function goDetail() {

  /* 팝업 오픈전 별도의 작업이 있을경우 구현*/

  popupOpen(); // 레이어 팝업창 오픈
  wrapWindowByMask(); // 화면 마스크 효과
}

function popupOpenStore() {
  // 상점 메뉴 레이어 팝업 오픈 함수
  $('.layerpop_store').css("position", "absolute");
  // 영역 가운에데 레이어를 뛰우기 위해 위치 계산
  $('.layerpop_store').css("top",(($(window).height() - $('.layerpop_store').outerHeight()) / 2) + $(window).scrollTop());
  $('.layerpop_store').css("left",(($(window).width() - $('.layerpop_store').outerWidth()) / 2) + $(window).scrollLeft());
  $('.layerpop_store').draggable();
  $('#layerbox_store').show();
}

function popupCloseStore() {
    // 상점 메뉴 레이어 팝업 닫는 함수
  $('#layerbox_store').hide();
  $('#mask').hide();
}

function goDetailStore() {

  // 상점 레이어 팝업 관련 함수 실행 함수
  /* 팝업 오픈전 별도의 작업이 있을경우 구현*/

  popupOpenStore(); // 레이어 팝업창 오픈
  wrapWindowByMask(); // 화면 마스크 효과
}

init();
