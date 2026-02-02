function renderProduct01() {
  const product01 = `
                      <li class="structured-item product_card product_01">
                        <div class="product_item_inner">
                          <div class="box_logo">
                            <img src="../img/saas_img/4_privateSaaS/logo_01.png" alt="센스메일 클라우드 로고" class="viewer">
                          </div>
                          <div class="box_txt">
                            <div class="box_txt_inner">
                              <div class="card_top">
                                <span class="krds-badge bg-primary">협업도구</span>
                              </div>
                              <div class="card-body">
                                <div class="c-text">
                                  <div class="c-tit">
                                    <a href="공공용 민간 SaaS_상세.html" target="_self" class="" title="상세 페이지 이동">
                                      <span class="product_name">센스메일 클라우드 (SensMail Cloud)</span></a>
                                  </div>
                                  <p class="company_name">아이모션</p>
                                  <div class="tags">
                                    <span class="tag">메일</span>
                                    <span class="tag">그룹웨어</span>
                                    <span class="tag">태그</span>
                                  </div>
                                </div>
                              </div>
                              <p class="c_cnt">
                                <div class="b_box">
                                  <p>정부 공통시스템 연계</p>
                                  <div class="tags">
                                    <span class="tag_gov">모바일 공무원증</span>
                                    <span class="tag_gov">행정표준코드</span>
                                    <span class="tag_gov">LDAP</span>
                                    <span class="tag_gov">GPKI</span>
                                  </div>
                                </div>
                                <div class="wrap_detail_info">
                                  <ul class="detail_info_list">
                                    <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">표준</span></li>
                                    <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                                    <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">네이버 클라우드(공공)</span></li>
                                    <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">계약 완료</span></li>
                                  </ul>
                                </div>
                                <div class="b_box">
                                  <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
                                </div>
                                <div class="card-btm">
                                  <div class="wrap_link_area">
                                    <div class="link_area">
                                      <span class="link_label">서비스 공식 사이트</span>
                                      <a href="javascript:;" target="_blank" class="krds-btn medium tertiary"
                                        title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                                    </div>
                                    <div class="link_area">
                                      <span class="link_label">기관직접계약</span>
                                      <a href="javascript:;" target="_blank" class="krds-btn medium tertiary"
                                        title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </li>
  `;

  const target = document.querySelector('.product_card.product_01');
  if (target) {
    target.outerHTML = product01;
  }
}

// function renderProduct02() {
//   const product02 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray newly_added">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_02.png" alt="StrategyGATE 로고 이미지" class="viewer"/>
//           </div>
//           <span class="newly_added_tag">NEW</span>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">성과 관리</span>
//           <span class="product_name">StrategyGATE (전략성과관리솔루션)</span>
//           <span class="company_name">이즈파크</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">경영성과 관리</span>
//             <span class="search_tag">성과관리</span>
//             <span class="search_tag">전략</span>
//             <span class="search_tag">개인성과평가</span>
//             <span class="search_tag">성과모니터링</span>
//             <span class="search_tag">성과평가</span>
//             <span class="search_tag">정부경영평가</span>
//           </div>

//           <div class="wrap_govSaas">
//             <p>정부 공통시스템 연계</p>
//             <div class="govSaas_tag">
//               <span class="tag">모바일 공무원증</span>
//               <span class="tag">행정표준코드</span>
//               <span class="tag">LDAP</span>
//             </div>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2017.07.22 ~ 2026.07.21</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">NHN 클라우드(공공)</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트</a>
//             </div>
//           </div>
//         </div>

//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank">이용지원시스템</a>
//             </div>
//           </div>
//           <div class="wrap_btn">
//             <p>중앙조달계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank">조달청 서비스몰</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_02');
//   if (target) target.innerHTML = product02;
// }

// function renderProduct02() {
//   const product02 = `
//     <li class="structured-item product_card product_02">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_02.png" alt="StrategyGATE 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">성과관리</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">StrategyGATE (전략성과관리솔루션)</span>
//                   </a>
//                 </div>
//                 <p class="company_name">이즈파크</p>
//                 <div class="tags">
//                   <span class="tag">경영성과 관리</span>
//                   <span class="tag">성과관리</span>
//                   <span class="tag">전략</span>
//                   <span class="tag">개인성과평가</span>
//                   <span class="tag">성과모니터링</span>
//                   <span class="tag">성과평가</span>
//                   <span class="tag">정부경영평가</span>
//                 </div>
//               </div>
//             </div>
//             <p class="c_cnt">
//               <div class="b_box">
//                 <p>정부 공통시스템 연계</p>
//                 <div class="tags">
//                   <span class="tag_gov">모바일 공무원증</span>
//                   <span class="tag_gov">행정표준코드</span>
//                   <span class="tag_gov">LDAP</span>
//                 </div>
//               </div>
//             </p>
//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//               </ul>
//             </div>
//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>
//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 공식 사이트</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">이용지원시스템 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">중앙조달계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림- 조달청 디지털서비스몰 상세 페이지로 이동">조달청 서비스몰 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_02');
//   if (target) target.innerHTML = product02;
// }

function renderProduct02() {
  const product02 = `
    <li class="structured-item product_card product_02">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_02.png" alt="StrategyGATE 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">성과관리</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">StrategyGATE (전략성과관리솔루션)</span>
                  </a>
                </div>
                <p class="company_name">이즈파크</p>
                <div class="tags">
                  <span class="tag">경영성과 관리</span>
                  <span class="tag">성과관리</span>
                  <span class="tag">전략</span>
                  <span class="tag">개인성과평가</span>
                  <span class="tag">성과모니터링</span>
                  <span class="tag">성과평가</span>
                  <span class="tag">정부경영평가</span>
                </div>
              </div>
            </div>

            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">계약 완료</span></li>
              </ul>
            </div>

            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>

            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </li>
  `;

  const target = document.querySelector('.product_card.product_02');
  if (!target) return;

  target.innerHTML = product02;
}


// function renderProduct03() {
//   const product03 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray newly_added">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_03.png" alt="페어리 로고 이미지" class="viewer"/>
//           </div>
//           <span class="newly_added_tag">NEW</span>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">채용 · 인사 관리</span>
//           <span class="product_name">페어리</span>
//           <span class="company_name">주식회사 휴스테이션</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">채용 관리</span>
//             <span class="search_tag">채용공고</span>
//             <span class="search_tag">합격자 발표</span>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2017.07.22 ~ 2026.07.21</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">카카오</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank">공식 사이트</a>
//             </div>
//           </div>
//         </div>

//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank">이용지원시스템</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_03');
//   if (target) target.innerHTML = product03;
// }
function renderProduct03() {
  const product03 = `
    <li class="structured-item product_card product_03">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_03.png" alt="페어리 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">채용 · 인사 관리</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">페어리</span>
                  </a>
                </div>
                <p class="company_name">주식회사 휴스테이션</p>
                <div class="tags">
                  <span class="tag">채용 관리</span>
                  <span class="tag">채용공고</span>
                  <span class="tag">합격자 발표</span>
                </div>
              </div>
            </div>

            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">카카오</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
              </ul>
            </div>

            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>

            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </li>
  `;

  const target = document.querySelector('.product_card.product_03');
  if (target) target.innerHTML = product03;
}


// function renderProduct04() {
//   const product04 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray" data-aos="fade" data-aos-delay="100">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_04.png" alt="ORG Insight 로고 이미지" class="viewer"/>
//           </div>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">채용 · 인사 관리</span>
//           <span class="product_name">ORG Insight (CG)</span>
//           <span class="company_name">㈜소프트인</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">인사 관리</span>
//             <span class="search_tag">조직 시각화</span>
//             <span class="search_tag">인사 정보 시각화</span>
//           </div>

//           <!--
//           <div class="wrap_govSaas">
//             <p>정부 공통시스템 연계</p>
//             <div class="govSaas_tag">
//               <span class="tag">모바일 공무원증</span>
//               <span class="tag">행정표준코드</span>
//               <span class="tag">LDAP</span>
//             </div>
//           </div>
//           -->
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2017.07.22 ~ 2026.07.21</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">NHN 클라우드(공공)</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank" class="link_service_anchor"
//                  title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트</a>
//             </div>
//           </div>
//         </div>

//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank" class="link_service_anchor"
//                  title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">이용지원시스템</a>
//             </div>
//           </div>

//           <div class="wrap_btn">
//             <p>중앙조달계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank" class="link_service_anchor"
//                  title="새 창 열림- 조달청 디지철서비스몰의 상세 페이지로 이동">조달청 서비스몰</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_04');
//   if (target) target.innerHTML = product04;
// }

function renderProduct04() {
  const product04 = `
    <li class="structured-item product_card product_04">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_04.png" alt="ORG Insight 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">채용 · 인사 관리</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">ORG Insight (CG)</span>
                  </a>
                </div>
                <p class="company_name">㈜소프트인</p>
                <div class="tags">
                  <span class="tag">인사 관리</span>
                  <span class="tag">조직 시각화</span>
                  <span class="tag">인사 정보 시각화</span>
                </div>
              </div>
            </div>

            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">계약 완료</span></li>
              </ul>
            </div>

            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>

            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </li>
  `;

  const target = document.querySelector('.product_card.product_04');
  if (target) target.innerHTML = product04;
}


// function renderProduct05() {
//   const product05 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray" data-aos="fade" data-aos-delay="100">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_05.png" alt="엔로비 로고 이미지" class="viewer"/>
//           </div>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">출입 관리</span>
//           <span class="product_name">엔로비 (nlobby)</span>
//           <span class="company_name">엔로비</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">출입관리</span>
//             <span class="search_tag">방문객</span>
//             <span class="search_tag">방문 예약</span>
//             <span class="search_tag">내방객 사전예약</span>
//             <span class="search_tag">개인정보보호</span>
//           </div>

//           <div class="wrap_govSaas">
//             <p>정부 공통시스템 연계</p>
//             <div class="govSaas_tag">
//               <span class="tag">모바일 공무원증</span>
//               <span class="tag">행정표준코드</span>
//             </div>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2017.07.22 ~ 2026.07.21</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">NHN 클라우드(공공)</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank" class="link_service_anchor">공식 사이트</a>
//             </div>
//           </div>
//         </div>

//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank" class="link_service_anchor">이용지원시스템</a>
//             </div>
//           </div>
//           <div class="wrap_btn">
//             <p>중앙조달계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank" class="link_service_anchor">조달청 서비스몰</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_05');
//   if (target) target.innerHTML = product05;
// }

// function renderProduct06() {
//   const product06 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray" data-aos="fade" data-aos-delay="100">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_06.png" alt="하이웍스 단독 구축형 웹메일 로고 이미지" class="viewer"/>
//           </div>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">메일</span>
//           <span class="product_name">하이웍스 단독 구축형 웹메일</span>
//           <span class="company_name">가비아</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">메일</span>
//             <span class="search_tag">구축형</span>
//             <span class="search_tag">그룹웨어</span>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2017.07.22 ~ 2026.07.21</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">NHN 클라우드(공공)</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank" class="link_service_anchor">공식 사이트</a>
//             </div>
//           </div>
//         </div>

//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank" class="link_service_anchor">이용지원시스템</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_06');
//   if (target) target.innerHTML = product06;
// }

// function renderProduct07() {
//   const product07 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray newly_added">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_07.png" alt="제품07 로고 이미지" class="viewer"/>
//           </div>
//           <span class="newly_added_tag">NEW</span>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">업무 협업</span>
//           <span class="product_name">PRODUCT 07</span>
//           <span class="company_name">회사명</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">협업툴</span>
//             <span class="search_tag">업무관리</span>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2021.01.01 ~ 2026.12.31</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">NHN 클라우드(공공)</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank" class="link_service_anchor"
//                  title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_07');
//   if (target) target.innerHTML = product07;
// }

// function renderProduct08() {
//   const product08 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_08.png" alt="제품08 로고 이미지" class="viewer"/>
//           </div>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">데이터 관리</span>
//           <span class="product_name">PRODUCT 08</span>
//           <span class="company_name">회사명</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">데이터 분석</span>
//             <span class="search_tag">시각화</span>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2020.05.10 ~ 2025.05.09</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">카카오</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank" class="link_service_anchor"
//                  title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">
//                  이용지원시스템
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_08');
//   if (target) target.innerHTML = product08;
// }

// function renderProduct08() {
//   const product08 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_08.png" alt="제품08 로고 이미지" class="viewer"/>
//           </div>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">데이터 관리</span>
//           <span class="product_name">PRODUCT 08</span>
//           <span class="company_name">회사명</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">데이터 분석</span>
//             <span class="search_tag">시각화</span>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2020.05.10 ~ 2025.05.09</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">카카오</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank" class="link_service_anchor"
//                  title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">
//                  이용지원시스템
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_08');
//   if (target) target.innerHTML = product08;
// }

// function renderProduct09() {
//   const product09 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray" data-aos="fade" data-aos-delay="100">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_09.png"
//                  alt="가온누리 (ezEKP365G) 로고 이미지"
//                  class="viewer" />
//           </div>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능
//             <span>클라우드 컴퓨팅 서비스</span>
//           </p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">협업</span>
//           <span class="product_name">가온누리 (ezEKP365G)</span>
//           <span class="company_name">주식회사 가온아이</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">협업</span>
//             <span class="search_tag">포탈</span>
//             <span class="search_tag">전자결재</span>
//             <span class="search_tag">메일</span>
//             <span class="search_tag">일정관리</span>
//             <span class="search_tag">게시판</span>
//             <span class="search_tag">자원관리</span>
//             <span class="search_tag">근태관리</span>
//             <span class="search_tag">업무관리</span>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2017.07.22 ~ 2026.07.21</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">NHN 클라우드(공공)</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank"
//                  class="link_service_anchor"
//                  title="새 창 열림 - 공식 홈페이지로 이동">
//                 공식 사이트
//               </a>
//             </div>
//           </div>
//         </div>

//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank"
//                  class="link_service_anchor"
//                  title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">
//                 이용지원시스템
//               </a>
//             </div>
//           </div>

//           <div class="wrap_btn">
//             <p>중앙조달계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank"
//                  class="link_service_anchor"
//                  title="새 창 열림- 조달청 디지철서비스몰의 상세 페이지로 이동">
//                 조달청 서비스몰
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_09');
//   if (target) {
//     target.innerHTML = product09;
//   }
// }
// function renderProduct10() {
//   const product10 = `
//     <div class="product_item" data-aos="fade-up" data-aos-delay="100">
//       <div class="item_head">
//         <div class="box_line_gray" data-aos="fade" data-aos-delay="100">
//           <div class="wrap_img">
//             <img src="../img/saas_img/4_privateSaaS/logo_10.png"
//                  alt="올샵(ALL#) ERP 로고 이미지"
//                  class="viewer" />
//           </div>
//         </div>
//         <div class="box_filled">
//           <p>국가정보원 공시 국가공공기관 도입 가능
//             <span>클라우드 컴퓨팅 서비스</span>
//           </p>
//         </div>
//       </div>

//       <div class="item_middle">
//         <div class="wrap_name">
//           <span class="service_category">협업</span>
//           <span class="product_name">올샵(ALL#) ERP</span>
//           <span class="company_name">씨앤에프 시스템</span>

//           <div class="wrap_serviceTag">
//             <span class="search_tag">협업</span>
//             <span class="search_tag">인사 급여</span>
//             <span class="search_tag">예산 재무</span>
//             <span class="search_tag">회계 결산</span>
//             <span class="search_tag">계약 물품</span>
//             <span class="search_tag">세무관리</span>
//             <span class="search_tag">교육 회원</span>
//             <span class="search_tag">차량관리</span>
//             <span class="search_tag">자원관리</span>
//           </div>
//         </div>

//         <div class="wrap_detail_info">
//           <ul>
//             <li><span class="label">CSAP 인증</span><span class="info_value">간편</span></li>
//             <li><span class="label">인증 날짜</span><span class="info_value">2017.07.22 ~ 2026.07.21</span></li>
//             <li><span class="label">이용 인프라</span><span class="info_value">NHN 클라우드(공공)</span></li>
//           </ul>
//         </div>
//       </div>

//       <div class="item_buttons">
//         <div class="btn_top">
//           <div class="wrap_btn">
//             <div class="round_btn btn_openInNew btn_lined">
//               <a href="javascript:;" target="_blank"
//                  class="link_service_anchor"
//                  title="새 창 열림 - 공식 홈페이지로 이동">
//                 공식 사이트
//               </a>
//             </div>
//           </div>
//         </div>

//         <div class="btn_bottom">
//           <div class="wrap_btn">
//             <p>기관직접계약</p>
//             <div class="round_btn btn_openInNew btn_filled">
//               <a href="javascript:;" target="_blank"
//                  class="link_service_anchor"
//                  title="새 창 열림- 디지털서비스 이용지원 홈페이지의 상세 페이지로 이동">
//                 이용지원시스템
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   const target = document.querySelector('.product_card.product_10');
//   if (target) {
//     target.innerHTML = product10;
//   }
// }

function renderProduct05() {
  const product05 = `
    <li class="structured-item product_card product_05">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_05.png" alt="엔로비 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">출입 관리</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">엔로비 (nlobby)</span>
                  </a>
                </div>
                <p class="company_name">엔로비</p>
                <div class="tags">
                  <span class="tag">출입관리</span>
                  <span class="tag">방문객</span>
                  <span class="tag">방문 예약</span>
                  <span class="tag">내방객 사전예약</span>
                  <span class="tag">개인정보보호</span>
                </div>
              </div>
            </div>

            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">중앙조달계약</strong><span class="info_value value">계약 완료</span></li>
              </ul>
            </div>

            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>

            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </li>
  `;

  const target = document.querySelector('.product_card.product_05');
  if (target) target.innerHTML = product05;
}


// function renderProduct06() {
//   const product06 = `
//     <li class="structured-item product_card product_06">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_06.png" alt="하이웍스 단독 구축형 웹메일 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">메일</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit"><span class="product_name">하이웍스 단독 구축형 웹메일</span></div>
//                 <p class="company_name">가비아</p>
//                 <div class="tags">
//                   <span class="tag">메일</span>
//                   <span class="tag">구축형</span>
//                   <span class="tag">그룹웨어</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_06');
//   if (target) target.innerHTML = product06;
// }

// function renderProduct07() {
//   const product07 = `
//     <li class="structured-item product_card product_07">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_07.png" alt="제품07 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">업무 협업</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit"><span class="product_name">PRODUCT 07</span></div>
//                 <p class="company_name">회사명</p>
//                 <div class="tags">
//                   <span class="tag">협업툴</span>
//                   <span class="tag">업무관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2021.01.01 ~ 2026.12.31</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_07');
//   if (target) target.innerHTML = product07;
// }

// function renderProduct08() {
//   const product08 = `
//     <li class="structured-item product_card product_08">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_08.png" alt="제품08 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">데이터 관리</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit"><span class="product_name">PRODUCT 08</span></div>
//                 <p class="company_name">회사명</p>
//                 <div class="tags">
//                   <span class="tag">데이터 분석</span>
//                   <span class="tag">시각화</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2020.05.10 ~ 2025.05.09</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">카카오</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_08');
//   if (target) target.innerHTML = product08;
// }

// function renderProduct09() {
//   const product09 = `
//     <li class="structured-item product_card product_09">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_09.png" alt="가온누리 (ezEKP365G) 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">협업도구</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit"><span class="product_name">가온누리 (ezEKP365G)</span></div>
//                 <p class="company_name">주식회사 가온아이</p>
//                 <div class="tags">
//                   <span class="tag">협업</span>
//                   <span class="tag">포탈</span>
//                   <span class="tag">전자결재</span>
//                   <span class="tag">메일</span>
//                   <span class="tag">일정관리</span>
//                   <span class="tag">게시판</span>
//                   <span class="tag">자원관리</span>
//                   <span class="tag">근태관리</span>
//                   <span class="tag">업무관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">계약 완료</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_09');
//   if (target) target.innerHTML = product09;
// }

// function renderProduct10() {
//   const product10 = `
//     <li class="structured-item product_card product_10">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_10.png" alt="올샵(ALL#) ERP 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">협업도구</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit"><span class="product_name">올샵(ALL#) ERP</span></div>
//                 <p class="company_name">씨앤에프 시스템</p>
//                 <div class="tags">
//                   <span class="tag">협업</span>
//                   <span class="tag">인사 급여</span>
//                   <span class="tag">예산 재무</span>
//                   <span class="tag">회계 결산</span>
//                   <span class="tag">계약 물품</span>
//                   <span class="tag">세무관리</span>
//                   <span class="tag">교육 회원</span>
//                   <span class="tag">차량관리</span>
//                   <span class="tag">자원관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_10');
//   if (target) target.innerHTML = product10;
// }

// function renderProduct06() {
//   const product06 = `
//     <li class="structured-item product_card product_06">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_06.png" alt="플렉시 ERP 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">협업</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">플렉시 ERP</span>
//                   </a>
//                 </div>
//                 <p class="company_name">주식회사 플렉시</p>
//                 <div class="tags">
//                   <span class="tag">협업</span>
//                   <span class="tag">인사</span>
//                   <span class="tag">급여</span>
//                   <span class="tag">재무</span>
//                   <span class="tag">회계</span>
//                   <span class="tag">물품관리</span>
//                   <span class="tag">교육관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>

//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>

//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 공식 사이트</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_06');
//   if (target) target.innerHTML = product06;
// }

// function renderProduct07() {
//   const product07 = `
//     <li class="structured-item product_card product_07">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_07.png" alt="wehagov (위하고v) 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">협업</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">wehagov (위하고v)</span>
//                   </a>
//                 </div>
//                 <p class="company_name">더존비즈온</p>
//                 <div class="tags">
//                   <span class="tag">협업</span>
//                   <span class="tag">메신저</span>
//                   <span class="tag">화상회의</span>
//                   <span class="tag">웹 스토리지</span>
//                   <span class="tag">거래처 관리</span>
//                   <span class="tag">연락처</span>
//                   <span class="tag">일정관리</span>
//                   <span class="tag">근태관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">계약 완료</span></li>
//               </ul>
//             </div>

//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>

//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 공식 사이트</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </li>
//   `;

//   const target = document.querySelector('.product_card.product_07');
//   if (target) target.innerHTML = product07;
// }

// // 동일한 방식으로 renderProduct08, renderProduct09, renderProduct10 작성 가능


// function renderProduct07() {
//   const product07 = `
//     <li class="structured-item product_card product_07">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_07.png" alt="PRODUCT 07 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">업무 협업</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">PRODUCT 07</span>
//                   </a>
//                 </div>
//                 <p class="company_name">회사명</p>
//                 <div class="tags">
//                   <span class="tag">협업툴</span>
//                   <span class="tag">업무관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2021.01.01 ~ 2026.12.31</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">중앙조달계약</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>

//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>

//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 공식 사이트</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </li>
//   `;
//   const target = document.querySelector('.product_card.product_07');
//   if (target) target.innerHTML = product07;
// }

// function renderProduct08() {
//   const product08 = `
//     <li class="structured-item product_card product_08">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_08.png" alt="PRODUCT 08 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">데이터 관리</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">PRODUCT 08</span>
//                   </a>
//                 </div>
//                 <p class="company_name">회사명</p>
//                 <div class="tags">
//                   <span class="tag">데이터 분석</span>
//                   <span class="tag">시각화</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2020.05.10 ~ 2025.05.09</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">카카오</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">중앙조달계약</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>

//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>

//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </li>
//   `;
//   const target = document.querySelector('.product_card.product_08');
//   if (target) target.innerHTML = product08;
// }

// function renderProduct09() {
//   const product09 = `
//     <li class="structured-item product_card product_09">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_09.png" alt="가온누리 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">협업</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">가온누리 (ezEKP365G)</span>
//                   </a>
//                 </div>
//                 <p class="company_name">주식회사 가온아이</p>
//                 <div class="tags">
//                   <span class="tag">협업</span>
//                   <span class="tag">포탈</span>
//                   <span class="tag">전자결재</span>
//                   <span class="tag">메일</span>
//                   <span class="tag">일정관리</span>
//                   <span class="tag">게시판</span>
//                   <span class="tag">자원관리</span>
//                   <span class="tag">근태관리</span>
//                   <span class="tag">업무관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">중앙조달계약</strong><span class="info_value value">계약 완료</span></li>
//               </ul>
//             </div>

//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>

//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 공식 사이트</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">중앙조달계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">조달청 서비스몰 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </li>
//   `;
//   const target = document.querySelector('.product_card.product_09');
//   if (target) target.innerHTML = product09;
// }

// function renderProduct10() {
//   const product10 = `
//     <li class="structured-item product_card product_10">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_10.png" alt="올샵 ERP 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">협업</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">올샵(ALL#) ERP</span>
//                   </a>
//                 </div>
//                 <p class="company_name">씨앤에프 시스템</p>
//                 <div class="tags">
//                   <span class="tag">협업</span>
//                   <span class="tag">인사 급여</span>
//                   <span class="tag">예산 재무</span>
//                   <span class="tag">회계 결산</span>
//                   <span class="tag">계약 물품</span>
//                   <span class="tag">세무관리</span>
//                   <span class="tag">교육 회원</span>
//                   <span class="tag">차량관리</span>
//                   <span class="tag">자원관리</span>
//                 </div>
//               </div>
//             </div>

//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">중앙조달계약</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>

//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>

//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 공식 사이트</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </li>
//   `;
//   const target = document.querySelector('.product_card.product_10');
//   if (target) target.innerHTML = product10;
// }



function renderProduct06() {
  const product06 = `
    <li class="structured-item product_card product_06">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_06.png" alt="하이웍스 단독 구축형 웹메일 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">메일</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">하이웍스 단독 구축형 웹메일</span>
                  </a>
                </div>
                <p class="company_name">가비아</p>
                <div class="tags">
                  <span class="tag">메일</span>
                  <span class="tag">구축형</span>
                  <span class="tag">그룹웨어</span>
                </div>
              </div>
            </div>

            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">중앙조달계약</strong><span class="info_value value">해당 없음</span></li>
              </ul>
            </div>

            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>

            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </li>
  `;
  const target = document.querySelector('.product_card.product_06');
  if (target) target.innerHTML = product06;
}


// function renderProduct06() {
//   const product06 = `
//     <li class="structured-item product_card product_06">
//       <div class="product_item_inner">
//         <div class="box_logo">
//           <img src="../img/saas_img/4_privateSaaS/logo_06.png" alt="플렉시 ERP 로고" class="viewer">
//         </div>
//         <div class="box_txt">
//           <div class="box_txt_inner">
//             <div class="card_top">
//               <span class="krds-badge bg-primary">협업</span>
//             </div>
//             <div class="card-body">
//               <div class="c-text">
//                 <div class="c-tit">
//                   <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
//                     <span class="product_name">플렉시 ERP</span>
//                   </a>
//                 </div>
//                 <p class="company_name">주식회사 플렉시</p>
//                 <div class="tags">
//                   <span class="tag">협업</span>
//                   <span class="tag">인사</span>
//                   <span class="tag">급여</span>
//                   <span class="tag">재무</span>
//                   <span class="tag">회계</span>
//                   <span class="tag">물품관리</span>
//                   <span class="tag">교육관리</span>
//                 </div>
//               </div>
//             </div>
//             <div class="wrap_detail_info">
//               <ul class="detail_info_list">
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
//                 <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
//               </ul>
//             </div>
//             <div class="b_box">
//               <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
//             </div>
//             <div class="card-btm">
//               <div class="wrap_link_area">
//                 <div class="link_area">
//                   <span class="link_label">서비스 공식 사이트</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
//                 </div>
//                 <div class="link_area">
//                   <span class="link_label">기관직접계약</span>
//                   <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   `;
//   const target = document.querySelector('.product_card.product_06');
//   if (target) target.innerHTML = product06;
// }

function renderProduct07() {
  const product07 = `
    <li class="structured-item product_card product_07">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_07.png" alt="wehagov (위하고v) 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">협업</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">wehagov (위하고v)</span>
                  </a>
                </div>
                <p class="company_name">더존비즈온</p>
                <div class="tags">
                  <span class="tag">협업</span>
                  <span class="tag">메신저</span>
                  <span class="tag">화상회의</span>
                  <span class="tag">웹 스토리지</span>
                  <span class="tag">거래처 관리</span>
                  <span class="tag">연락처</span>
                  <span class="tag">일정관리</span>
                  <span class="tag">근태관리</span>
                </div>
              </div>
            </div>
            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">계약 완료</span></li>
              </ul>
            </div>
            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>
            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
  const target = document.querySelector('.product_card.product_07');
  if (target) target.innerHTML = product07;
}

function renderProduct08() {
  const product08 = `
    <li class="structured-item product_card product_08">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_08.png" alt="클라우다이크 공공기관용 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">협업</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">클라우다이크 공공기관용</span>
                  </a>
                </div>
                <p class="company_name">주식회사 클라우다이크</p>
                <div class="tags">
                  <span class="tag">협업</span>
                  <span class="tag">데이터 관리</span>
                  <span class="tag">데이터저장</span>
                  <span class="tag">다중기기호환</span>
                  <span class="tag">파일공유</span>
                  <span class="tag">문서 뷰어</span>
                </div>
              </div>
            </div>
            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
              </ul>
            </div>
            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>
            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
  const target = document.querySelector('.product_card.product_08');
  if (target) target.innerHTML = product08;
}

function renderProduct09() {
  const product09 = `
    <li class="structured-item product_card product_09">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_09.png" alt="가온누리 (ezEKP365G) 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">협업</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">가온누리 (ezEKP365G)</span>
                  </a>
                </div>
                <p class="company_name">주식회사 가온아이</p>
                <div class="tags">
                  <span class="tag">협업</span>
                  <span class="tag">포탈</span>
                  <span class="tag">전자결재</span>
                  <span class="tag">메일</span>
                  <span class="tag">일정관리</span>
                  <span class="tag">게시판</span>
                  <span class="tag">자원관리</span>
                  <span class="tag">근태관리</span>
                  <span class="tag">업무관리</span>
                </div>
              </div>
            </div>
            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">계약 완료</span></li>
              </ul>
            </div>
            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>
            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
  const target = document.querySelector('.product_card.product_09');
  if (target) target.innerHTML = product09;
}

function renderProduct10() {
  const product10 = `
    <li class="structured-item product_card product_10">
      <div class="product_item_inner">
        <div class="box_logo">
          <img src="../img/saas_img/4_privateSaaS/logo_10.png" alt="올샵(ALL#) ERP 로고" class="viewer">
        </div>
        <div class="box_txt">
          <div class="box_txt_inner">
            <div class="card_top">
              <span class="krds-badge bg-primary">협업</span>
            </div>
            <div class="card-body">
              <div class="c-text">
                <div class="c-tit">
                  <a href="공공용 민간 SaaS_상세.html" target="_self" title="상세 페이지 이동">
                    <span class="product_name">올샵(ALL#) ERP</span>
                  </a>
                </div>
                <p class="company_name">씨앤에프 시스템</p>
                <div class="tags">
                  <span class="tag">협업</span>
                  <span class="tag">인사 급여</span>
                  <span class="tag">예산 재무</span>
                  <span class="tag">회계 결산</span>
                  <span class="tag">계약 물품</span>
                  <span class="tag">세무관리</span>
                  <span class="tag">교육 회원</span>
                  <span class="tag">차량관리</span>
                  <span class="tag">자원관리</span>
                </div>
              </div>
            </div>
            <div class="wrap_detail_info">
              <ul class="detail_info_list">
                <li class="detail_info_list_item c-date"><strong class="info_tit key">CSAP 인증</strong><span class="info_value value">간편</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">인증 날짜</strong><span class="info_value value">2017.07.22 ~ 2026.07.21</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">이용 인프라</strong><span class="info_value value">NHN 클라우드(공공)</span></li>
                <li class="detail_info_list_item c-date"><strong class="info_tit key">조달청 서비스몰</strong><span class="info_value value">해당 없음</span></li>
              </ul>
            </div>
            <div class="b_box">
              <p class="before_mark medal_icon">국가정보원 공시 국가공공기관 도입 가능 <span>클라우드 컴퓨팅 서비스</span></p>
            </div>
            <div class="card-btm">
              <div class="wrap_link_area">
                <div class="link_area">
                  <span class="link_label">서비스 공식 사이트</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary" title="새 창 열림 - 공식 홈페이지로 이동">공식 사이트 이동 <i class="svg-icon ico-go"></i></a>
                </div>
                <div class="link_area">
                  <span class="link_label">기관직접계약</span>
                  <a href="javascript:;" target="_blank" class="krds-btn medium tertiary">이용지원시스템 <i class="svg-icon ico-go"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
    const target = document.querySelector('.product_card.product_10');
  if (target) target.innerHTML = product10;
}




document.addEventListener("DOMContentLoaded", function() {
  // product 카드 렌더 함수 호출 (오름차순)
  renderProduct01();
  renderProduct02();
  renderProduct03();
  renderProduct04();
  renderProduct05();
  renderProduct06();
  renderProduct07();
  renderProduct08();
  renderProduct09();
  renderProduct10();
  
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: 300
    });
  }
});
