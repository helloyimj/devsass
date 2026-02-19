/************************************* 개별 서비스 카드 *************************************/
/* '자세히 보기'는 각 서비스별 공공용 민간 SaaS 상세 보기 페이지로 연결 */

/* 카드 공통 컴포넌트 */
// 상단 뱃지, 로고 사진, 링크
function createCardHTML(data) {
  return `
<div class="in slide_case_item">
  <div class="card-top">
    <div class="wrap_img">
      <img src="${data.logo}" alt="${data.logoAlt}" class="viewer"/>
      <span class="saas-badge bg-light-primary">${data.badge}</span>
    </div>
  </div>

  <div class="card-body">
    <div class="wrap_title">
      <a href="${data.link || '#'}" class="c-text" aria-label="상세 페이지로 이동하기">
        <p class="c-tit"><span class="span">${data.title}</span></p>
      </a>
      <p class="c-company">${data.company}</p>
    </div>

    <div class="box_tooltip">

      ${Array.isArray(data.tooltips)
      ? data.tooltips.map((t, i) => createTooltipHTML(t, i)).join("")
    : ""}
      
    </div> 
  </div>
</div>`;
}

// 연계, 제공기능, 이용기관
function createTooltipHTML(t, index) {
  const tooltipId = `tooltip-${t.id || index}`;

  return `
<div class="wrap-tooltip">
  <div class="krds-contextual-help top right">
    <div class="tooltip-txt">
      <strong class="key">${t.key}</strong>

      <div class="value-wrap">
        <span class="value">${t.full}</span>

        <div class="tooltip-action">
          <button type="button"
                  class="krds-btn icon tooltip-btn tooltip-more"
                  aria-expanded="false"
                  aria-controls="${tooltipId}">
            <span class="sr-only">${t.sr}</span>
            <i class="svg-icon ico-plus" aria-hidden="true"></i>
          </button>

          <div class="tooltip-popover"
              id="${tooltipId}"
              role="tooltip">
            <h4 class="tooltip-title">${t.key}</h4>
            <div class="tooltip-contents">
              <p>${t.full}</p>
            </div>
            <button type="button"
                    class="krds-btn xsmall icon tooltip-close">
              <span class="sr-only">닫기</span>
              <i class="svg-icon ico-modal-close" aria-hidden="true"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>`;
}

/* $(document).ready(function () {
  $(".case_card").each(function () {
    const $card = $(this);

    const key = Object.keys(CARD_DATA).find(k =>
      $card.hasClass(k)
    );
    if (!key) return;

    const html = createCardHTML(CARD_DATA[key]);
    $card.html(html);
  });

  // 카드 DOM 생성 후 KRDS 초기화
  window.krds_contextualHelp?.init?.();
});
 */


/* =========================
   초기화
========================= */
$(document).ready(function () {
  $(".case_card").each(function () {
    const $card = $(this);
    const key = Object.keys(CARD_DATA).find(k => $card.hasClass(k));
    if (!key) return;

    $card.html(createCardHTML(CARD_DATA[key]));
  });

  // 말줄임 + 버튼 표시 판단
  updateTooltipEllipsis();

  // KRDS 툴팁 초기화
  window.krds_contextualHelp?.init?.();
});


/* 카드 데이터 */

const CARD_DATA = {

 //공공용 계절근로자 관리 플랫폼
  card_kollabo: {
    logo: "../img/saas_img/0_common/logo/logo_pr_kollabo.svg",
    logoAlt: "콜라보 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000045",
    badge: "문서 관리",
    title: "공공용 계절근로자 관리 플랫폼",
    company: "(주)인조이웍스",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증, GPKI",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "근로자 관리, 근로자 평가관리, 전자서명",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "강원특별자치도 평창군, 전북특별자치도 완주군, 경상남도 진주시, 전라남도 해남군, 충청북도 진천군, 충청남도 공주시 농업기술센터 농업정책과",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  
  
  //두레이
  card_dooray: {
    logo: "../img/saas_img/0_common/logo/logo_pr_dooray.svg",
    logoAlt: "두레이 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000077",
    badge: "협업 도구",
    title: "두레이(Dooray!)",
    company: "엔에이치엔두레이(주)",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증, 행정표준코드, LDAP, GPKI",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "드라이브, 메신저, 메일, 업무관리, 전자결재",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "충청북도, 광주광역시, 전라남도 장성군, 충청북도 옥천군, 충청북도 음성군, 충청북도 제천시, 충청북도 증평군, 충청북도 진천군, 충청북도 충주시, 경기도 구리시, 경기도 하남시",
        sr: "이용 기관 전체 보기"
      }
    ]
  },

  // 디지털 트윈 클라우드
  card_twinCloud: {
    logo: "../img/saas_img/0_common/logo/logo_pr_egis.png",
    logoAlt: "주식회사 이지스 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000041",
    badge: "기타",
    title: "디지털 트윈 클라우드",
    company: "(주) 이지스",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증, 행정표준코드, LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "데이터 가시화, 앱마켓 플레이스, 지도 기능",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "제주특별자치도",
        sr: "이용 기관 전체 보기"
      }
    ]
  },

  //모두싸인 공공용
  card_modusign: {
    logo: "../img/saas_img/0_common/logo/logo_pr_modusign.png",
    logoAlt: "모두싸인 공공용 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000011",
    badge: "전자 계약",
    title: "모두싸인 공공용",
    company: "주식회사 모두싸인",
    tooltips: [
      {
        key: "연계",
        full: "행정표준코드",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "시설관리, 전자계약, 전자근로계약, 전자서명",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "한국에너지공단, 부산광역시남구시설관리공단",
        sr: "이용 기관 전체 보기"
      }
    ]
  },

  //보이는 원격상담 비디오헬프미
  card_videoHelpMe: {
    logo: "../img/saas_img/0_common/logo/logo_pr_videoHelpMe.png",
    logoAlt: "비디오헬프미 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000012",
    badge: "기타",
    title: "보이는 원격상담 비디오헬프미",
    company: "주식회사 클라운지",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "영상상담, 영상중계, 원격상담, 파일뷰어",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "경기도 오산시",
        sr: "이용 기관 전체 보기"
      }
    ]
  },

  // 스트레티지게이트
  card_sgate: {
    logo: "../img/saas_img/0_common/logo/logo_pr_sgate.svg",
    logoAlt: "스트레티지게이트 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000028",
    badge: "성과 관리",
    title: "스트레티지게이트",
    company: "(주)이즈파크",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증, 행정표준코드, LDAP, GPKI",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "개인업적평가, 개인역량평가, 경영평가관리, 성과모니터링, 조직성과관리, 직무관리",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "국립부산과학관, 성남시청소년재단, 한국도핑방지위원회, 한국조세재정연구원, 한국지능정보사회진흥원, 경상남도 창원시, 경상북도 의성군",
        sr: "이용 기관 전체 보기"
      }
    ]
  },

  //스패로우 클라우드
  card_sparrowCloud: {
    logo: "../img/saas_img/0_common/logo/logo_pr_sparrowCloud.jpg",
    logoAlt: "스패로우 클라우드 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000072",
    badge: "보안",
    title: "스패로우 클라우드",
    company: "(주)스패로우",
    tooltips: [
      {
        key: "연계",
        full: "행정표준코드",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "취약점 진단",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "사립학교교직원연금공단",
        sr: "이용 기관 전체 보기"
      }
    ]
  },

  //엔로비 - 방문예약시스템 클라우드 서비스
  card_nlobby: {
    logo: "../img/saas_img/0_common/logo/logo_pr_nlobby.png",
    logoAlt: "엔로비 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000023",
    badge: "출입 관리",
    title: "엔로비 - 방문예약시스템 클라우드 서비스",
    company: "(주)엔로비",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증, 행정표준코드, LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "방문객 사전예약",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "광주광역시, 한국보건산업진흥원, 한국사회보장정보원, 경찰청 서울특별시경찰청 서울은평경찰서 경무과",
        sr: "이용 기관 전체 보기"
      }
    ]
  },

  //엔아이클라우드
  card_niCloud: {
    logo: "../img/saas_img/0_common/logo/logo_pr_niCloud.jpg",
    logoAlt: "엔아이클라우드 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000029",
    badge: "메일",
    title: "엔아이클라우드",
    company: "(주)타이거컴퍼니",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증, 행정표준코드, LDAP, GPKI",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",        
        full: "뉴스피드, 드라이브, 메신저, 웹오피스, 캘린더, 파일뷰어, 화상회의 ",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "광주광역시 광산구, 충청남도 보령시",
        sr: "이용 기관 전체 보기"
      }
    ]
  },
    
  // 웹 기반 수어 번역 서비스
  card_eq4all: {
    logo: "../img/saas_img/0_common/logo/logo_pr_eq4all.jpg",
    logoAlt: "이큐포올 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000075",
    badge: "기타",
    title: "웹 기반 수어 번역 서비스",
    company: "주식회사 이큐포올",
    tooltips: [
      {
        key: "연계",
        full: "행정표준코드",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "수어 번역",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "국민연금공단",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  
    
  // 이젠터치/토이
  card_egenTouch: {
    logo: "../img/saas_img/0_common/logo/logo_pr_egenTouch.png",
    logoAlt: "이젠터치 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000005",
    badge: "기타",
    title: "이젠터치/토이",
    company: "(주)두드림시스템",
    tooltips: [
      {
        key: "연계",
        full: "모바일 공무원증, 행정표준코드, LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "도서 관리, 디지털 아카이브",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "제주특별자치도 제주시, 한국석유공사",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  

  //이진 아이티에스엠
  card_steg: {
    logo: "../img/saas_img/0_common/logo/logo_pr_steg.jpg",
    logoAlt: "에스티이지 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000017",
    badge: "기타",
    title: "이진 아이티에스엠",
    company: "(주)에스티이지",
    tooltips: [
      {
        key: "연계",
        full: "행정표준코드",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "장애관리, IT서비스관리, ITAM, ITOM, ITSM, SLA관리",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "한국보건산업진흥원",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  
  
  // 이체크폼
  card_eCheckForm: {
    logo: "../img/saas_img/0_common/logo/logo_pr_eCheckForm.png",
    logoAlt: "솔비텍 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000074",
    badge: "전자행정서식",
    title: "이체크폼",
    company: "(주)솔비텍",
    tooltips: [
      {
        key: "연계",
        full: "행정표준코드",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "시설관리, 안전관리, 전자서식",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "근로복지공단, 울산광역시 북구",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  

  //이폼사인
  card_eFormSign: {
    logo: "../img/saas_img/0_common/logo/logo_pr_eFormSign.svg",
    logoAlt: "이폼사인 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000037",
    badge: "전자계약",
    title: "이폼사인",
    company: "주식회사 포시에스",
    tooltips: [
      {
        key: "연계",
        full: "행정표준코드, LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "전자 계약, 전자 서명, 회원 관리",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "경기도 연천군, 용산구시설관리공단",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  
  
  //지능형 능동행정 공공지원사업 매칭 서비스
  card_bizData: {
    logo: "../img/saas_img/0_common/logo/logo_pr_bizData.png",
    logoAlt: "비즈데이터 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000021",
    badge: "기타",
    title: "지능형 능동행정 공공지원사업 매칭 서비스",
    company: "(주)비즈데이터",
    tooltips: [
      {
        key: "연계",
        full: "LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "관심기업관리, 지원사업 검색, 지원사업 관리, 지원사업 매칭",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "강원특별자치도 춘천시, 경기도 고양시",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  

  //케이티 에이아이 컨택트센터
  card_ktAiContact: {
    logo: "../img/saas_img/0_common/logo/logo_pr_ktAiContact.jpg",
    logoAlt: "케이티 에이아이 컨택트센터 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000069",
    badge: "AI",
    title: "케이티 에이아이 컨택트센터",
    company: "케이티",
    tooltips: [
      {
        key: "연계",
        full: "행정표준코드, LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",
        full: "챗봇, AI상담",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",       
        full: "국립부산과학관, 근로복지공단, 인천광역시중구시설관리공단, 충청북도, 충청북도 충주시, 한국양성평등교육진흥원, 한국체육산업개발주식회사",
        sr: "이용 기관 전체 보기"
      }
    ]
  },  

  //케이티클라우드 비즈웍스 프로
  card_ktBizworkspro: {
    logo: "../img/saas_img/0_common/logo/logo_pr_ktBizworkspro.png",
    logoAlt: "케이티클라우드 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000001",
    badge: "협업 도구",
    title: "케이티클라우드 비즈웍스 프로",
    company: "(주)케이티클라우드",
    tooltips: [
      {
        key: "연계",      
        full: "모바일 공무원증, LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",       
        full: "뉴스피드, 드라이브, 메신저, 웹오피스, 캘린더, 화상회의",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",
        full: "대전광역시 중구",
        sr: "이용 기관 전체 보기"
      }
    ]
  },   
  
  //크리니티 G-Cloud 공공메일
  card_crinityGMail: {
    logo: "../img/saas_img/0_common/logo/logo_pr_crinityGMail.png",
    logoAlt: "크리니티 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000030",
    badge: "메일",
    title: "크리니티 G-Cloud 공공메일",
    company: "(주)케이티클라우드",
    tooltips: [
      {
        key: "연계",     
        full: "행정표준코드",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",     
        full: "게시판, 드라이브, 메일, 아카이빙, 주소록, 캘린더, 화상회의, DLP",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",       
        full: "경상북도개발공사, (재)양산시복지재단",
        sr: "이용 기관 전체 보기"
      }
    ]
  },   

  //G-Cloud 메일솔루션  
  card_mailplugGMail: {
    logo: "../img/saas_img/0_common/logo/logo_pr_mailplugGMail.svg",
    logoAlt: "메일플러그 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000027",
    badge: "메일",
    title: "G-Cloud 메일솔루션",
    company: "(주)메일플러그",
    tooltips: [
      {
        key: "연계",      
        full: "행정표준코드",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",       
        full: "게시판, 메일, 아카이빙, 주소록",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",        
        full: "서울특별시서대문구도시관리공단",
        sr: "이용 기관 전체 보기"
      }
    ]
  },   

  //Naver Works for 공공용
  card_naverworks: {
    logo: "../img/saas_img/0_common/logo/logo_pr_naverworks.svg",
    logoAlt: "Naver Works for 공공용 로고 이미지",
    link: "https://saas.go.kr/userpage/prvatesaascatalog/prvatesaascatalog/detail/SCID0000000000000043",
    badge: "협업 도구",
    title: "Naver Works for 공공용",
    company: "네이버클라우드 주식회사",
    tooltips: [
      {
        key: "연계",       
        full: "모바일 공무원증, 행정표준코드, LDAP",
        sr: "연계 전체 보기"
      },
      {
        key: "제공 기능",       
        full: "게시판, 메신저, 메일, 모니터링, 보안, 설문, 자동화, 정보 공유, 캘린더, 협업, 화상회의",
        sr: "제공 기능 전체 보기"
      },
      {
        key: "이용 기관",       
        full: "서울특별시 소방재난본부, 제주특별자치도, 한국농촌경제연구원",
        sr: "이용 기관 전체 보기"
      }
    ]
  },   
};




/* =========================
  말줄임 여부 체크
========================= */
function updateTooltipEllipsis() {
  document.querySelectorAll(".wrap-tooltip").forEach(wrap => {
    const value = wrap.querySelector(".value");
    const action = wrap.querySelector(".tooltip-action");

    if (!value || !action) return;

    // 모바일/PC 공통 줄 계산
    const style = getComputedStyle(value);
    const lineHeight = parseFloat(style.lineHeight);

    // line-height가 auto일 경우 대비
    if (!lineHeight) return;

    const lines = Math.round(value.scrollHeight / lineHeight);

    if (lines > 1) {
      value.classList.add("is-ellipsis");
      action.style.display = "inline-flex";
    } else {
      value.classList.remove("is-ellipsis");
      action.style.display = "none";
    }
  });
}

