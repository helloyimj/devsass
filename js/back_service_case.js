/* 서비스 사례*/


/* 서비스 사례 상단 타이틀 */
$(document).ready(function () {

	var page_title_rep_case = "";
	page_title_rep_case +=    '<h2 class="page_title title_underline">서비스 사례</h2>'; 
	page_title_rep_case +=    '<h3>더 빠르게, 더 간편하게<br />내게 가장 익숙한 플랫폼에서 공공서비스를<br class="block_480"/> 이용할 수 있습니다.</h3>'; 

	$(".article01 .page_title_rep_case").html(page_title_rep_case);
});


/* 적용사례_서비스 사례 상단 페이지 이동 */
$(document).ready(function () {

	var page_rep_case_list = "";
	page_rep_case_list +=   '<!-- 서비스별 선택 영역 PC 버전 -->'; 

	page_rep_case_list +=    '<div class="slide_box">'; 
	page_rep_case_list +=      '<!-- slide -->'; 
	page_rep_case_list +=      '<div class="swiper slide_service swiper-container">'; 
	page_rep_case_list +=        '<div class="service_list swiper-wrapper">'; 
	page_rep_case_list +=            '<div class="swiper-slide">'; 

	page_rep_case_list +=   '<div class="only_pc">'; 

	page_rep_case_list +=       '<ul class="wrap_select_link">'; 
	page_rep_case_list +=           '<li><a href="srtBook.html" target="_self" class="service_item item_srt" title="SRT 승차권 예매 서비스별 사례 소개 부분으로 이동">SRT 승차권 예매</a></li>'; 
	page_rep_case_list +=           '<li><a href="carInspBook.html" target="_self" class="service_item item_carcheck" title="자동차 검사 예약 서비스별 사례 소개 부분으로 이동">자동차 검사 예약</a></li>'; 
	page_rep_case_list +=           '<li><a href="natArbRes.html" target="_self" class="service_item item_ntArbor" title="국립수목원 예약 서비스별 사례 소개 부분으로 이동">국립수목원 예약</a></li>'; 
	page_rep_case_list +=           '<li><a href="sejongArbRes.html" target="_self" class="service_item item_sjbdarboretum" title="세종·백두대간수목원 예약 서비스별 사례 소개 부분으로 이동">세종·백두대간수목원 예약</a></li>'; 
	page_rep_case_list +=           '<li><a href="incMapServ.html" target="_self" class="service_item item_hta" title="인천공항 지도 서비스 서비스별 사례 소개 부분으로 이동">인천공항 지도 서비스</a></li>'; 
	page_rep_case_list +=           '<li><a href="ktxBook.html" target="_self" class="service_item item_korail" title="KTX 승차권 예매 서비스별 사례 소개 부분으로 이동">KTX 승차권 예매</a></li>'; 
	page_rep_case_list +=           '<li><a href="recForestRes.html" target="_self" class="service_item item_forest" title="휴양림 예약 서비스별 사례 소개 부분으로 이동">휴양림 예약</a></li>'; 
	page_rep_case_list +=           '<li><a href="voucherCultureUse.html" target="_self" class="service_item item_mnuriApi" title="문화누리카드 이용 서비스별 사례 소개 부분으로 이동">문화누리카드 이용</a></li>'; 

	page_rep_case_list +=           '<li><a href="milExamChoice.html" class="service_item item_" target="_self" title="병역판정검사 본인선택 서비스별 사례 소개 부분으로 이동">병역판정검사 본인선택</a></li>'; 
	page_rep_case_list +=           '<li><a href="milTrainSch.html" class="service_item item_" target="_self" title="동원훈련 일정조회 서비스별 사례 소개 부분으로 이동">동원훈련 일정조회</a></li>'; 
	page_rep_case_list +=           '<li><a href="loanDebtRep.html" class="service_item item_" target="_self" title="취업 후 상환 학자금대출 채무자 신고 서비스별 사례 소개 부분으로 이동">취업 후 상환 학자금대출 채무자 신고</a></li>'; 
	page_rep_case_list +=           '<li><a href="evCharger.html" class="service_item item_" target="_self" title="전기차 충전기 불편 신고 서비스별 사례 소개 부분으로 이동">전기차 충전기 불편 신고</a></li>'; 
	page_rep_case_list +=           '<li><a href="eduBook.html" class="service_item item_" target="_self" title="벌점감경교육 예약 서비스별 사례 소개 부분으로 이동">벌점감경교육 예약</a></li>'; 
	page_rep_case_list +=           '<li><a href="teleOpt.html" class="service_item item_" target="_self" title="전화권유판매 수신거부 등록 서비스별 사례 소개 부분으로 이동">전화권유판매 수신거부 등록</a></li>'; 
	page_rep_case_list +=           '<li><a href="lostFound.html" class="service_item item_" target="_self" title="분실 신고 습득물 조회 서비스별 사례 소개 부분으로 이동">분실 신고 습득물 조회</a></li>'; 
	page_rep_case_list +=           '<li><a href="forestryWelfare.html" class="service_item item_" target="_self" title="산림복지시설 예약 서비스별 사례 소개 부분으로 이동">산림복지시설 예약</a></li>'; 
	page_rep_case_list +=       '</ul>';
	page_rep_case_list +=   '</div>'; 
	
	page_rep_case_list +=      '<div class="wrap-slide-box">'; 
	page_rep_case_list +=        '<button type="button" class="swiper-button-prev" title="슬라이드 이전 보기"></button>'; 
	page_rep_case_list +=        '<button type="button" class="swiper-button-next" title="슬라이드 다음 보기"></button>';
	page_rep_case_list +=      '</div>'; 
	page_rep_case_list +=      '<div class="swiper-pagination"></div>'; 

	page_rep_case_list +=   '</div>'; 

	// var page_rep_case_list = "";
	// page_rep_case_list +=   '<!-- 서비스별 선택 영역 PC 버전 -->'; 

	// page_rep_case_list +=    '<div class="slide_box">'; 
	// page_rep_case_list +=      '<!-- slide -->'; 
	// page_rep_case_list +=      '<div class="swiper slide_service swiper-container">'; 
	// page_rep_case_list +=        '<div class="service_list swiper-wrapper">'; 
	// page_rep_case_list +=            '<div class="swiper-slide">'; 

	// page_rep_case_list +=   '<div class="only_pc">'; 
	// page_rep_case_list +=       '<ul class="wrap_select_link">'; 
	// page_rep_case_list +=           '<li><a href="srtBook.html" target="_self" class="service_item item_srt" title="SRT 승차권 예매 서비스별 사례 소개 부분으로 이동">SRT 승차권 예매</a></li>'; 
	// page_rep_case_list +=           '<li><a href="carInspBook.html" target="_self" class="service_item item_carcheck" title="자동차 검사 예약 서비스별 사례 소개 부분으로 이동">자동차 검사 예약</a></li>'; 
	// page_rep_case_list +=           '<li><a href="natArbRes.html" target="_self" class="service_item item_ntArbor" title="국립수목원 예약 서비스별 사례 소개 부분으로 이동">국립수목원 예약</a></li>'; 
	// page_rep_case_list +=           '<li><a href="sejongArbRes.html" target="_self" class="service_item item_sjbdarboretum" title="세종·백두대간수목원 예약 서비스별 사례 소개 부분으로 이동">세종·백두대간수목원 예약</a></li>'; 
	// page_rep_case_list +=           '<li><a href="incMapServ.html" target="_self" class="service_item item_hta" title="인천공항 지도 서비스 서비스별 사례 소개 부분으로 이동">인천공항 지도 서비스</a></li>'; 
	// page_rep_case_list +=           '<li><a href="ktxBook.html" target="_self" class="service_item item_korail" title="KTX 승차권 예매 서비스별 사례 소개 부분으로 이동">KTX 승차권 예매</a></li>'; 
	// page_rep_case_list +=           '<li><a href="recForestRes.html" target="_self" class="service_item item_forest" title="휴양림 예약 서비스별 사례 소개 부분으로 이동">휴양림 예약</a></li>'; 
	// page_rep_case_list +=           '<li><a href="voucherCultureUse.html" target="_self" class="service_item item_mnuriApi" title="문화누리카드 이용 서비스별 사례 소개 부분으로 이동">문화누리카드 이용</a></li>'; 

	// page_rep_case_list +=           '<li><a href="milExamChoice.html" target="_self" title="병역판정검사 본인선택">병역판정검사 본인선택</a></li>'; 
	// page_rep_case_list +=           '<li><a href="milTrainSch.html" target="_self" title="동원훈련 일정조회">동원훈련 일정조회</a></li>'; 
	// page_rep_case_list +=           '<li><a href="loanDebtRep.html" target="_self" title="취업 후 상환 학자금대출 채무자 신고">취업 후 상환 학자금대출 채무자 신고</a></li>'; 
	// page_rep_case_list +=           '<li><a href="evCharger.html" target="_self" title="전기차 충전기 불편 신고">전기차 충전기 불편 신고</a></li>'; 
	// page_rep_case_list +=           '<li><a href="eduBook.html" target="_self" title="벌점감경교육 예약">벌점감경교육 예약</a></li>'; 
	// page_rep_case_list +=           '<li><a href="teleOpt.html" target="_self" title="전화권유판매 수신거부 등록">전화권유판매 수신거부 등록</a></li>'; 
	// page_rep_case_list +=           '<li><a href="lostFound.html" target="_self" title="분실 신고 습득물 조회">분실 신고 습득물 조회</a></li>'; 
	// page_rep_case_list +=           '<li><a href="forestryWelfare.html" target="_self" title="산림복지시설 예약">산림복지시설 예약</a></li>'; 
	// page_rep_case_list +=       '</ul>'; 
	// page_rep_case_list +=   '</div>'; 
	// page_rep_case_list +=   '</div>'; 
	// // page_rep_case_list +=   '</div>'; 

	// page_rep_case_list +=      '<div class="wrap-slide-box">'; 
	// page_rep_case_list +=        '<button type="button" class="swiper-button-prev" title="슬라이드 이전 보기"></button>'; 
	// page_rep_case_list +=        '<button type="button" class="swiper-button-next" title="슬라이드 다음 보기"></button>';
	// page_rep_case_list +=      '</div>'; 
	// page_rep_case_list +=      '<div class="swiper-pagination"></div>'; 

	// page_rep_case_list +=   '</div>'; 


	//  '<!-- 서비스별 선택 콤보 박스 모바일 버전 -->';  
	page_rep_case_list +=   '<div class="only_mob">'; 
	page_rep_case_list +=       '<div class="combo_box_wrap">'; 
	page_rep_case_list +=           '<h3>서비스별 사례를 찾아보세요!</h3>'; 
	page_rep_case_list +=           '<label for="select_case" class="sr_only">서비스별 사례 선택 목록 열기 : </label>';
	page_rep_case_list +=               '<select onchange="if(this.value) location.href=(this.value);" id="select_case" class="combo_box">'; 
	page_rep_case_list +=                   '<option value="srtBook.html" class="service_option">SRT 승차권 예매</option>'; 
	page_rep_case_list +=                   '<option value="carInspBook.html" class="service_option">자동차 검사 예약</option>'; 
	page_rep_case_list +=                   '<option value="natArbRes.html" class="service_option">국립수목원 예약</option>'; 
	page_rep_case_list +=                   '<option value="sejongArbRes.html" class="service_option">세종·백두대간수목원 예약</option>'; 
	page_rep_case_list +=                   '<option value="incMapServ.html" class="service_option">인천공항 지도 서비스</option>';     
	page_rep_case_list +=                   '<option value="ktxBook.html" class="service_option">KTX 승차권 예매</option>'; 
	page_rep_case_list +=                   '<option value="recForestRes.html" class="service_option">휴양림 예약</option>';     
	page_rep_case_list +=                   '<option value="cultureCardUse.html" class="service_option">문화누리카드 이용</option>';

	page_rep_case_list +=                   '<option value="milExamChoice.html" class="service_option">병역판정검사 본인선택</option>';   
	page_rep_case_list +=                   '<option value="milTrainSch.html" class="service_option">동원훈련 일정조회</option>';   
	page_rep_case_list +=                   '<option value="loanDebtRep.html" class="service_option">취업 후 상환 학자금대출 채무자 신고</option>';   
	page_rep_case_list +=                   '<option value="evCharger.html" class="service_option">전기차 충전기 불편 신고</option>';   
	page_rep_case_list +=                   '<option value="eduBook.html" class="service_option">벌점감경교육 예약</option>';   
	page_rep_case_list +=                   '<option value="teleOpt.html" class="service_option">전화권유판매 수신거부 등록</option>';   
	page_rep_case_list +=                   '<option value="lostFound.html" class="service_option">분실 신고 / 습득물 조회</option>';   
	page_rep_case_list +=                   '<option value="forestryWelfare.html" class="service_option">산림복지시설 예약</option>';
	page_rep_case_list +=               '</select>';     
	page_rep_case_list +=       '</div>'; 
	page_rep_case_list +=   '</div>'; 

	$(".article02 .page_rep_case_list").html(page_rep_case_list);
});


/* 모바일: 셀렉트 박스 해당하는 페이지의 옵션이 선택되어 있도록  */
$(document).ready(function() {
	// 각 케이스에 대한 옵션 값 설정
	var optionValues = {
			"page_case_korail": "ktxBook.html",
			"page_case_srt": "srtBook.html",
			"page_case_ntArbor": "natArbRes.html",
			"page_case_sjbdarboretum": "sejongArbRes.html",
			"page_case_hta": "incMapServ.html",
			"page_case_carcheck": "carInspBook.html",
			"page_case_forest": "recForestRes.html",
			"page_case_mnuriApi": "voucherCultureUse.html"
			
			// page_case_ +=                   "milExamChoice.html";   
			// page_case_ +=                   "milTrainSch.html";   
			// page_case_ +=                   "loanDebtRep.html";   
			// page_case_ +=                   "evCharger.html";   
			// page_case_ +=                   "eduBook.html";   
			// page_case_ +=                   "teleOpt.html";   
			// page_case_ +=                   "lostFound.html";   
			// page_case_sooperang +=                   "forestryWelfare.html";
	};

	// 각 케이스에 대해 해당 옵션을 선택
	for (var key in optionValues) {
			if (optionValues.hasOwnProperty(key)) {
					$("." + key + " #select_case").val(optionValues[key]);
			}
	}
});