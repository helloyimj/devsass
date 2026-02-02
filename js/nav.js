const headerAreaHtml = `
  <!-- 건너뛰기 링크 -->
  <div id="krds-skip-link">
    <a href="#breadcrumb">본문 바로가기</a>
    <!-- <a href="#gnb" class="skip_anchor" target="_self" title="페이지 내 이동">주메뉴 바로가기</a>
    <a href="#quick" class="skip_anchor" target="_self" title="페이지 내 이동">퀵메뉴 바로가기</a> -->

  </div>
  <!-- //건너뛰기 링크 -->

  <!-- 상단 배너영역 -->
  <div id="krds-masthead">
    <div class="toggle-wrap">
      <div class="toggle-head">
        <div class="inner">
          <span class="nuri-txt">
            이 누리집은 대한민국 공식 전자정부 누리집입니다.
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- //상단 배너영역 -->

  <!-- 헤더 영역 -->
    <header id="krds-header">
      <!-- 헤더 컨텐츠 영역  -->
      <div class="header-in">
        <!-- 헤더 상단 기타메뉴 -->
        <div class="header-container">
          <div class="inner">
            <div class="header-utility">
              <ul class="utility-list">
                <li>
                  <button type="button" class="krds-btn small text cloud">
                    클라우드전문지원센터 <i class="svg-icon ico-go"></i>
                  </button>
                </li>
                <li>
                  <button type="button" class="krds-btn small text">
                    누리집 안내지도
                  </button>
                </li>
                <li>
                  <!-- resize -->
                  <div class="krds-drop-wrap krds-resize" data-adjust="scale">
                    <button type="button" class="krds-btn small text drop-btn">화면크기 <i class="svg-icon ico-toggle"></i></button>
                    <div class="drop-menu">
                      <div class="drop-in">
                        <ul class="drop-list">
                          <li><button type="button" class="item-link sm" data-adjust-scale="sm">작게</button></li>
                          <li><button type="button" class="item-link md active" data-adjust-scale="md">보통</button></li>
                          <li><button type="button" class="item-link lg" data-adjust-scale="lg">조금 크게</button></li>
                          <li><button type="button" class="item-link xlg" data-adjust-scale="xlg">크게</button></li>
                          <li><button type="button" class="item-link xxlg" data-adjust-scale="xxlg">가장크게</button></li>
                        </ul>
                        <div class="drop-bottom">
                          <button type="button" class="krds-btn medium text" data-adjust-scale="md"><i
                              class="svg-icon ico-reset"></i> 초기화</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- //resize -->
                </li>
              </ul>
            </div>
            <div class="header-branding">
              <h2 class="logo">
                <a href="#">
                  <span class="sr-only">대한민국정부</span>
                </a>
              </h2>
              <div class="header-actions">
                <!-- 검색어 입력 폼 -->
                <div class="sch-form-wrap">
                  <div class="sch-input">
                    <input type="text" class="krds-input small" id="searchWrd-total" placeholder="검색어를 입력해주세요.">
                    <button type="button" class="krds-btn icon small ico-search" id="btn-search-total">
                      <span class="sr-only">검색</span>
                      <i class="svg-icon ico-sch"></i>
                    </button>
                  </div>
                </div>
                <!-- //검색어 입력 폼 -->
                <a href="#" class="btn-navi navi-row sch">통합검색</a>
                <a href="로그인.html" class="btn-navi navi-row login">로그인</a>
                <a href="회원가입 1단계 유형 선택.html" class="btn-navi navi-row join">회원가입</a>
                <div class="krds-drop-wrap my-drop">
                  <button type="button" class="btn-navi navi-row my drop-btn">나의 GOV</button>
                  <div class="drop-menu">
                    <div class="drop-in">
                      <div class="drop-top">
                        <p class="my-name">홍길동님</p>
                        <dl class="my-time">
                          <dt>로그아웃까지 남은 시간</dt>
                          <dd>
                            <span class="time"><i class="svg-icon ico-time"></i>12:00</span>
                            <button type="button" class="krds-btn small text h-auto open-modal"
                              data-target="modal_header_session">시간 연장</button>
                          </dd>
                        </dl>
                      </div>
                      <ul class="drop-list">
                        <li><a href="#" class="item-link">나의 GOV 홈</a></li>
                        <li><a href="#" class="item-link">나의 신청내역</a></li>
                        <li><a href="#" class="item-link">나의 생활정보</a></li>
                        <li><a href="#" class="item-link">나의 정보관리</a></li>
                      </ul>
                      <div class="drop-bottom">
                        <button type="button" class="krds-btn medium text open-modal"
                          data-target="modal_header_logout"><i class="svg-icon ico-logout"></i> 로그아웃</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-navi navi-row all" aria-controls="mobile-nav">전체메뉴</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //헤더 상단 기타메뉴 -->

        <!-- 메인메뉴 : 데스크탑 -->
        <nav class="krds-main-menu">
          <div class="inner">
            <ul class="gnb-menu" aria-label="메인 메뉴">
              <li>
                <button type="button" class="gnb-main-trigger active" data-trigger="gnb"
                  aria-controls="gnb-main-menu-intro" aria-expanded="false" aria-haspopup="true">소개</button>
                <!-- gnb-toggle-wrap -->
                <div class="gnb-toggle-wrap" id="gnb-main-menu-intro">
                  <!-- gnb-main-list -->
                  <div class="gnb-main-list">
                    <!-- gnb-sub-list -->
                    <div class="gnb-sub-list single-list">
                      <div class="gnb-sub-content">
                        <h2 class="sub-title"><span>소개</span></h2>
                        <ul>
                          <li><a href="#">민간 SaaS 연계공통기반이란?</a></li>
                          <li><a href="#">연계한 민간 SaaS</a></li>
                          <li><a href="#">통합관리포털 소개</a></li>
                          <li><a href="#">연계 서비스 이용 절차</a></li>
                          <li><a href="#">연계 서비스 이용 신청</a></li>
                        </ul>
                      </div>
                    </div>
                    <!-- //gnb-sub-list -->
                  </div>
                  <!-- //gnb-main-list -->
                </div>
                <!-- //gnb-toggle-wrap -->
              </li>

              <li>
                <button type="button" class="gnb-main-trigger" data-trigger="gnb" aria-controls="gnb-main-menu-service"
                  aria-expanded="false" aria-haspopup="true">서비스</button>
                <!-- gnb-toggle-wrap -->
                <div class="gnb-toggle-wrap" id="gnb-main-menu-service">
                  <!-- gnb-main-list -->
                  <div class="gnb-main-list">
                    <!-- gnb-sub-list -->
                    <div class="gnb-sub-list single-list">
                      <div class="gnb-sub-content">
                        <h2 class="sub-title"><span>서비스</span></h2>
                        <ul>
                          <li><a href="#">모바일공무원증</a></li>
                          <li><a href="#">정부디렉터리 (LDAP)</a></li>
                          <li><a href="#">행정표준코드</a></li>
                          <li><a href="#">행정전자서명(GPKI)</a></li>
                        </ul>
                      </div>
                    </div>
                    <!-- //gnb-sub-list -->
                  </div>
                  <!-- //gnb-main-list -->
                </div>
                <!-- //gnb-toggle-wrap -->
              </li>

              <li>
                <button type="button" class="gnb-main-trigger" data-trigger="gnb" aria-controls="gnb-main-menu-saas"
                  aria-expanded="false" aria-haspopup="true">
                  공공용 민간 SaaS</button>
                <!-- gnb-toggle-wrap -->
                <div class="gnb-toggle-wrap" id="gnb-main-menu-saas">
                  <!-- gnb-main-list -->
                  <div class="gnb-main-list">
                    <!-- gnb-sub-list -->
                    <div class="gnb-sub-list single-list">
                      <div class="gnb-sub-content">
                        <h2 class="sub-title"><span>공공용 민간 SaaS</span></h2>
                        <ul>
                          <li><a href="#">공공용 민간 SaaS</a></li>
                        </ul>
                      </div>
                    </div>
                    <!-- //gnb-sub-list -->
                  </div>
                  <!-- //gnb-main-list -->
                </div>
                <!-- //gnb-toggle-wrap -->
              </li>
              <li>
                <button type="button" class="gnb-main-trigger" data-trigger="gnb" aria-controls="gnb-main-menu-user"
                  aria-expanded="false" aria-haspopup="true">운영지원센터</button>
                <!-- gnb-toggle-wrap -->
                <div class="gnb-toggle-wrap" id="gnb-main-menu-user">
                  <!-- gnb-main-list -->
                  <div class="gnb-main-list">
                    <!-- gnb-sub-list -->
                    <div class="gnb-sub-list single-list">
                      <div class="gnb-sub-content">
                        <h2 class="sub-title"><span>운영지원센터</span></h2>
                        <ul>
                          <li><a href="#">공지사항</a></li>
                          <li><a href="#">자주묻는 질문</a></li>
                          <li><a href="#">자료실</a></li>
                          <li><a href="#">기술지원</a></li>
                        </ul>
                      </div>
                    </div>
                    <!-- //gnb-sub-list -->
                  </div>
                  <!-- //gnb-main-list -->
                </div>
                <!-- //gnb-toggle-wrap -->
              </li>
            </ul>
          </div>
        </nav>
        <!-- //메인메뉴 : 데스크탑 -->
      </div>
      <!-- //헤더 컨텐츠 영역  -->
      <!-- 메인메뉴 : 모바일 -->
      <nav id="mobile-nav" class="krds-main-menu-mobile" style="display: none;">
        <div class="gnb-wrap type-header-tab">
          <!-- gnb-header -->
          <div class="gnb-header">
            <!-- gnb-utils -->
            <div class="gnb-utils">
              <ul class="utility-list">
                <li>
                  <div class="krds-drop-wrap">
                    <button type="button" class="krds-btn small text drop-btn active" aria-expanded="false">
                      지원 <i class="svg-icon ico-toggle"></i>
                    </button>
                    <div class="drop-menu">
                      <!-- <div class="drop-menu" style="display: none;"> -->
                      <div class="drop-in">
                        <ul class="drop-list">
                          <!-- <li><a href="#" class="item-link">누리집 안내지도<span class="sr-only"></span></a></li> -->
                          <li><a href="#" class="item-link">누리집 안내지도</a></li>
                          <li><a href="#" class="item-link cloud" target="_blank"> 클라우드전문지원센터 <i
                                class="svg-icon ico-go"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //gnb-utils -->
            <!-- gnb-tab-nav -->
            <div class="gnb-tab-nav">
              <!-- 검색 -->
              <!-- <div class="sch-input">
                      <input type="text" class="krds-input" placeholder="찾고자 하는 메뉴명을 입력해 주세요"
                          title="찾고자 하는 메뉴명 입력">
                      <button type="button" class="krds-btn medium icon ico-search">
                          <span class="sr-only">검색</span>
                          <i class="svg-icon ico-sch"></i>
                      </button>
                  </div> -->
              <!-- //검색 -->
              <div class="menu-wrap">
                <ul role="tablist">
                  <li role="none">
                    <a href="#mGnb-anchor1" class="gnb-main-trigger active" role="tab" aria-selected="true"
                      aria-controls="mGnb-anchor1" id="tab-0">소개</a>
                  </li>
                  <li role="none">
                    <a href="#mGnb-anchor2" class="gnb-main-trigger" role="tab" aria-selected="false"
                      aria-controls="mGnb-anchor2" id="tab-1">서비스</a>
                  </li>
                  <li role="none">
                    <a href="#mGnb-anchor3" class="gnb-main-trigger" role="tab" aria-selected="false"
                      aria-controls="mGnb-anchor3" id="tab-2">공공용 민간 SaaS</a>
                  </li>
                  <li role="none">
                    <a href="#mGnb-anchor4" class="gnb-main-trigger" role="tab" aria-selected="false"
                      aria-controls="mGnb-anchor4" id="tab-3">운영지원센터</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- //gnb-tab-nav -->
          </div>
          <!-- //gnb-header -->

          <!-- gnb-body -->
          <div class="gnb-body">
            <!-- gnb-menu -->
            <div class="gnb-menu">
              <div class="submenu-wrap">
                <div class="gnb-sub-list" id="mGnb-anchor1" role="tabpanel" aria-labelledby="tab-1">
                  <h2 class="sub-title">소개</h2>
                  <ul>
                    <li><a href="#" class="gnb-sub-trigger">민간 SaaS 연계공통기반이란?</a></li>
                    <li><a href="#" class="gnb-sub-trigger">연계한 민간 SaaS</a></li>
                    <li><a href="#" class="gnb-sub-trigger">통합관리포털 소개</a></li>
                    <li><a href="#" class="gnb-sub-trigger">연계 서비스 이용 절차</a></li>
                    <li><a href="#" class="gnb-sub-trigger">연계 서비스 이용 신청</a></li>
                  </ul>
                </div>
                <div class="gnb-sub-list" id="mGnb-anchor2" role="tabpanel" aria-labelledby="tab-2">
                  <h2 class="sub-title">서비스</h2>
                  <ul>
                    <li><a href="#" class="gnb-sub-trigger">모바일공무원증</a></li>
                    <li><a href="#" class="gnb-sub-trigger">정부디렉터리 (LDAP)</a></li>
                    <li><a href="#" class="gnb-sub-trigger">행정표준코드</a></li>
                    <li><a href="#" class="gnb-sub-trigger">행정전자서명(GPKI)</a></li>
                  </ul>
                </div>
                <div class="gnb-sub-list" id="mGnb-anchor3" role="tabpanel" aria-labelledby="tab-3">
                  <h2 class="sub-title">공공용 민간 SaaS</h2>
                  <ul>
                    <li><a href="#" class="gnb-sub-trigger">공공용 민간 SaaS</a></li>
                  </ul>
                </div>
                <div class="gnb-sub-list" id="mGnb-anchor4" role="tabpanel" aria-labelledby="tab-4">
                  <h2 class="sub-title">운영지원센터</h2>
                  <ul>
                    <li><a href="#" class="gnb-sub-trigger">공지사항</a></li>
                    <li><a href="#" class="gnb-sub-trigger">자주묻는 질문</a></li>
                    <li><a href="#" class="gnb-sub-trigger">자료실</a></li>
                    <li><a href="#" class="gnb-sub-trigger">기술지원</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- //gnb-menu -->
          </div>
          <!-- //gnb-body -->
          <!-- gnb-close -->
          <button type="button" class="krds-btn medium icon" id="close-nav">
            <span class="sr-only">전체메뉴 닫기</span>
            <i class="svg-icon ico-popup-close"></i>
          </button>
          <!-- //gnb-close -->
        </div>
      </nav>
      <!-- //메인메뉴 : 모바일 -->
    </header>
  <!-- //헤더 영역 -->
`;

const headerModalHtml = `
  <!-- modal-wrap -->
  <div class="modal-wrap">
    <!-- 헤더 modal -->

    <!-- modal 로그아웃 -->
    <section id="modal_header_logout" class="krds-modal fade" role="dialog" aria-labelledby="tit_modal_header_logout">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h2 id="tit_modal_header_logout" class="modal-title">로그아웃</h2>
          </div>
          <div class="modal-conts">
            <div class="conts-area">통합관리포털에서 로그아웃 하시겠습니까?</div>
          </div>
          <div class="modal-btn btn-wrap">
            <button type="button" class="krds-btn medium tertiary close-modal">아니요</button>
            <button type="button" class="krds-btn medium primary close-modal">로그아웃</button>
          </div>
          <button type="button" class="krds-btn medium icon btn-close close-modal">
            <span class="sr-only">닫기</span>
            <i class="svg-icon ico-popup-close"></i>
          </button>
        </div>
      </div>
      <div class="modal-back"></div>
    </section>
    <!-- //modal -->

    <!-- modal 시간연장 -->
    <section id="modal_header_session" class="krds-modal fade" role="dialog" aria-labelledby="tit_modal_header_session">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h2 id="tit_modal_header_session" class="modal-title">자동 로그아웃 안내</h2>
          </div>
          <div class="modal-conts">
            <div class="conts-area">
              <p>로그아웃까지 남은 시간:<span class="text_primary">90</span>초</p>
              <p>
                10분 동안 화면의 움직임이 감지되지 않아 <br>
                잠시 후 자동으로 로그아웃될 예정입니다. <br>
                로그인 시간을 연장하시겠습니까?
              </p>
            </div>
          </div>
          <div class="modal-btn btn-wrap">
            <button type="button" class="krds-btn medium tertiary close-modal">로그아웃</button>
            <button type="button" class="krds-btn medium primary close-modal">로그인 연장</button>
          </div>
          <button type="button" class="krds-btn medium icon btn-close close-modal">
            <span class="sr-only">닫기</span>
            <i class="svg-icon ico-popup-close"></i>
          </button>
        </div>
      </div>
      <div class="modal-back"></div>
    </section>
    <!-- //modal -->

    <!-- //헤더 modal -->
  </div>
  <!-- //modal-wrap -->
`;

document.addEventListener('DOMContentLoaded', function () {
  const wrapEl = document.getElementById('wrapper');
  if (!wrapEl) return;

  wrapEl.insertAdjacentHTML('afterbegin', headerAreaHtml);
    // wrap 닫힌 직후에 헤더 모달 삽입
  wrapEl.insertAdjacentHTML('afterend', headerModalHtml);

});

// footer
const footerAreaHtml = `
    <!-- 푸터 영역 -->
    <footer id="krds-footer" class="footer">
      <!-- foot-quick -->
      <div class="foot-quick">
        <div class="inner">
          <!-- <button type="button" class="link open-modal" title="관련기관 레이어" data-target="popFootLink">관련기관</button> -->
          <div class="footer_select_family">
            <button type="button" class="rel_link_sel" title="관련기관 목록 열기" data-target="footLinkSelect">관련기관</button>
            <ul id="footLinkSelect">
              <li><a href="https://www.mois.go.kr/frt/a01/frtMain.do" target="_blank" title="새 창 열림- 행정안전부">행정안전부</a>
              </li>
              <li><a href="https://www.nia.or.kr/site/nia_kor/main.do" target="_blank"
                  title="새 창 열림- 한국지능정보사회진흥원">한국지능정보사회진흥원</a></li>
              <li><a href="https://www.?" target="_blank" title="새 창 열림- 클라우드전문지원센터">클라우드전문지원센터</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- //foot-quick -->
      <!-- inner -->
      <div class="inner">
        <div class="inline-flex">
          <div class="f-logo">
            <span class="sr-only">행정안전부</span>
          </div>
          <div class="f-logo nia">
            <span class="sr-only">NIA한국지능정보사회진흥원</span>
          </div>
        </div>
        <div class="f-cnt">
          <div class="f-info">
            <p class="info-addr">(30112) 세종특별자치시 도움6로 42</p>
            <ul class="info-cs">
              <li>
                <strong class="key-info">문의 <span>02-6958-5614</span></strong>
                <span class="more-info">(월~금 09:00~18:00 / 토,일 공휴일 휴무)</span>
              </li>
          </div>
        </div>
        <div class="f-btm">
          <div class="f-btm-text">
            <div class="f-menu">
              <a href="#" class="krds-btn small text">포털 이용약관</a>
              <a href="#" class="krds-btn small text text_color_secondary text_bold">개인정보처리방침</a>
            </div>
            <p class="f-copy">© Ministry of the Interior and Safety. All rights reserved.</p>
          </div>
        </div>
      </div>
      <!-- //inner -->
    </footer>
    <!-- //푸터 영역 -->
`;

// document.addEventListener('DOMContentLoaded', function () {
//   const containerEl = document.getElementById('container');
//   if (!containerEl) return;

//   containerEl.insertAdjacentHTML('afterend', footerAreaHtml);
//   initFooterFamilySite();
// });

// 기존 footer 삭제 전 까지 유지
document.addEventListener('DOMContentLoaded', function () {
  // 1. 기존 footer 있으면 제거
  const oldFooter = document.getElementById('footer');
  if (oldFooter) {
    oldFooter.remove();
  }

  const containerEl = document.getElementById('container');
  const wrapperEl = document.getElementById('wrapper');

  // 2. footer 삽입
  if (containerEl) {
    containerEl.insertAdjacentHTML('afterend', footerAreaHtml);
  } else if (wrapperEl) {
    wrapperEl.insertAdjacentHTML('beforeend', footerAreaHtml);
  } else {
    document.body.insertAdjacentHTML('beforeend', footerAreaHtml);
  }

  // 3. footer 뒤에 quick 버튼 삽입
  const footerEl = document.querySelector('footer.footer');
  if (footerEl) {
    footerEl.insertAdjacentHTML('afterend', quickBtn);
  }

  // 4. footer 관련 초기화
  initFooterFamilySite();
});

function initFooterFamilySite() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  const familyBox = footer.querySelector('.footer_select_family');
  if (!familyBox) return;

  const list = familyBox.querySelector('ul');
  const button = familyBox.querySelector('.rel_link_sel');

  // 초기 상태
  list.style.display = 'none';
  list.style.overflow = 'hidden';
  list.style.transition = 'max-height 0.2s ease';

  familyBox.addEventListener('click', function () {
    const isOpen = familyBox.classList.contains('toggle');

    familyBox.classList.toggle('toggle');

    if (!isOpen) {
      list.style.display = 'block';
      list.style.maxHeight = list.scrollHeight + 'px';
      button.setAttribute('title', '관련기관 누리집 목록 열림');
    } else {
      list.style.maxHeight = '0';
      button.setAttribute('title', '관련기관 누리집 목록 닫힘');
    }
  });
}


let quickBtn = `
  <!-- 최상단 이동 -->
  <div class="wrap_side_btn" id="quick">
    <a href="사용자 지원_기술지원.html"
       aria-label="기술지원 바로가기"
       class="btn_side_sup btn_side_sup01">
      <p>기술지원</p>
    </a>

    <a href="javascript:;"
       aria-label="챗봇 문의, 검색 바로가기"
       class="btn_side_sup btn_side_sup02">
      <p>챗봇 문의 · 검색</p>
    </a>

    <a href="#wrapper"
       aria-label="최상단으로 이동"
       class="btn_side_sup btn_side_sup03 btn_top">
      <span class="sr_only">최상단으로 이동</span>
    </a>
  </div>
`;








// let footer = "";
// footer +=      '<div class="area_sites">';
// footer +=      '<div class="inner">';
// footer +=          '<div class="wrap_select_family">';
// footer +=              '<a href="javascript:;" class="rel_link_sel" title="관련기관 목록 열기">관련기관</a>';
// footer +=              '<ul>';
// footer +=                  '<li><a href="https://www.gov.kr/portal/main/nologin" target="_blank" title="새 창 열림- 정부24">정부24</a></li>';
// footer +=                  '<li><a href="https://www.ips.go.kr/pot/forwardMain.do" target="_blank" title="새 창 열림- 국민비서">국민비서</a></li>';
// footer +=                  '<li><a href="https://www.nia.or.kr/site/nia_kor/main.do" target="_blank" title="새 창 열림- 한국지능정보사회진흥원">한국지능정보사회진흥원</a></li>';
// footer +=                  '<li><a href="https://www.dpg.go.kr/DPG/main/index.do" target="_blank" title="새 창 열림- 디지털플랫폼정부위원회">디지털플랫폼정부위원회</a></li>';
// footer +=                  '<li><a href="https://www.mois.go.kr/frt/a01/frtMain.do" target="_blank" title="새 창 열림- 행정안전부">행정안전부</a></li>';
// footer +=              '</ul>';
// footer +=          '</div>';
// footer +=      '</div>';
// footer +=      '</div>';
// footer +=      '<div class="area_info">';
// footer +=      '<div class="inner">';
// footer +=          '<div class="wrap_logo">';
// footer +=              '<img src="../img/logo/Ministry_of_the_Interior_and_Safety_of_the_Republic_of_Korea_Logo_(horizontal).png" alt="행정안전부">';
// footer +=              '<img src="../img/logo/logo_nia_wt.svg" alt="한국지능정보사회진흥원">';
// footer +=          '</div>';
// footer +=          '<div class="wrap_address">';
// footer +=              '<ul class="list_address">';
// footer +=                  '<li class="list_address_item">(30112) 세종특별자치시 도움6로 42</li>';
// footer +=                  '<li class="list_address_item">문의 070-7893-5158 (월~금 09:00~17:00 / 토,일 공휴일 휴무)</li>';
// footer +=              '</ul>';
// footer +=          '</div>';
// footer +=      '</div>';
// footer +=      '</div>';
// footer +=      '<div class="area_links">';
// footer +=      '<div class="inner">';
// footer +=          '<div class="wrap_links">';
// footer +=              '<a href="누리집 이용 안내_포털이용약관.html" class="rel_link" target="_self" title="포털 이용약관 페이지로 이동">포털 이용약관</a>';
// footer +=              '<a href="누리집 이용 안내_개인정보처리방침.html" class="rel_link color_blue_light" target="_self" title="개인정보처리방침 페이지로 이동">개인정보처리방침</a>';
// footer +=              '<a href="javascript:;" class="rel_link" target="_self" title="웹 접근성 품질인증 마크 획득 페이지로 이동">웹 접근성 품질인증 마크 획득</a>';
// footer +=          '</div>';
// footer +=          '<div class="wrap_copyright">';
// footer +=              '<p>Copyright@ 한국지능정보사회진흥원 All Rights Reserved.</p>';
// footer +=          '</div>';
// footer +=      '</div>';
// footer +=      '</div>';



// // footer

// document.addEventListener("DOMContentLoaded", () => {
//   const familySelect = document.querySelector(".footer .footer_select_family");
//   if (!familySelect) return;

//   const list = familySelect.querySelector("ul");
//   const label = familySelect.querySelector(".rel_link_sel");

//   familySelect.addEventListener("click", () => {
//     familySelect.classList.toggle("toggle");

//     const isOpen = familySelect.classList.contains("toggle");

//     // slideToggle 대체
//     if (isOpen) {
//       list.style.maxHeight = list.scrollHeight + "px";
//     } else {
//       list.style.maxHeight = null;
//     }

//     // title 변경
//     if (label) {
//       label.setAttribute(
//         "title",
//         isOpen
//           ? "관련기관 누리집 목록 열림"
//           : "관련기관 누리집 목록 닫힘"
//       );
//     }
//   });
// });

