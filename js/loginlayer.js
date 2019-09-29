function wrapWindowByMask() {
  // 화면의 높이와 너비를 구한다.
  let maskHeight = $(document).height();
  let maskWidth = $(window).width();

  // 문서영역의 크기
  console.log( "document:"+ $(document).width() + "*" + $(document).height());
  // 브라우저에서 문서가 보여지는 영역의 크기
  console.log( "window:"+ $(window).width() + "*" + $(window).height());

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
  $('.layerpop').css("top","-400px");
  $('.layerpop').css("left","-100px");

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
  $('.layerpop_store').css("position", "absolute");
  // 영역 가운에데 레이어를 뛰우기 위해 위치 계산
  $('.layerpop_store').css("top","-400px");
  $('.layerpop_store').css("left","-300px");
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
