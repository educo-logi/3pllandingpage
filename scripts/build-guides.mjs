import { writeFile } from "node:fs/promises";
import { shoppingmallArticles } from "./guide-data-shoppingmall.mjs";

const baseUrl = "https://lds1202.github.io/landingpage_001";
const today = "2026-07-27";

const coreArticles = [
  {
    slug: "guide-3pl-basics.html",
    category: "3PL 시작하기",
    title: "3PL 물류대행이란? 처음 맡기기 전에 알아야 할 핵심",
    shortTitle: "3PL 물류대행이란?",
    description:
      "3PL 물류대행의 뜻과 입고, 보관, 재고관리, 포장, 출고, 반품 과정을 한 번에 이해할 수 있도록 정리한 바인그룹 물류 가이드입니다.",
    lead:
      "3PL은 상품을 판매하는 업체를 대신해 입고부터 배송 이후의 재고·반품 관리까지 반복적인 물류 업무를 운영하는 방식입니다.",
    readingTime: "약 7분",
    accent: "purple",
    takeaways: [
      "3PL은 창고 대여가 아니라 물류 운영 과정 전체를 맡기는 서비스입니다.",
      "판매 채널, 상품 특성, 월 출고량에 따라 필요한 업무 범위가 달라집니다.",
      "비용뿐 아니라 재고 정확도, 출고 기준, 소통 방식까지 함께 비교해야 합니다.",
    ],
    sections: [
      {
        id: "definition",
        title: "3PL 물류대행의 의미",
        html: `
          <p><strong>3PL(Third Party Logistics)</strong>은 판매 업체와 소비자 사이에서 제3의 전문 물류사가 입고, 보관, 재고관리, 포장, 출고, 배송 연계와 반품 처리를 운영하는 방식입니다.</p>
          <p>자사몰이나 스마트스토어, 쿠팡에서 주문을 받은 뒤 대표님과 직원이 직접 송장을 출력하고 상품을 포장하는 대신, 정해진 주문 정보와 작업 기준에 따라 물류센터가 출고를 진행합니다.</p>
          <div class="note"><b>핵심</b><span>상품 판매와 마케팅은 브랜드가 담당하고, 반복되는 물류 운영은 전문 센터가 담당하는 구조입니다.</span></div>
        `,
      },
      {
        id: "scope",
        title: "일반적인 3PL 업무 범위",
        html: `
          <div class="process-grid">
            <div><b>01</b><strong>상품 입고</strong><span>수량과 상품 상태를 확인합니다.</span></div>
            <div><b>02</b><strong>검수·보관</strong><span>상품 특성과 출고 빈도에 맞춰 보관합니다.</span></div>
            <div><b>03</b><strong>재고관리</strong><span>입출고와 반품에 따른 수량 변동을 관리합니다.</span></div>
            <div><b>04</b><strong>포장·출고</strong><span>주문 기준에 따라 포장하고 송장을 처리합니다.</span></div>
            <div><b>05</b><strong>배송 연계</strong><span>택배사 인계와 출고 상태를 관리합니다.</span></div>
            <div><b>06</b><strong>반품·교환</strong><span>회수 상품을 확인하고 재고에 반영합니다.</span></div>
          </div>
          <p>필요에 따라 쿠팡 밀크런, 로켓그로스 입고 준비, 합포장, 사은품 동봉, 세트 구성처럼 판매 채널과 브랜드 운영 방식에 맞춘 작업을 추가할 수 있습니다.</p>
        `,
      },
      {
        id: "who",
        title: "어떤 업체에 3PL이 필요한가요?",
        html: `
          <ul class="check-list">
            <li>주문이 늘어 포장과 송장 출력에 많은 시간을 쓰고 있는 업체</li>
            <li>자사몰, 스마트스토어, 쿠팡 주문을 각각 처리하는 업체</li>
            <li>창고 공간이나 재고 수량 관리가 부담되는 업체</li>
            <li>출고량은 적지만 안정적인 물류 프로세스를 만들고 싶은 업체</li>
            <li>반품·교환이 늘어 판매 업무에 집중하기 어려운 업체</li>
            <li>쿠팡 밀크런이나 로켓그로스 대응이 필요한 판매자</li>
          </ul>
          <p>출고량이 많아진 뒤에만 이용하는 서비스는 아닙니다. 소량 단계부터 작업 기준과 재고 흐름을 정리해두면 물량이 증가했을 때 운영을 확장하기 수월합니다.</p>
        `,
      },
      {
        id: "cost",
        title: "3PL 비용은 어떻게 구성되나요?",
        html: `
          <p>견적은 보통 입고, 보관, 작업, 포장 자재, 출고, 택배, 반품과 추가 작업 항목으로 구성됩니다. 같은 월 출고량이라도 상품 크기, 중량, 보관 공간, 합포장 여부와 포장 난이도에 따라 비용이 달라질 수 있습니다.</p>
          <div class="table-wrap">
            <table>
              <thead><tr><th>항목</th><th>확인 내용</th></tr></thead>
              <tbody>
                <tr><td>입고</td><td>박스·파렛트 단위, 검수 범위, 바코드 작업</td></tr>
                <tr><td>보관</td><td>상품 부피, 재고량, 보관 기간과 공간</td></tr>
                <tr><td>출고</td><td>단품·합포장, 일 평균 주문 수, 마감 시간</td></tr>
                <tr><td>추가 작업</td><td>세트 구성, 사은품, 라벨, 쿠팡 입고 준비</td></tr>
                <tr><td>반품</td><td>검수 기준, 재포장, 정상·불량 재고 분류</td></tr>
              </tbody>
            </table>
          </div>
          <p>단가 한 항목만 비교하기보다 현재 직접 출고에 들어가는 택배비, 인건비, 포장 자재, 창고 공간과 관리 시간을 함께 계산해야 실제 차이를 판단할 수 있습니다.</p>
        `,
      },
      {
        id: "selection",
        title: "물류대행 업체 선택 체크리스트",
        html: `
          <ol class="number-list">
            <li><b>판매 채널 대응</b><span>현재 운영 중인 쇼핑몰과 앞으로 확장할 채널을 처리할 수 있는지 확인합니다.</span></li>
            <li><b>재고관리 기준</b><span>입고, 출고, 반품 수량을 어떤 기준과 주기로 공유하는지 확인합니다.</span></li>
            <li><b>포장 작업 기준</b><span>브랜드별 포장, 합포장, 사은품과 라벨 작업 가능 여부를 확인합니다.</span></li>
            <li><b>대형화물·특수 조건</b><span>상품 크기와 중량, 보관 조건에 맞는 공간과 작업 환경인지 확인합니다.</span></li>
            <li><b>소통과 문제 대응</b><span>누락, 파손, 반품 등 예외 상황의 연락 창구와 처리 절차를 확인합니다.</span></li>
          </ol>
        `,
      },
    ],
    faq: [
      ["출고량이 적어도 3PL을 이용할 수 있나요?", "가능합니다. 센터의 운영 기준과 상품 조건에 따라 소량 출고 업체도 상담할 수 있습니다."],
      ["자사몰과 쿠팡 주문을 함께 처리할 수 있나요?", "판매 채널별 주문 처리 방식과 출고 기준을 확인한 뒤 통합 운영 범위를 정할 수 있습니다."],
      ["상품을 모두 한 번에 입고해야 하나요?", "보관 공간과 판매 계획에 맞춰 초기 입고량과 추가 입고 주기를 협의할 수 있습니다."],
    ],
  },
  {
    slug: "guide-self-shipping-vs-3pl.html",
    category: "운영 방식 비교",
    title: "자체출고와 3PL의 차이: 우리 브랜드에 맞는 선택 기준",
    shortTitle: "자체출고와 3PL의 차이",
    description:
      "자체출고와 3PL 물류대행의 비용, 운영 시간, 재고관리, 확장성을 비교하고 전환 시점을 판단할 수 있는 체크리스트를 제공합니다.",
    lead:
      "자체출고는 통제력이 높고, 3PL은 반복 업무와 공간 부담을 줄이는 데 유리합니다. 중요한 것은 주문 수보다 현재 운영 병목을 정확히 보는 것입니다.",
    readingTime: "약 8분",
    accent: "blue",
    takeaways: [
      "초기 자체출고는 상품과 고객 반응을 직접 익히는 데 도움이 됩니다.",
      "주문 증가로 핵심업무 시간이 줄어들면 전체 비용을 기준으로 3PL을 비교해야 합니다.",
      "완전 전환 전 일부 상품이나 채널부터 단계적으로 맡기는 방법도 가능합니다.",
    ],
    sections: [
      {
        id: "difference",
        title: "자체출고와 3PL의 기본 차이",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>구분</th><th>자체출고</th><th>3PL 물류대행</th></tr></thead>
              <tbody>
                <tr><td>운영 주체</td><td>브랜드 내부 인력</td><td>전문 물류센터</td></tr>
                <tr><td>공간</td><td>사무실·창고 직접 확보</td><td>필요 조건에 맞춰 센터 이용</td></tr>
                <tr><td>포장·출고</td><td>주문마다 직접 처리</td><td>사전 협의한 기준으로 처리</td></tr>
                <tr><td>재고관리</td><td>자체 장부와 시스템 관리</td><td>입출고·반품 흐름을 센터와 관리</td></tr>
                <tr><td>확장성</td><td>물량 증가 시 인력·공간 추가</td><td>운영 조건을 조정해 확장</td></tr>
              </tbody>
            </table>
          </div>
          <p>어느 방식이 항상 더 좋다고 단정할 수는 없습니다. 상품 수, 주문 변동, 포장 난이도, 고객 응대 방식과 내부 인력의 역할에 따라 적합한 선택이 달라집니다.</p>
        `,
      },
      {
        id: "self",
        title: "자체출고가 적합한 상황",
        html: `
          <ul class="check-list">
            <li>출고량이 매우 적고 상품과 포장 방식을 계속 실험하는 초기 단계</li>
            <li>주문 제작이나 개인화처럼 매번 작업 내용이 크게 달라지는 상품</li>
            <li>대표나 담당자가 직접 상품 상태를 확인해야 하는 운영 구조</li>
            <li>이미 충분한 보관 공간과 전담 인력을 확보한 경우</li>
          </ul>
          <p>초기에는 직접 포장하면서 고객이 어떤 구성을 좋아하는지, 어떤 문의와 반품이 발생하는지 파악할 수 있습니다. 이 경험은 나중에 3PL 작업 기준서를 만들 때 중요한 자료가 됩니다.</p>
        `,
      },
      {
        id: "signals",
        title: "3PL 전환을 검토할 신호",
        html: `
          <div class="signal-grid">
            <div><b>시간</b><strong>출고 때문에 판매 업무가 밀림</strong><span>마케팅, 상품 기획, 고객 대응 시간이 계속 줄어듭니다.</span></div>
            <div><b>공간</b><strong>사무실이 재고로 가득 참</strong><span>재고 증가 때마다 별도 창고와 이동 작업이 필요합니다.</span></div>
            <div><b>정확도</b><strong>누락과 오배송이 반복됨</strong><span>채널별 주문을 따로 처리하면서 실수가 증가합니다.</span></div>
            <div><b>변동</b><strong>행사 때 주문을 감당하기 어려움</strong><span>평소와 성수기의 작업량 차이가 커집니다.</span></div>
          </div>
          <p>한 가지 신호보다 여러 문제가 동시에 나타날 때 전환 효과가 커질 가능성이 높습니다. 특히 대표와 핵심 직원이 포장에 계속 투입된다면 보이지 않는 기회비용까지 계산해야 합니다.</p>
        `,
      },
      {
        id: "cost-compare",
        title: "비용은 같은 기준으로 비교해야 합니다",
        html: `
          <p>자체출고의 택배비와 3PL의 출고 단가만 비교하면 판단이 왜곡될 수 있습니다. 아래 항목을 월 단위로 함께 계산하는 것이 좋습니다.</p>
          <div class="formula">
            <b>자체출고 총비용</b>
            <span>택배비 + 포장 자재 + 작업 인건비 + 창고·사무실 공간 + 시스템 비용 + 오류·반품 처리 비용</span>
          </div>
          <div class="formula">
            <b>3PL 총비용</b>
            <span>입고 + 보관 + 작업·포장 + 출고·택배 + 추가 작업 + 반품 처리 비용</span>
          </div>
          <p>여기에 물류에서 확보한 시간을 매출 활동에 사용할 수 있는지도 함께 판단해야 합니다. 단순히 가장 낮은 단가보다 운영이 예측 가능해지는지가 중요합니다.</p>
        `,
      },
      {
        id: "transition",
        title: "안전하게 전환하는 방법",
        html: `
          <ol class="number-list">
            <li><b>상품·재고 자료 정리</b><span>SKU, 규격, 바코드, 정상·불량 기준을 정리합니다.</span></li>
            <li><b>포장 기준서 작성</b><span>포장 순서, 완충재, 사은품, 합포장 규칙을 문서화합니다.</span></li>
            <li><b>소량 테스트 출고</b><span>일부 상품이나 주문으로 실제 작업 결과를 확인합니다.</span></li>
            <li><b>재고 수량 대조</b><span>이관 전후 재고를 확인하고 차이를 정리합니다.</span></li>
            <li><b>운영 피드백 반영</b><span>초기 출고에서 발견한 예외 사항을 기준서에 추가합니다.</span></li>
          </ol>
          <div class="note"><b>전환 팁</b><span>전체 상품을 한 번에 옮기기 부담스럽다면 판매량이 안정적인 상품이나 특정 채널부터 시작할 수 있습니다.</span></div>
        `,
      },
    ],
    faq: [
      ["월 몇 건부터 3PL이 유리한가요?", "정해진 기준은 없습니다. 출고 건수뿐 아니라 상품 크기, 포장 시간, 공간 비용과 내부 인력 투입 시간을 함께 봐야 합니다."],
      ["일부 상품만 먼저 맡길 수 있나요?", "상품군과 재고관리 방식에 따라 단계적인 전환을 협의할 수 있습니다."],
      ["브랜드 포장 방식을 유지할 수 있나요?", "포장 자재와 작업 기준을 사전에 정리하면 가능한 범위와 추가 작업 비용을 상담할 수 있습니다."],
    ],
  },
  {
    slug: "guide-3pl-cost-saving.html",
    category: "물류비 절감",
    title: "3PL로 물류비를 절감하는 방법: 비용 항목별 점검 가이드",
    shortTitle: "3PL 물류비 절감 방법",
    description:
      "택배비, 포장 인건비, 자재, 보관 공간, 재고와 반품 비용을 기준으로 3PL 물류비 절감 가능성을 확인하는 실무 가이드입니다.",
    lead:
      "물류비 절감은 택배 단가 하나를 낮추는 일이 아닙니다. 포장 인력, 보관 공간, 재고 오류와 반품까지 전체 운영비를 함께 줄이는 과정입니다.",
    readingTime: "약 8분",
    accent: "green",
    takeaways: [
      "현재 물류비를 고정비와 변동비로 나누면 절감 지점을 찾기 쉽습니다.",
      "소량 업체도 센터 전체 출고 규모를 기반으로 한 운영 조건을 상담할 수 있습니다.",
      "가장 낮은 견적보다 누락된 비용과 추가 작업 조건을 확인하는 것이 중요합니다.",
    ],
    sections: [
      {
        id: "cost-structure",
        title: "먼저 현재 물류비를 모두 찾으세요",
        html: `
          <p>택배사에 지불하는 금액만 물류비로 생각하기 쉽지만, 실제 비용은 더 넓습니다. 대표와 직원의 포장 시간, 재고가 차지하는 공간, 포장 자재 구매와 보관, 오배송을 다시 처리하는 비용도 포함됩니다.</p>
          <div class="cost-grid">
            <div><b>배송비</b><span>택배 계약 단가와 부가 비용</span></div>
            <div><b>인건비</b><span>피킹, 포장, 송장, 상하차 시간</span></div>
            <div><b>자재비</b><span>박스, 완충재, 테이프, 라벨</span></div>
            <div><b>공간비</b><span>창고·사무실 임대와 관리 비용</span></div>
            <div><b>재고비</b><span>과잉·부족 재고와 수량 오류</span></div>
            <div><b>예외 비용</b><span>오배송, 파손, 반품·교환 처리</span></div>
          </div>
        `,
      },
      {
        id: "small-volume",
        title: "소량 업체도 단가 경쟁력을 만들 수 있는 이유",
        html: `
          <p>개별 업체의 출고량은 적더라도 물류센터는 여러 업체의 물량을 함께 운영합니다. 따라서 택배, 포장 자재, 작업 인력과 공간을 업체가 각각 준비하는 방식보다 규모의 이점을 활용할 여지가 있습니다.</p>
          <p>다만 모든 상품에 동일한 비용이 적용되는 것은 아닙니다. 상품 크기와 중량, 보관 공간, 포장 방식과 추가 작업 여부에 따라 실제 견적은 달라집니다.</p>
          <div class="note"><b>확인할 점</b><span>‘소량도 대량 단가’는 센터 전체 운영 규모를 활용한다는 의미이며, 업체별 최종 견적은 상품과 작업 조건을 확인한 뒤 결정됩니다.</span></div>
        `,
      },
      {
        id: "saving-points",
        title: "항목별 절감 포인트",
        html: `
          <ol class="number-list">
            <li><b>택배 계약</b><span>개별 출고량이 아닌 센터 운영 규모를 기반으로 가능한 조건을 확인합니다.</span></li>
            <li><b>포장 인력</b><span>주문 변동에 맞춰 직접 인력을 고정적으로 유지하는 부담을 줄입니다.</span></li>
            <li><b>포장 자재</b><span>규격을 단순화하고 사용량을 모아 자재 구매와 보관을 효율화합니다.</span></li>
            <li><b>보관 공간</b><span>판매 계획과 재고 회전율에 맞춰 필요한 보관 조건을 조정합니다.</span></li>
            <li><b>오류와 반품</b><span>출고 기준과 검수 절차를 정해 누락·오배송의 반복 비용을 줄입니다.</span></li>
          </ol>
        `,
      },
      {
        id: "calculation",
        title: "절감 가능성 계산 예시",
        html: `
          <p>아래 방식은 실제 견적이 아니라 현재 비용을 빠뜨리지 않기 위한 예시입니다.</p>
          <div class="table-wrap">
            <table>
              <thead><tr><th>현재 자체출고 항목</th><th>월 비용 기록 방법</th></tr></thead>
              <tbody>
                <tr><td>택배·배송</td><td>기본 운임과 제주·도서, 반품 운임 합계</td></tr>
                <tr><td>작업 인건비</td><td>월 포장 시간 × 실제 시간당 인건비</td></tr>
                <tr><td>자재</td><td>박스, 완충재, 테이프, 라벨 구매액</td></tr>
                <tr><td>공간</td><td>재고가 사용하는 면적의 임대·관리 비용</td></tr>
                <tr><td>오류·반품</td><td>재배송, 폐기, 재포장과 고객 응대 비용</td></tr>
              </tbody>
            </table>
          </div>
          <div class="formula">
            <b>절감률 계산</b>
            <span>(현재 월 물류 총비용 − 3PL 예상 월 총비용) ÷ 현재 월 물류 총비용 × 100</span>
          </div>
          <p>바인그룹 물류센터의 ‘10% 이상 절감 가능성’은 현재 비용 구조와 상품·출고 조건을 확인해볼 수 있다는 의미입니다. 실제 절감 여부와 폭은 업체별로 달라질 수 있습니다.</p>
        `,
      },
      {
        id: "quote",
        title: "견적을 받을 때 빠뜨리면 안 되는 정보",
        html: `
          <ul class="check-list">
            <li>월 평균 출고량과 성수기 최대 출고량</li>
            <li>SKU 수, 평균 재고량과 입고 주기</li>
            <li>상품별 크기와 중량, 대형화물 여부</li>
            <li>단품·합포장 비율과 포장 자재 종류</li>
            <li>자사몰, 스마트스토어, 쿠팡 등 판매 채널</li>
            <li>사은품, 라벨, 세트 구성 등 추가 작업</li>
            <li>월 평균 반품·교환 건수와 검수 기준</li>
          </ul>
          <p>정보가 구체적일수록 예상하지 못한 추가 비용을 줄이고 실제 운영에 가까운 견적을 받을 수 있습니다.</p>
        `,
      },
    ],
    faq: [
      ["3PL을 이용하면 무조건 10% 이상 절감되나요?", "아닙니다. 상품, 물량, 포장과 보관 조건에 따라 결과가 달라집니다. 현재 총비용과 예상 견적을 같은 기준으로 비교해야 합니다."],
      ["견적에서 가장 먼저 봐야 할 항목은 무엇인가요?", "출고 단가뿐 아니라 보관, 자재, 추가 작업, 반품과 최소 비용 조건이 포함됐는지 확인해야 합니다."],
      ["출고량이 적으면 비용이 더 높지 않나요?", "개별 물량은 적어도 센터 전체 출고 규모를 활용할 수 있지만, 최종 비용은 상품과 작업 조건에 따라 산정됩니다."],
    ],
  },
];

const articles = [...coreArticles, ...shoppingmallArticles];

const sharedCss = String.raw`
  :root {
    --ink: #17162f;
    --sub: #5f6472;
    --purple-dark: #2d2367;
    --purple: #6540b5;
    --green: #5eaa38;
    --line: #e3e5ec;
    --soft: #f6f7fb;
    --mint: #eef8f1;
    --lavender: #f2edff;
    --shadow: 0 16px 40px rgba(31, 27, 68, 0.09);
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    color: var(--ink);
    background: #fff;
    font-family: "Pretendard Variable", Pretendard, "Noto Sans KR", Arial, sans-serif;
    letter-spacing: 0;
    word-break: keep-all;
  }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  button { font: inherit; }
  .wrap { width: min(1160px, 100%); margin: 0 auto; padding: 0 24px; }
  .notice {
    padding: 8px 16px;
    background: #fff7ed;
    color: #9a3412;
    text-align: center;
    font-size: 13px;
    font-weight: 850;
  }
  .header {
    position: sticky;
    top: 0;
    z-index: 80;
    background: rgba(255,255,255,.94);
    border-bottom: 1px solid rgba(227,229,236,.95);
    backdrop-filter: blur(14px);
  }
  .header-inner {
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .brand img { width: 150px; height: auto; }
  .brand span {
    padding-left: 12px;
    border-left: 1px solid var(--line);
    color: var(--purple-dark);
    font-size: 15px;
    font-weight: 900;
    white-space: nowrap;
  }
  .nav { display: flex; align-items: center; gap: 22px; font-size: 14px; font-weight: 850; }
  .nav a:not(.nav-cta):hover, .nav a.active { color: var(--purple); }
  .nav-cta, .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 20px;
    border-radius: 999px;
    font-weight: 900;
  }
  .nav-cta, .btn.primary {
    background: linear-gradient(135deg, var(--purple-dark), var(--purple));
    color: #fff;
    box-shadow: 0 12px 24px rgba(72,49,144,.2);
  }
  .btn.secondary { border: 1px solid #d9d4e7; background: #fff; color: var(--purple-dark); }
  .mobile-nav { display: none; align-items: center; gap: 8px; }
  .mobile-nav a {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 999px;
    background: var(--lavender);
    color: var(--purple-dark);
    font-size: 13px;
    font-weight: 900;
  }
  .hub-hero {
    padding: 64px 0 56px;
    background: linear-gradient(135deg, #f1f8ef 0%, #f8f5ff 54%, #eef4ff 100%);
  }
  .hub-hero-grid {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: 48px;
  }
  .eyebrow, .category {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: 7px 12px;
    border-radius: 999px;
    background: var(--lavender);
    color: var(--purple);
    font-size: 13px;
    font-weight: 900;
  }
  h1, h2, h3, p { overflow-wrap: break-word; }
  .hub-hero h1 {
    max-width: 720px;
    margin: 18px 0;
    font-size: clamp(38px, 5.2vw, 62px);
    line-height: 1.12;
    font-weight: 950;
  }
  .hub-hero h1 strong { color: var(--purple); }
  .hub-hero p {
    max-width: 700px;
    margin: 0;
    color: var(--sub);
    font-size: 18px;
    line-height: 1.75;
    font-weight: 700;
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
  .hub-image { position: relative; }
  .hub-image img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: var(--shadow);
  }
  .hub-image-note {
    position: absolute;
    right: 18px;
    bottom: 18px;
    max-width: 260px;
    padding: 16px 18px;
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 14px;
    background: rgba(255,255,255,.92);
    color: var(--purple-dark);
    font-weight: 900;
    box-shadow: 0 12px 28px rgba(24,24,55,.14);
  }
  .section { padding: 76px 0; }
  .section.soft { background: var(--soft); }
  .section-head { max-width: 820px; margin-bottom: 34px; }
  .section-head.center { margin-right: auto; margin-left: auto; text-align: center; }
  .section-head h2 {
    margin: 12px 0 10px;
    font-size: clamp(30px, 4vw, 46px);
    line-height: 1.2;
    font-weight: 950;
  }
  .section-head p { margin: 0; color: var(--sub); font-size: 17px; line-height: 1.7; font-weight: 700; }
  .category-nav { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px; }
  .category-nav a {
    padding: 10px 14px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: #fff;
    color: #464b5b;
    font-size: 14px;
    font-weight: 850;
  }
  .guide-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; }
  .guide-card {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 12px 28px rgba(31,27,68,.06);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .guide-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
  .guide-card-head {
    min-height: 78px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 18px;
    border-bottom: 1px solid var(--line);
    background: linear-gradient(135deg, var(--lavender), var(--mint));
  }
  .guide-card-head b {
    flex: 0 0 44px;
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: rgba(255,255,255,.84);
    color: var(--purple);
    font-size: 18px;
  }
  .guide-card-head span { font-size: 13px; font-weight: 900; color: var(--purple-dark); }
  .guide-card-body { flex: 1; display: flex; flex-direction: column; padding: 22px; }
  .guide-card h3 { margin: 0 0 12px; font-size: 22px; line-height: 1.35; font-weight: 950; }
  .guide-card p { margin: 0; color: var(--sub); font-size: 15px; line-height: 1.7; font-weight: 700; }
  .guide-card-link { margin-top: auto; padding-top: 20px; color: var(--purple); font-size: 14px; font-weight: 900; }
  .coming { opacity: .78; }
  .coming .guide-card-link { color: #727786; }
  .trust-band {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 14px;
  }
  .trust-band div {
    padding: 22px;
    border: 1px solid #e0e8dc;
    border-radius: 14px;
    background: linear-gradient(135deg,#fff,#f1f9ed);
  }
  .trust-band b { display: block; margin-bottom: 8px; color: #397723; font-size: 19px; }
  .trust-band span { color: var(--sub); font-size: 14px; line-height: 1.65; font-weight: 700; }
  .article-hero {
    padding: 54px 0 44px;
    background: linear-gradient(135deg, #f2f8ef 0%, #f7f4ff 55%, #eef4ff 100%);
    border-bottom: 1px solid #e8e8ef;
  }
  .breadcrumbs { display: flex; flex-wrap: wrap; gap: 8px; color: #707585; font-size: 13px; font-weight: 750; }
  .article-hero .category { margin-top: 24px; }
  .article-hero h1 {
    max-width: 900px;
    margin: 16px 0;
    font-size: clamp(36px,5.2vw,58px);
    line-height: 1.16;
    font-weight: 950;
  }
  .article-lead { max-width: 860px; margin: 0; color: #555b6c; font-size: 19px; line-height: 1.75; font-weight: 720; }
  .article-meta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; color: #747989; font-size: 13px; font-weight: 750; }
  .article-main {
    display: grid;
    grid-template-columns: 250px minmax(0,760px);
    justify-content: center;
    align-items: start;
    gap: 48px;
    padding-top: 58px;
    padding-bottom: 100px;
  }
  .toc {
    position: sticky;
    top: 100px;
    padding: 20px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 10px 24px rgba(31,27,68,.05);
  }
  .toc b { display: block; margin-bottom: 12px; font-size: 15px; }
  .toc a { display: block; padding: 7px 0; color: #666b7b; font-size: 13px; line-height: 1.45; font-weight: 750; }
  .toc a:hover { color: var(--purple); }
  .article-content { min-width: 0; }
  .summary-box {
    padding: 24px;
    border: 1px solid #ddd7ef;
    border-radius: 14px;
    background: linear-gradient(135deg,#f7f4ff,#f1f9ed);
  }
  .summary-box h2 { margin: 0 0 14px; font-size: 22px; }
  .summary-box ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
  .summary-box li { position: relative; padding-left: 26px; color: #424756; line-height: 1.65; font-weight: 800; }
  .summary-box li::before { content: "✓"; position: absolute; left: 0; color: var(--green); font-weight: 950; }
  .content-section { padding-top: 58px; scroll-margin-top: 88px; }
  .content-section h2 { margin: 0 0 18px; font-size: 31px; line-height: 1.3; font-weight: 950; }
  .content-section p { margin: 0 0 18px; color: #464b59; font-size: 17px; line-height: 1.86; font-weight: 650; }
  .content-section strong { color: var(--ink); }
  .note {
    display: flex;
    gap: 14px;
    margin: 24px 0;
    padding: 18px 20px;
    border: 1px solid #d9ead2;
    border-radius: 12px;
    background: #f3faef;
  }
  .note b { flex: 0 0 auto; color: #347324; }
  .note span { color: #476640; line-height: 1.7; font-weight: 750; }
  .process-grid, .signal-grid, .cost-grid {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 12px;
    margin: 24px 0;
  }
  .process-grid div, .signal-grid div, .cost-grid div {
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: #fff;
  }
  .process-grid b, .signal-grid b, .cost-grid b { display: block; margin-bottom: 8px; color: var(--purple); font-size: 13px; }
  .process-grid strong, .signal-grid strong { display: block; margin-bottom: 8px; font-size: 17px; }
  .process-grid span, .signal-grid span, .cost-grid span { color: var(--sub); font-size: 14px; line-height: 1.6; font-weight: 700; }
  .check-list { margin: 22px 0; padding: 0; list-style: none; display: grid; gap: 10px; }
  .check-list li {
    position: relative;
    padding: 14px 16px 14px 44px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: #fff;
    color: #424756;
    line-height: 1.6;
    font-weight: 750;
  }
  .check-list li::before {
    content: "✓";
    position: absolute;
    left: 15px;
    top: 13px;
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #eef8ea;
    color: var(--green);
    font-size: 13px;
    font-weight: 950;
  }
  .table-wrap { overflow-x: auto; margin: 24px 0; border: 1px solid var(--line); border-radius: 12px; }
  table { width: 100%; min-width: 600px; border-collapse: collapse; background: #fff; }
  th, td { padding: 15px 16px; border-bottom: 1px solid var(--line); text-align: left; font-size: 14px; line-height: 1.55; }
  th { background: linear-gradient(135deg,var(--lavender),var(--mint)); color: var(--purple-dark); font-weight: 900; }
  tr:last-child td { border-bottom: 0; }
  td:first-child { color: var(--ink); font-weight: 900; }
  .number-list { margin: 22px 0; padding: 0; list-style: none; counter-reset: steps; display: grid; gap: 12px; }
  .number-list li {
    counter-increment: steps;
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 4px 14px;
    align-items: center;
    padding: 16px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: #fff;
  }
  .number-list li::before {
    content: counter(steps);
    grid-row: 1 / span 2;
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--purple);
    color: #fff;
    font-weight: 950;
  }
  .number-list b { font-size: 16px; }
  .number-list span { color: var(--sub); font-size: 14px; line-height: 1.6; font-weight: 700; }
  .formula {
    margin: 18px 0;
    padding: 20px;
    border: 1px solid #dcd6ef;
    border-radius: 12px;
    background: #f8f6ff;
  }
  .formula b { display: block; margin-bottom: 8px; color: var(--purple-dark); }
  .formula span { color: #575d6d; line-height: 1.7; font-weight: 750; }
  .faq { display: grid; gap: 10px; margin-top: 22px; }
  .faq-item { overflow: hidden; border: 1px solid var(--line); border-radius: 12px; background: #fff; }
  .faq-question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 18px 20px;
    border: 0;
    background: linear-gradient(135deg,var(--lavender),var(--mint));
    color: var(--ink);
    text-align: left;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
  }
  .faq-answer { display: none; padding: 18px 20px 20px; color: var(--sub); font-size: 15px; line-height: 1.75; font-weight: 700; }
  .faq-item.open .faq-answer { display: block; }
  .related-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; }
  .related-card { padding: 20px; border: 1px solid var(--line); border-radius: 12px; background: #fff; }
  .related-card b { display: block; margin-bottom: 8px; font-size: 17px; line-height: 1.4; }
  .related-card span { color: var(--purple); font-size: 13px; font-weight: 900; }
  .article-cta {
    margin-top: 58px;
    padding: 28px;
    border-radius: 16px;
    background: linear-gradient(135deg,var(--purple-dark),#4c3497);
    color: #fff;
  }
  .article-cta h2 { margin: 0 0 10px; font-size: 26px; }
  .article-cta p { margin: 0; color: rgba(255,255,255,.78); font-size: 15px; line-height: 1.7; }
  .article-cta .btn { margin-top: 20px; background: #fff; color: var(--purple-dark); }
  .footer { padding: 38px 0 110px; border-top: 1px solid var(--line); background: #fafafd; }
  .footer-inner { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; }
  .footer strong { display: block; margin-bottom: 8px; color: var(--purple-dark); }
  .footer p { margin: 0; color: #777c8b; font-size: 13px; line-height: 1.65; }
  .footer-links { display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px; font-weight: 850; }
  .floating {
    position: fixed;
    left: 50%;
    bottom: 18px;
    z-index: 70;
    width: min(720px,calc(100% - 32px));
    transform: translateX(-50%);
    padding: 10px;
    border: 1px solid rgba(216,218,229,.94);
    border-radius: 18px;
    background: rgba(255,255,255,.94);
    box-shadow: 0 16px 36px rgba(25,23,55,.18);
    backdrop-filter: blur(14px);
  }
  .floating-inner { display: grid; grid-template-columns: 1.2fr .8fr; gap: 8px; }
  .float-btn {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 900;
  }
  .float-btn.apply { background: linear-gradient(135deg,var(--purple-dark),var(--purple)); color: #fff; }
  .float-btn.call { background: #eff9eb; color: #397723; }
  .fade { opacity: 0; transform: translateY(18px); transition: opacity .55s ease, transform .55s ease; }
  .fade.show { opacity: 1; transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .fade { opacity: 1; transform: none; transition: none; }
  }
  @media (max-width: 900px) {
    .nav { display: none; }
    .mobile-nav { display: flex; }
    .hub-hero-grid { grid-template-columns: 1fr; }
    .hub-image { max-width: 700px; }
    .guide-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .article-main { grid-template-columns: 1fr; gap: 24px; }
    .toc { position: static; }
    .toc-links { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); column-gap: 20px; }
  }
  @media (max-width: 640px) {
    body { padding-bottom: 126px; }
    .wrap { padding: 0 16px; }
    .notice { font-size: 11px; line-height: 1.45; }
    .header-inner { min-height: 62px; gap: 10px; }
    .brand img { width: 112px; }
    .brand span { padding-left: 8px; font-size: 12px; }
    .mobile-nav a:first-child { display: none; }
    .mobile-nav a { padding: 0 10px; font-size: 12px; }
    .hub-hero { padding: 42px 0 50px; }
    .hub-hero-grid { gap: 30px; }
    .hub-hero h1 { font-size: 39px; }
    .hub-hero p { font-size: 16px; }
    .hub-image-note { right: 12px; bottom: 12px; max-width: 220px; font-size: 13px; }
    .section { padding: 60px 0; }
    .section-head { margin-bottom: 26px; }
    .section-head h2 { font-size: 31px; }
    .section-head p { font-size: 15px; }
    .guide-grid, .trust-band, .process-grid, .signal-grid, .cost-grid, .related-grid { grid-template-columns: 1fr; }
    .guide-card { min-height: 260px; }
    .article-hero { padding: 38px 0 34px; }
    .article-hero h1 { font-size: 37px; }
    .article-lead { font-size: 16px; }
    .article-main { padding-top: 34px; padding-bottom: 64px; }
    .toc { padding: 18px; }
    .toc-links { grid-template-columns: 1fr; }
    .summary-box { padding: 20px; }
    .content-section { padding-top: 48px; }
    .content-section h2 { font-size: 27px; }
    .content-section p { font-size: 16px; line-height: 1.82; }
    .note { flex-direction: column; gap: 6px; }
    .table-wrap { margin-right: -16px; border-radius: 12px 0 0 12px; }
    .footer-inner { flex-direction: column; }
    .floating { bottom: 0; width: 100%; border-radius: 16px 16px 0 0; }
    .floating-inner { grid-template-columns: 1fr 1fr; }
  }
`;

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function jsonLd(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function head({ title, description, canonical, type = "website", schema }) {
  return `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:type" content="${type}" />
  <meta property="og:site_name" content="바인그룹 물류센터" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${baseUrl}/3pl-hero.png" />
  <meta property="og:image:alt" content="바인그룹 물류센터 3PL 물류 가이드" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
  <script type="application/ld+json">${jsonLd(schema)}</script>
  <style>${sharedCss}</style>`;
}

function header(active = "guide", source = active === "guide" ? "guide" : "main") {
  return `
  <div class="notice">자사몰·스마트스토어·쿠팡 출고 대응 · 소량 물류대행 상담</div>
  <header class="header">
    <div class="wrap header-inner">
      <a class="brand" href="./" aria-label="바인그룹 물류센터 메인">
        <img src="./baingroup-logo.png" alt="바인그룹" />
        <span>물류센터</span>
      </a>
      <nav class="nav" aria-label="주요 메뉴">
        <a href="./" class="${active === "home" ? "active" : ""}">3PL 서비스</a>
        <a href="./logistics-guide.html" class="${active === "guide" ? "active" : ""}">물류 가이드</a>
        <a href="./#benefits">장점</a>
        <a href="./#faq">FAQ</a>
        <a class="nav-cta" href="./3pl-sinchung.html?from=${source}">무료 상담</a>
      </nav>
      <div class="mobile-nav">
        <a href="./">서비스</a>
        <a href="./logistics-guide.html">가이드</a>
      </div>
    </div>
  </header>`;
}

function footer(source) {
  return `
  <footer class="footer">
    <div class="wrap footer-inner">
      <div>
        <strong>바인그룹 물류센터</strong>
        <p>입고, 보관, 재고관리, 포장, 출고, 배송을 지원하는 3PL 물류대행 서비스입니다.</p>
      </div>
      <div class="footer-links">
        <a href="./">3PL 서비스</a>
        <a href="./logistics-guide.html">물류 가이드</a>
        <a href="./3pl-sinchung.html?from=${source}">상담 신청</a>
        <a href="tel:01062565593">전화 상담</a>
      </div>
    </div>
  </footer>
  <nav class="floating" aria-label="고정 상담 버튼">
    <div class="floating-inner">
      <a class="float-btn apply" href="./3pl-sinchung.html?from=${source}">무료 물류 상담 신청</a>
      <a class="float-btn call" href="tel:01062565593">전화 상담</a>
    </div>
  </nav>`;
}

function scripts() {
  return `
  <script>
    document.querySelectorAll('.faq-question').forEach(function(button) {
      button.addEventListener('click', function() {
        button.closest('.faq-item').classList.toggle('open');
      });
    });
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.fade').forEach(function(element) {
      observer.observe(element);
    });
  </script>`;
}

function guideIcon(index) {
  return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"][index] || "•";
}

function guideCard(article, index) {
  return `
    <a class="guide-card fade" href="./${article.slug}">
      <div class="guide-card-head"><b>${guideIcon(index)}</b><span>${esc(article.category)}</span></div>
      <div class="guide-card-body">
        <h3>${esc(article.shortTitle)}</h3>
        <p>${esc(article.description)}</p>
        <span class="guide-card-link">가이드 읽기 →</span>
      </div>
    </a>`;
}

function comingCard(icon, category, title, description) {
  return `
    <div class="guide-card coming fade">
      <div class="guide-card-head"><b>${icon}</b><span>${esc(category)}</span></div>
      <div class="guide-card-body">
        <h3>${esc(title)}</h3>
        <p>${esc(description)}</p>
        <span class="guide-card-link">순차적으로 추가 예정</span>
      </div>
    </div>`;
}

function renderHub() {
  const canonical = `${baseUrl}/logistics-guide.html`;
  const title = "3PL 물류대행 가이드 | 바인그룹 물류센터";
  const description =
    "3PL 물류대행의 뜻, 자체출고 비교, 쇼핑몰 물류대행, 다채널 주문, 브랜드 포장과 물류비 절감 방법을 실무 관점에서 정리한 가이드입니다.";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: "ko-KR",
        isPartOf: { "@id": `${baseUrl}/#website` },
      },
      {
        "@type": "ItemList",
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${baseUrl}/${article.slug}`,
          name: article.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "바인그룹 물류센터", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "물류 가이드", item: canonical },
        ],
      },
    ],
  };
  const shoppingmallGuides = articles.filter((article) => article.cluster === "shoppingmall");
  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description, canonical, schema })}</head>
<body>
${header("guide")}
<main>
  <section class="hub-hero">
    <div class="wrap hub-hero-grid">
      <div>
        <span class="eyebrow">바인그룹 물류 가이드</span>
        <h1>물류를 맡기기 전,<br /><strong>판단 기준부터 확인하세요.</strong></h1>
        <p>3PL의 기본 개념부터 자체출고 비교, 쇼핑몰 다채널 출고, 브랜드 포장과 비용 절감 방법까지 운영자가 실제로 확인해야 할 내용을 정리했습니다.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#featured">핵심 가이드 보기</a>
          <a class="btn secondary" href="./3pl-sinchung.html?from=guide">현재 물류 상담하기</a>
        </div>
      </div>
      <div class="hub-image">
        <img src="./3pl-hero.png" alt="상품 입고와 출고가 진행되는 3PL 물류센터" />
        <div class="hub-image-note">입고부터 반품까지, 필요한 정보를 단계별로 확인하세요.</div>
      </div>
    </div>
  </section>
  <section class="section" id="featured">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">핵심 가이드</span>
        <h2>처음 읽으면 좋은 물류 콘텐츠</h2>
        <p>서비스 소개보다 먼저 물류 구조와 비용을 이해할 수 있도록 핵심 주제부터 구성했습니다.</p>
      </div>
      <nav class="category-nav" aria-label="가이드 카테고리">
        <a href="#featured">3PL 시작하기</a>
        <a href="#featured">운영 방식 비교</a>
        <a href="#featured">물류비 절감</a>
        <a href="#shoppingmall">쇼핑몰 물류</a>
        <a href="#upcoming">소량 물류</a>
        <a href="#upcoming">쿠팡 물류</a>
      </nav>
      <div class="guide-grid">${coreArticles.map(guideCard).join("")}</div>
    </div>
  </section>
  <section class="section soft" id="shoppingmall">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">쇼핑몰 물류 가이드</span>
        <h2>자사몰·스마트스토어 운영을 더 가볍게</h2>
        <p>물류대행 전환 시점부터 다채널 주문, 브랜드 포장과 재고 정확도까지 온라인 브랜드가 자주 부딪히는 문제를 실무 기준으로 정리했습니다.</p>
      </div>
      <div class="hero-actions" style="margin-bottom:28px">
        <a class="btn primary" href="./shoppingmall-logistics.html">쇼핑몰 물류대행 서비스 보기</a>
      </div>
      <div class="guide-grid">${shoppingmallGuides.map((article, index) => guideCard(article, index + coreArticles.length)).join("")}</div>
    </div>
  </section>
  <section class="section" id="upcoming">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">다음 가이드</span>
        <h2>판매 채널과 상품 특성별로 확장합니다</h2>
        <p>소량 출고, 쿠팡 물류와 반품 관리처럼 실제 상담에서 자주 나오는 주제를 순서대로 추가합니다.</p>
      </div>
      <div class="guide-grid">
        ${comingCard("04", "소량 물류", "소량 물류대행 업체 선택 기준", "출고량이 적을 때 확인해야 할 비용, 보관, 최소 조건을 정리합니다.")}
        ${comingCard("05", "쿠팡 물류", "쿠팡 밀크런 준비 과정", "밀크런 이용 전 상품과 입고 정보를 어떻게 준비하는지 설명합니다.")}
        ${comingCard("06", "재고·반품", "재고관리와 반품 처리 효율화", "입출고 수량과 반품 재고를 안정적으로 관리하는 기준을 다룹니다.")}
      </div>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <div class="section-head center">
        <span class="eyebrow">콘텐츠 운영 원칙</span>
        <h2>광고 문구보다 판단에 필요한 정보를 제공합니다</h2>
      </div>
      <div class="trust-band">
        <div><b>명확한 결론</b><span>질문에 대한 핵심 답변을 먼저 제시하고 세부 내용을 이어서 설명합니다.</span></div>
        <div><b>실무 체크리스트</b><span>업체 비교와 견적 요청에 바로 사용할 수 있는 항목을 정리합니다.</span></div>
        <div><b>지속적인 업데이트</b><span>새로운 질문과 운영 사례를 반영해 작성일과 수정일을 관리합니다.</span></div>
      </div>
    </div>
  </section>
</main>
${footer("guide")}
${scripts()}
</body>
</html>`;
}

function faqSchema(article) {
  return article.faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  }));
}

function renderArticle(article, index) {
  const canonical = `${baseUrl}/${article.slug}`;
  const title = `${article.title} | 바인그룹 물류센터`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: article.title,
        description: article.description,
        image: `${baseUrl}/3pl-hero.png`,
        datePublished: today,
        dateModified: today,
        inLanguage: "ko-KR",
        mainEntityOfPage: { "@id": `${canonical}#webpage` },
        author: { "@type": "Organization", name: "바인그룹 물류센터", url: `${baseUrl}/` },
        publisher: {
          "@type": "Organization",
          name: "바인그룹 물류센터",
          logo: { "@type": "ImageObject", url: `${baseUrl}/baingroup-logo.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "바인그룹 물류센터", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "물류 가이드", item: `${baseUrl}/logistics-guide.html` },
          { "@type": "ListItem", position: 3, name: article.shortTitle, item: canonical },
        ],
      },
      { "@type": "FAQPage", mainEntity: faqSchema(article) },
    ],
  };
  const cluster = article.cluster || "core";
  const otherArticles = articles
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => Number((b.cluster || "core") === cluster) - Number((a.cluster || "core") === cluster))
    .slice(0, 3);
  const source = article.slug.replace(".html", "");
  return `<!DOCTYPE html>
<html lang="ko">
<head>${head({ title, description: article.description, canonical, type: "article", schema })}</head>
<body>
${header("guide", source)}
<main>
  <header class="article-hero">
    <div class="wrap">
      <nav class="breadcrumbs" aria-label="현재 위치">
        <a href="./">홈</a><span>›</span><a href="./logistics-guide.html">물류 가이드</a><span>›</span><span>${esc(article.shortTitle)}</span>
      </nav>
      <span class="category">${esc(article.category)}</span>
      <h1>${esc(article.title)}</h1>
      <p class="article-lead">${esc(article.lead)}</p>
      <div class="article-meta"><span>작성일 ${today}</span><span>·</span><span>${article.readingTime}</span><span>·</span><span>바인그룹 물류센터</span></div>
    </div>
  </header>
  <div class="wrap article-main">
    <aside class="toc" aria-label="목차">
      <b>이 글의 목차</b>
      <div class="toc-links">
        ${article.sections.map((section) => `<a href="#${section.id}">${esc(section.title)}</a>`).join("")}
        <a href="#faq">자주 묻는 질문</a>
      </div>
    </aside>
    <article class="article-content">
      <section class="summary-box fade">
        <h2>먼저 확인할 핵심</h2>
        <ul>${article.takeaways.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      </section>
      ${article.sections
        .map(
          (section) => `
      <section class="content-section fade" id="${section.id}">
        <h2>${esc(section.title)}</h2>
        ${section.html}
      </section>`
        )
        .join("")}
      <section class="content-section fade" id="faq">
        <h2>자주 묻는 질문</h2>
        <div class="faq">
          ${article.faq
            .map(
              ([question, answer], faqIndex) => `
          <div class="faq-item ${faqIndex === 0 ? "open" : ""}">
            <button class="faq-question" type="button">${esc(question)}<span>+</span></button>
            <div class="faq-answer">${esc(answer)}</div>
          </div>`
            )
            .join("")}
        </div>
      </section>
      <section class="content-section fade">
        <h2>관련 물류 가이드</h2>
        <div class="related-grid">
          ${otherArticles
            .map(
              (related) => `
          <a class="related-card" href="./${related.slug}">
            <b>${esc(related.shortTitle)}</b>
            <span>가이드 읽기 →</span>
          </a>`
            )
            .join("")}${cluster === "shoppingmall"
            ? `
          <a class="related-card" href="./shoppingmall-logistics.html">
            <b>쇼핑몰 물류대행 서비스</b>
            <span>서비스 확인하기 →</span>
          </a>`
            : ""}
          <a class="related-card" href="./logistics-guide.html">
            <b>물류 가이드 전체 목록</b>
            <span>목록으로 이동 →</span>
          </a>
        </div>
      </section>
      <section class="article-cta fade">
        <h2>우리 업체의 물류 조건도 확인해보세요.</h2>
        <p>월 출고량, 상품 크기, 판매 채널과 필요한 작업을 알려주시면 적합한 운영 범위를 상담합니다.</p>
        <a class="btn" href="./3pl-sinchung.html?from=${source}">무료 물류 상담 신청</a>
      </section>
    </article>
  </div>
</main>
${footer(source)}
${scripts()}
</body>
</html>`;
}

await writeFile("logistics-guide.html", renderHub(), "utf8");
await Promise.all(
  articles.map((article, index) => writeFile(article.slug, renderArticle(article, index), "utf8"))
);

console.log(`Generated logistics-guide.html and ${articles.length} guide articles.`);
