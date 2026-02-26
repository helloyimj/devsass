// function renderProduct(productKey) {
//   const productData = productDataList[productKey];
//   if (!productData) return;

//   const target = document.querySelector(`.product_card.${productKey}`);
//   if (!target) return;

//   target.innerHTML = `
//     <div class="product_item_inner">
//       <div class="box_logo">
//         <img src="${productData.logo}" alt="${productData.name} 로고" class="viewer">
//       </div>
//       <div class="box_txt">
//         <div class="box_txt_inner">
//           <div class="card_top">
//             <span class="krds-badge bg-primary">${productData.badge}</span>
//           </div>
//           <div class="card-body">
//             <div class="c-text">
//               <div class="c-tit">
//                 <a href="공공부문 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                   <span class="product_name">${productData.name}</span>
//                 </a>
//               </div>
//               <p class="company_name">${productData.company}</p>
//               <div class="tags">
//                 ${productData.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
//               </div>
//             </div>
//           </div>
//           <p class="c_cnt">
//             <div class="b_box">
//               <p>${productData.govText}</p>
//               <div class="tags">
//                 ${productData.govTags.map(tag => `<span class="tag_gov">${tag}</span>`).join('')}
//               </div>
//             </div>
//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">${productData.csap}</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">${productData.date}</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">${productData.infra}</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">${productData.procurement}</span></li>
//               </ul>
//             </div>
//             <div class="b_box">
//               <p class="before_mark medal_icon">${productData.infoBox} <span>${productData.infoBoxSub}</span></p>
//             </div>
//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 <br class="block_480"/>공식 사이트</span>
//                   <a href="${productData.officialSite}" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="${productData.directContract}" target="_blank" class="krds-btn medium tertiary" title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">이용지원시스템 이동<i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>
//           </p>
//         </div>
//       </div>
//     </div>
//   `;
// }

// 실행 예시
// renderProduct("product_01");


  const productList = document.getElementById("productList");

  for (let key in productData) {
    const product = productData[key];

    const li = document.createElement("li");
    li.className = "structured-item product_card " + key;

    li.innerHTML = `
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="${product.logo}" alt="${product.name} 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">${product.badge}</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="#" target="_self" class="" title="상세 페이지 이동">
                    <span class="product_name">${product.name}</span>
                  </a>
                </div>
                <p class="company_name">${product.company}</p>
                <div class="tags">
                  ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
                </div>
              </div>
            </div>
            <p class="c_cnt">
              <div class="b_box">
                <p>${product.govText}</p>
                <div class="tags">
                  ${product.govTags.map(tag => `<span class="tag_gov">${tag}</span>`).join("")}
                </div>
              </div>
              <div class="wrap_detail_info">
                <ul class="detail_info_list">
                  <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">${product.csap}</span></li>
                  <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">${product.date}</span></li>
                  <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">${product.infra}</span></li>
                  <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">${product.procurement}</span></li>
                </ul>
              </div>
              <div class="b_box">
                <p class="before_mark medal_icon">${product.infoBox} <span>${product.infoBoxSub}</span></p>
              </div>
              <div class="card-btm">
                <div class="wrap_link_area">
                  <div class="link_area">
                    <span class="link_label">서비스 <br class="block_480"/>공식 사이트</span>
                    <a href="${product.officialSite}" target="_blank" class="krds-btn medium tertiary"
                      title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                  </div>
                  <div class="link_area">
                    <span class="link_label">기관직접계약</span>
                    <a href="${product.directContract}" target="_blank" class="krds-btn medium tertiary"
                      title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">이용지원시스템 이동<i class="svg-icon ico-go"></i></a>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    `;

    productList.appendChild(li);
  }
  

// const productData = {
//   product_01: { 
//     logo: "", // 로고 없으면 빈 문자열
//     badge: "전자계약",
//     name: "모두싸인 공공용",
//     company: "주식회사 모두싸인",
//     tags: ["전자계약", "전자서명"],
//     govText: "정부 공통시스템 연계",
//     govTags: [],
//     csap: "표준",
//     date: "2024-03-13 ~ 2026-03-12",
//     infra: "네이버 클라우드(공공)",
//     procurement: "계약 완료",
//     infoBox: "국가정보원 공시 국가공공기관 도입 가능",
//     infoBoxSub: "클라우드 컴퓨팅 서비스",
//     officialSite: "https://gov.modusign.co.kr/",
//     directContract: "https://www.digitalmarket.kr/web/service/detail.do?s=SAS-3-06-11290&keywordSearch=%EB%AA%A8%EB%91%90%EC%8B%B8%EC%9D%B8"
//   },
//   product_02: { 
//     logo: "../img/saas_img/4_privateSaaS/logo_01.png",
//     badge: "문서관리",
//     name: "공공용 계절근로자 관리 플랫폼",
//     company: "(주)인조이웍스",
//     tags: ["전자서명", "근로자 관리"],
//     govText: "정부 공통시스템 연계",
//     govTags: ["모바일공무원증", "GPKI"],
//     csap: "표준",
//     date: "2017.07.22 ~ 2026.07.21",
//     infra: "네이버 클라우드(공공)",
//     procurement: "계약 완료",
//     infoBox: "국가정보원 공시 국가공공기관 도입 가능",
//     infoBoxSub: "클라우드 컴퓨팅 서비스",
//     officialSite: "javascript:;",
//     directContract: "javascript:;"
//   }
//   // product_03 ~ product_07 이후 데이터도 동일 구조로 추가
// };

const productData = {
  product_01: { 
    logo: "", // 로고 없으면 빈 문자열
    badge: "전자계약",
    name: "모두싸인 공공용",
    company: "주식회사 모두싸인",
    tags: ["전자계약", "전자서명"],
    govText: "정부 공통시스템 연계",
    govTags: [],
    csap: "표준",
    date: "2024-03-13 ~ 2026-03-12",
    infra: "네이버 클라우드(공공)",
    procurement: "계약 완료",
    infoBox: "국가정보원 공시 국가공공기관 도입 가능",
    infoBoxSub: "클라우드 컴퓨팅 서비스",
    officialSite: "https://gov.modusign.co.kr/",
    directContract: "https://www.digitalmarket.kr/web/service/detail.do?s=SAS-3-06-11290&keywordSearch=%EB%AA%A8%EB%91%90%EC%8B%B8%EC%9D%B8"
  },
  product_02: { 
    logo: "../img/saas_img/4_privateSaaS/logo_01.png",
    badge: "문서관리",
    name: "공공용 계절근로자 관리 플랫폼",
    company: "(주)인조이웍스",
    tags: ["전자서명", "근로자 관리"],
    govText: "정부 공통시스템 연계",
    govTags: ["모바일공무원증", "GPKI"],
    csap: "표준",
    date: "2017.07.22 ~ 2026.07.21",
    infra: "네이버 클라우드(공공)",
    procurement: "계약 완료",
    infoBox: "국가정보원 공시 국가공공기관 도입 가능",
    infoBoxSub: "클라우드 컴퓨팅 서비스",
    officialSite: "javascript:;",
    directContract: "javascript:;"
  },
  product_03: {
    logo: "", 
    badge: "IT 인프라 관리",
    name: "이진 아이티에스엠",
    company: "(주)에스티이지",
    tags: ["자산관리", "장애관리", "IT서비스관리", "ITAM", "ITSM"],
    govText: "정부 공통시스템 연계",
    govTags: [],
    csap: "간편",
    date: "2024-01-31 ~ 2029-01-30",
    infra: "네이버 클라우드 플랫폼 (공공)",
    procurement: "계약 완료",
    infoBox: "국가정보원 공시 국가공공기관 도입 가능",
    infoBoxSub: "클라우드 컴퓨팅 서비스",
    officialSite: "http://www.gov-egene.io",
    directContract: "https://www.digitalmarket.kr/web/service/detail.do?s=SAS-5-05-11256"
  },
  product_04: {
    logo: "", 
    badge: "보안",
    name: "크리미널아이피 공격표면관리 솔루션",
    company: "주식회사 에이아이스페라",
    tags: ["보안"],
    govText: "정부 공통시스템 연계",
    govTags: [],
    csap: "간편",
    date: "2024-08-01 ~ 2029-07-31",
    infra: "NHN Cloud (공공)",
    procurement: "계약 완료",
    infoBox: "국가정보원 공시 국가공공기관 도입 가능",
    infoBoxSub: "클라우드 컴퓨팅 서비스",
    officialSite: "https://www.criminalip.io",
    directContract: "https://www.digitalmarket.kr/web/service/detail.do?s=SAS-4-09-11350"
  },
  product_05: {
    logo: "", 
    badge: "협업 도구",
    name: "두레이!",
    company: "엔에이치엔두레이(주)",
    tags: ["메일", "메신저", "드라이브", "업무관리", "전자결재"],
    govText: "정부 공통시스템 연계",
    govTags: ["행정표준코드연계시스템", "모바일공무원증연계시스템", "GPKI연계시스템", "LDAP연계시스템"],
    csap: "표준",
    date: "2024-12-11 ~ 2029-12-17",
    infra: "NHN Cloud (공공)",
    procurement: "계약 완료",
    infoBox: "국가정보원 공시 국가공공기관 도입 가능",
    infoBoxSub: "클라우드 컴퓨팅 서비스",
    officialSite: "https://www.dooray.com",
    directContract: "https://www.digitalmarket.kr/web/service/detail.do?s=SAS-4-09-10374"
  },
  product_06: {
    logo: "", 
    badge: "기타",
    name: "웹 기반 수어 번역 서비스",
    company: "주식회사 이큐포올",
    tags: ["수어번역"],
    govText: "정부 공통시스템 연계",
    govTags: ["행정표준코드연계시스템"],
    csap: "간편",
    date: "2024-07-03 ~ 2029-07-02",
    infra: "네이버 클라우드 플랫폼 (공공)",
    procurement: "계약 완료",
    infoBox: "국가정보원 공시 국가공공기관 도입 가능",
    infoBoxSub: "클라우드 컴퓨팅 서비스",
    officialSite: "http://www.eq4all.co.kr",
    directContract: "https://www.digitalmarket.kr/web/service/detail.do?s=SAS-1-07-11310"
  },
  product_07: {
    logo: "", 
    badge: "전자행정서식",
    name: "이체크폼",
    company: "(주)솔비텍",
    tags: ["시설관리", "안전관리", "전자서식"],
    govText: "정부 공통시스템 연계",
    govTags: ["행정표준코드연계시스템"],
    csap: "간편",
    date: "2023-05-26 ~ 2028-05-25",
    infra: "가비아 클라우드 (공공)",
    procurement: "계약 완료",
    infoBox: "국가정보원 공시 국가공공기관 도입 가능",
    infoBoxSub: "클라우드 컴퓨팅 서비스",
    officialSite: "http://www.solbitech.com",
    directContract: ""
  }
};

