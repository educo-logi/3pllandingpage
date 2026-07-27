export const smallVolumeArticles = [
  {
    slug: "guide-small-volume-3pl-selection.html",
    cluster: "small-volume",
    category: "소량 물류 업체 선택",
    title: "소량 물류대행 업체 선택 기준: 최소 출고량과 비용 확인하기",
    shortTitle: "소량 물류대행 업체 선택 기준",
    description:
      "월 출고량이 적은 쇼핑몰과 초기 브랜드가 소량 물류대행 업체를 비교할 때 확인할 최소 물량, 보관, 포장, 택배와 추가 비용 기준을 정리했습니다.",
    lead:
      "소량 물류대행은 건당 가격 하나보다 월 최소 조건, 상품 특성, 포장 작업과 물량 증가 시 확장 가능성을 함께 비교해야 합니다.",
    readingTime: "약 8분",
    accent: "purple",
    takeaways: [
      "최소 출고량이 낮아도 월 기본료와 보관 최소비용을 합치면 실제 부담이 달라질 수 있습니다.",
      "센터 전체 출고 규모를 활용하는 구조인지 확인하면 소량 업체도 단가 경쟁력을 상담할 수 있습니다.",
      "현재 물량뿐 아니라 행사 최대 주문량과 향후 판매 채널까지 전달해야 정확한 견적을 받을 수 있습니다.",
    ],
    sections: [
      {
        id: "first-check",
        title: "소량 물류대행에서 먼저 확인할 조건",
        html: `
          <div class="signal-grid">
            <div><b>최소 조건</b><strong>월 최소 출고량·기본료</strong><span>주문이 없는 달에도 발생하는 비용을 확인합니다.</span></div>
            <div><b>보관</b><strong>최소 보관 단위와 과금 방식</strong><span>파렛트, 선반, 박스 등 상품에 맞는 기준을 확인합니다.</span></div>
            <div><b>포장</b><strong>기본 작업과 추가 작업 범위</strong><span>완충재, 사은품, 합포장 비용을 구분합니다.</span></div>
            <div><b>배송</b><strong>택배 규격과 할증 조건</strong><span>부피, 중량과 도서산간 등 추가 조건을 살펴봅니다.</span></div>
          </div>
          <p>소량 업체를 받는다는 문구만으로는 충분하지 않습니다. 월 고정비와 실제 주문당 변동비를 나누고, 현재 상품과 주문 패턴에서 발생할 총비용을 확인해야 합니다.</p>
        `,
      },
      {
        id: "quote",
        title: "견적은 같은 작업 범위로 비교하세요",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>비용 항목</th><th>확인할 내용</th><th>자주 놓치는 조건</th></tr></thead>
              <tbody>
                <tr><td>입고</td><td>박스·파렛트·SKU별 검수 단가</td><td>바코드 부착과 수량 차이 처리</td></tr>
                <tr><td>보관</td><td>과금 단위와 최소 보관료</td><td>월중 입출고 시 계산 방식</td></tr>
                <tr><td>출고</td><td>피킹·포장·송장 작업 포함 범위</td><td>다품목 주문과 합포장 추가비</td></tr>
                <tr><td>택배</td><td>규격별 운임과 계약 조건</td><td>이형 상품, 제주·도서산간 할증</td></tr>
                <tr><td>반품</td><td>회수 입고와 검수 비용</td><td>재포장과 불량 분류 작업</td></tr>
              </tbody>
            </table>
          </div>
          <div class="formula"><b>월 예상 물류비</b><span>월 고정비 + 입고·보관비 + 주문별 출고·포장비 + 택배비 + 추가 작업비</span></div>
        `,
      },
      {
        id: "volume",
        title: "출고량이 적어도 함께 전달할 숫자",
        html: `
          <ol class="number-list">
            <li><b>최근 3개월 월평균 주문</b><span>평균 물량과 증가·감소 추세를 함께 확인합니다.</span></li>
            <li><b>일 최대 주문</b><span>광고나 행사 때 하루에 몰리는 최대 물량을 전달합니다.</span></li>
            <li><b>SKU와 옵션 수</b><span>피킹과 재고관리 난이도를 판단하는 기준입니다.</span></li>
            <li><b>평균 주문 상품 수</b><span>단품 주문과 다품목 합포장의 작업량은 다릅니다.</span></li>
            <li><b>상품 규격·중량</b><span>보관 방식, 포장 자재와 택배 규격에 영향을 줍니다.</span></li>
          </ol>
        `,
      },
      {
        id: "scalability",
        title: "성장할 때 운영을 확장할 수 있는지 확인하세요",
        html: `
          <ul class="check-list">
            <li>자사몰, 스마트스토어와 쿠팡 주문을 함께 처리할 수 있는지 확인합니다.</li>
            <li>행사 주문이 평소보다 늘었을 때 사전 협의 절차를 확인합니다.</li>
            <li>SKU와 보관량 증가 시 재고 위치와 비용이 어떻게 달라지는지 묻습니다.</li>
            <li>사은품, 세트 구성과 브랜드 포장 기준을 문서화할 수 있는지 확인합니다.</li>
            <li>반품 상품의 검수와 상태별 재고 반영 범위를 확인합니다.</li>
          </ul>
          <div class="note"><b>판단 기준</b><span>지금 가장 저렴한 곳보다 현재 소량을 안정적으로 처리하고 물량이 늘어도 운영 기준을 이어갈 수 있는 곳이 적합합니다.</span></div>
        `,
      },
      {
        id: "questions",
        title: "상담할 때 바로 물어볼 질문",
        html: `
          <div class="cost-grid">
            <div><b>01</b><strong>월 최소 비용은 얼마인가요?</strong><span>출고가 없는 달의 기본 비용까지 확인합니다.</span></div>
            <div><b>02</b><strong>기본 출고비에 무엇이 포함되나요?</strong><span>피킹, 포장, 자재와 송장 범위를 구분합니다.</span></div>
            <div><b>03</b><strong>소량 단가는 어떤 구조인가요?</strong><span>센터 전체 출고 규모를 활용하는지 확인합니다.</span></div>
            <div><b>04</b><strong>추가 작업은 어떻게 과금하나요?</strong><span>사은품, 합포장, 라벨과 재포장 조건을 묻습니다.</span></div>
          </div>
        `,
      },
    ],
    faq: [
      ["월 출고량이 아주 적어도 3PL을 이용할 수 있나요?", "업체별 최소 조건과 상품 특성에 따라 다르지만 소량 출고도 상담할 수 있습니다. 월평균 주문, SKU, 보관량과 포장 방식을 함께 전달하는 것이 좋습니다."],
      ["소량도 대량 출고 단가를 적용받을 수 있다는 뜻은 무엇인가요?", "개별 업체 물량이 아니라 센터 전체의 대량 출고 규모를 기반으로 택배와 운영 조건을 상담할 수 있다는 의미입니다. 최종 견적은 상품과 작업 조건에 따라 달라집니다."],
      ["견적 비교에서 가장 중요한 항목은 무엇인가요?", "월 기본료와 입고, 보관, 출고, 포장, 택배, 반품, 추가 작업을 모두 포함한 월 예상 총비용을 같은 기준으로 비교해야 합니다."],
    ],
  },
  {
    slug: "guide-small-volume-logistics-cost.html",
    cluster: "small-volume",
    category: "소량 물류비",
    title: "소량 3PL 물류비 계산 방법: 보관·포장·택배 견적 비교",
    shortTitle: "소량 3PL 물류비 계산 방법",
    description:
      "소량 쇼핑몰의 3PL 물류비를 월 고정비, 입고, 보관, 피킹, 포장, 택배와 반품 비용으로 나눠 계산하고 견적을 비교하는 방법입니다.",
    lead:
      "건당 출고비만 보면 저렴해 보여도 월 최소비용과 보관, 포장 자재, 추가 작업을 합치면 실제 물류비는 달라질 수 있습니다.",
    readingTime: "약 8분",
    accent: "green",
    takeaways: [
      "소량 물류비는 고정비와 주문에 따라 늘어나는 변동비를 분리해 계산해야 합니다.",
      "직접 출고 비용에는 대표와 직원의 작업 시간, 공간, 자재와 오류 처리비도 포함해야 합니다.",
      "견적서에 없는 작업은 무료가 아니라 아직 조건이 정해지지 않은 항목일 수 있습니다.",
    ],
    sections: [
      {
        id: "structure",
        title: "소량 3PL 비용을 구성하는 항목",
        html: `
          <div class="cost-grid">
            <div><b>고정</b><strong>기본 관리비</strong><span>시스템, 운영과 월 최소 조건</span></div>
            <div><b>입고</b><strong>하차·검수·등록</strong><span>박스, 파렛트와 SKU 작업</span></div>
            <div><b>보관</b><strong>공간 사용료</strong><span>선반, 박스, 파렛트 단위</span></div>
            <div><b>출고</b><strong>피킹·포장·송장</strong><span>주문 및 상품 수에 따른 작업</span></div>
            <div><b>배송</b><strong>택배 운임</strong><span>규격, 중량과 권역별 조건</span></div>
            <div><b>예외</b><strong>반품·추가 작업</strong><span>재포장, 사은품과 라벨 작업</span></div>
          </div>
        `,
      },
      {
        id: "fixed-variable",
        title: "고정비와 변동비를 나눠보세요",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>구분</th><th>비용 예시</th><th>관리 방법</th></tr></thead>
              <tbody>
                <tr><td>월 고정비</td><td>기본 관리비, 최소 보관료</td><td>출고가 적은 달의 부담 확인</td></tr>
                <tr><td>수량 변동비</td><td>입고, 피킹, 포장, 송장, 택배</td><td>주문당 평균비용 계산</td></tr>
                <tr><td>공간 변동비</td><td>선반, 박스, 파렛트 보관료</td><td>재고 회전과 장기재고 점검</td></tr>
                <tr><td>예외 작업비</td><td>합포장, 라벨, 사은품, 반품</td><td>발생 조건과 승인 절차 확인</td></tr>
              </tbody>
            </table>
          </div>
          <div class="formula"><b>주문 1건당 실제 물류비</b><span>(월 고정비 + 월 변동비 + 예외 작업비) ÷ 월 출고 건수</span></div>
        `,
      },
      {
        id: "self-cost",
        title: "직접 출고와 비교할 때 포함할 비용",
        html: `
          <ul class="check-list">
            <li>대표와 직원이 주문 확인, 피킹, 포장, 송장에 쓰는 시간</li>
            <li>사무실, 창고와 복도 등 재고가 차지하는 공간 비용</li>
            <li>박스, 봉투, 테이프, 완충재와 프린터 소모품</li>
            <li>택배사 인계, 반품 회수와 재고 재반영에 쓰는 시간</li>
            <li>오배송, 누락과 당일 미출고에 따른 재처리 비용</li>
          </ul>
          <div class="note"><b>비용 외 효과</b><span>3PL 전환으로 확보되는 상품 기획, 마케팅과 고객 대응 시간도 함께 평가해야 합니다.</span></div>
        `,
      },
      {
        id: "simulation",
        title: "세 가지 물량으로 견적을 계산하세요",
        html: `
          <ol class="number-list">
            <li><b>현재 평균 물량</b><span>최근 3개월 평균 주문으로 평상시 월비용을 계산합니다.</span></li>
            <li><b>낮은 물량</b><span>비수기 주문으로 월 최소비용 부담을 확인합니다.</span></li>
            <li><b>행사 최대 물량</b><span>광고와 프로모션 때 추가 인력이나 비용 조건을 확인합니다.</span></li>
            <li><b>SKU 증가 상황</b><span>상품 수와 보관 위치가 늘 때 비용 변화를 확인합니다.</span></li>
          </ol>
        `,
      },
      {
        id: "comparison",
        title: "견적서 최종 비교 체크리스트",
        html: `
          <ul class="check-list">
            <li>모든 견적의 부가세 포함 여부를 같은 기준으로 맞춥니다.</li>
            <li>기본 출고비에 포함된 피킹 상품 수와 포장 자재를 확인합니다.</li>
            <li>택배 규격 초과와 다품목 주문의 추가비 조건을 확인합니다.</li>
            <li>최소 계약 기간, 보증금과 해지 시 재고 반출비를 확인합니다.</li>
            <li>견적 유효기간과 물량 변화에 따른 단가 구간을 확인합니다.</li>
          </ul>
        `,
      },
    ],
    faq: [
      ["소량 3PL은 건당 비용만 비교하면 되나요?", "아닙니다. 월 기본료와 최소 보관료, 입고, 포장 자재, 택배, 반품과 추가 작업을 모두 더한 월 총비용으로 비교해야 합니다."],
      ["출고량이 늘면 단가가 바뀌나요?", "센터와 계약 조건에 따라 물량 구간별 단가가 적용될 수 있습니다. 현재 평균과 행사 최대 물량을 함께 전달해 구간별 조건을 확인하세요."],
      ["직접 출고 비용은 어떻게 계산하나요?", "택배와 자재뿐 아니라 주문 처리 인건비, 보관 공간, 반품과 오류 재처리 비용을 월 단위로 합산해 비교합니다."],
    ],
  },
  {
    slug: "guide-startup-brand-3pl-timing.html",
    cluster: "small-volume",
    category: "초기 브랜드 물류",
    title: "초기 브랜드 3PL 전환 시점: 월 출고량보다 먼저 볼 기준",
    shortTitle: "초기 브랜드의 3PL 전환 시점",
    description:
      "초기 쇼핑몰 브랜드가 월 출고량이 많지 않아도 3PL 물류대행을 검토할 시점과 직접 출고 비용, 공간, 오류, 성장 준비 기준을 설명합니다.",
    lead:
      "3PL 전환 시점은 주문 건수 하나로 정해지지 않습니다. 물류가 핵심업무를 방해하는 정도와 성장할 때 감당할 수 있는지를 함께 봐야 합니다.",
    readingTime: "약 7분",
    accent: "blue",
    takeaways: [
      "매일 반복되는 포장 때문에 판매 활동이 늦어진다면 물량이 적어도 전환을 검토할 수 있습니다.",
      "처음부터 모든 상품을 옮기지 않고 일부 SKU나 채널로 시험 운영할 수 있습니다.",
      "상품 정보와 포장 기준을 미리 문서화하면 물량이 늘어도 운영이 흔들리지 않습니다.",
    ],
    sections: [
      {
        id: "signals",
        title: "출고량보다 먼저 나타나는 전환 신호",
        html: `
          <div class="signal-grid">
            <div><b>시간</b><strong>하루가 포장으로 끝남</strong><span>기획, 마케팅과 고객 대응이 계속 밀립니다.</span></div>
            <div><b>공간</b><strong>업무 공간이 재고로 바뀜</strong><span>입고 때마다 상품을 옮기고 찾는 시간이 늘어납니다.</span></div>
            <div><b>오류</b><strong>누락·오배송이 반복됨</strong><span>주문 확인과 검수 기준이 사람마다 달라집니다.</span></div>
            <div><b>변동</b><strong>광고 후 주문을 감당하기 어려움</strong><span>평소 물량은 적어도 특정일 주문이 몰립니다.</span></div>
          </div>
        `,
      },
      {
        id: "decision",
        title: "월 출고량 외에 확인할 운영 지표",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>지표</th><th>확인 방법</th><th>전환 필요성이 커지는 상황</th></tr></thead>
              <tbody>
                <tr><td>포장 시간</td><td>주문당 평균 작업시간</td><td>핵심 인력이 매일 반복 작업에 투입</td></tr>
                <tr><td>일 최대 주문</td><td>평균이 아닌 최고 출고일</td><td>행사 때 당일 출고가 무너짐</td></tr>
                <tr><td>오류율</td><td>누락·오배송·재출고 건수</td><td>같은 문제가 반복되고 원인 기록이 없음</td></tr>
                <tr><td>SKU</td><td>옵션과 세트 포함 상품 수</td><td>재고 위치와 수량 확인이 어려움</td></tr>
                <tr><td>채널</td><td>주문을 받는 판매처 수</td><td>채널별 주문 취합과 송장 작업이 중복</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        id: "staged",
        title: "소량 브랜드에 맞는 단계적 전환",
        html: `
          <div class="process-grid">
            <div><b>01</b><strong>현황 정리</strong><span>상품, 주문, 포장과 반품 흐름을 적습니다.</span></div>
            <div><b>02</b><strong>일부 상품 선택</strong><span>주력 또는 표준 포장 SKU부터 정합니다.</span></div>
            <div><b>03</b><strong>초도 입고</strong><span>과도한 재고 대신 운영 확인 물량을 보냅니다.</span></div>
            <div><b>04</b><strong>시험 출고</strong><span>주문 연동과 실제 포장 결과를 확인합니다.</span></div>
            <div><b>05</b><strong>기준 보완</strong><span>예외 주문과 검수 기준을 수정합니다.</span></div>
            <div><b>06</b><strong>범위 확대</strong><span>상품과 판매 채널을 단계적으로 늘립니다.</span></div>
          </div>
        `,
      },
      {
        id: "preparation",
        title: "전환 전에 준비할 최소 자료",
        html: `
          <ul class="check-list">
            <li>SKU, 옵션명, 바코드, 상품 규격과 중량 목록</li>
            <li>최근 평균 주문과 행사 기간 일 최대 주문량</li>
            <li>박스, 봉투, 완충재, 사은품과 합포장 기준</li>
            <li>자사몰, 스마트스토어, 쿠팡 등 판매 채널 목록</li>
            <li>반품 정상·재포장·불량 판정 기준</li>
          </ul>
        `,
      },
      {
        id: "review",
        title: "첫 한 달에 확인할 결과",
        html: `
          <ol class="number-list">
            <li><b>출고 정확도</b><span>누락, 오배송과 예외 주문의 원인을 확인합니다.</span></li>
            <li><b>출고 속도</b><span>주문 마감과 실제 택배 인계 시간을 확인합니다.</span></li>
            <li><b>재고 차이</b><span>이관 수량과 주문 후 가용재고를 대조합니다.</span></li>
            <li><b>추가 비용</b><span>견적에서 예상하지 못한 작업과 발생 사유를 정리합니다.</span></li>
            <li><b>확보한 시간</b><span>상품, 마케팅과 고객 대응에 늘어난 시간을 평가합니다.</span></li>
          </ol>
          <div class="note"><b>전환 목표</b><span>포장 업무를 없애는 것만이 아니라 주문이 늘어도 같은 기준으로 출고할 수 있는 운영 구조를 만드는 것입니다.</span></div>
        `,
      },
    ],
    faq: [
      ["월 몇 건부터 3PL을 이용하는 것이 좋나요?", "정해진 숫자보다 포장에 쓰는 시간, SKU, 공간, 오류와 주문 변동을 함께 봐야 합니다. 핵심업무가 밀리기 시작했다면 소량이어도 상담할 시점입니다."],
      ["모든 재고를 한 번에 옮겨야 하나요?", "반드시 그렇지는 않습니다. 일부 상품이나 판매 채널부터 시험 운영하고 기준을 보완한 뒤 범위를 늘리는 방법도 있습니다."],
      ["초기 브랜드가 가장 먼저 준비할 것은 무엇인가요?", "상품 목록과 바코드, 포장 방식, 최근 주문량, 판매 채널과 반품 기준을 간단히 정리하면 상담과 이관이 수월해집니다."],
    ],
  },
  {
    slug: "guide-small-volume-brand-packaging.html",
    cluster: "small-volume",
    category: "소량 브랜드 포장",
    title: "소량 재고와 브랜드 포장 운영: SKU·사은품·합포장 관리",
    shortTitle: "소량 재고와 브랜드 포장 운영",
    description:
      "소량 출고 브랜드가 3PL에서 SKU와 재고를 관리하고 브랜드 포장, 사은품, 세트 상품과 합포장을 안정적으로 운영하는 기준을 정리했습니다.",
    lead:
      "주문이 적을수록 모든 예외를 현장에서 기억으로 처리하기 쉽지만, 초기부터 포장 규칙을 정리해야 물량이 늘어도 브랜드 경험을 유지할 수 있습니다.",
    readingTime: "약 8분",
    accent: "purple",
    takeaways: [
      "소량 재고도 SKU와 옵션을 명확히 나눠야 주문 증가 시 오배송을 줄일 수 있습니다.",
      "사은품과 브랜드 포장은 적용 기간, 대상 주문, 소진 시 처리 기준까지 문서화해야 합니다.",
      "세트 상품은 완제품 재고와 구성품 재고 중 어떤 방식으로 관리할지 먼저 결정해야 합니다.",
    ],
    sections: [
      {
        id: "sku",
        title: "소량일 때부터 SKU 기준을 정하세요",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>구분 기준</th><th>별도 SKU가 필요한 경우</th><th>관리 이유</th></tr></thead>
              <tbody>
                <tr><td>옵션</td><td>색상, 사이즈, 용량이 다른 상품</td><td>주문 옵션과 실물 대조</td></tr>
                <tr><td>구성</td><td>단품, 2개 묶음, 기획 세트</td><td>구성품 차감과 포장 구분</td></tr>
                <tr><td>상태</td><td>정상, 보류, 불량, 반품 재고</td><td>판매 가능 수량 정확도</td></tr>
                <tr><td>판매처</td><td>채널 전용 구성이나 라벨 상품</td><td>채널별 출고 조건 준수</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        id: "packaging",
        title: "브랜드 포장 기준서에 넣을 내용",
        html: `
          <ol class="number-list">
            <li><b>사용할 포장 규격</b><span>상품별 박스, 봉투와 완충재 종류를 정합니다.</span></li>
            <li><b>상품 배치 순서</b><span>본품, 안내문, 사은품과 완충재 위치를 사진으로 남깁니다.</span></li>
            <li><b>동봉물 조건</b><span>판매 채널, 상품, 기간과 고객 조건을 구분합니다.</span></li>
            <li><b>마감 기준</b><span>테이프, 스티커, 송장 위치와 외관 허용 범위를 정합니다.</span></li>
            <li><b>자재 부족 대응</b><span>대체 가능 여부와 작업 중단·연락 기준을 정합니다.</span></li>
          </ol>
        `,
      },
      {
        id: "gift",
        title: "사은품은 시작과 종료 조건이 필요합니다",
        html: `
          <div class="signal-grid">
            <div><b>대상</b><strong>어떤 주문에 넣을지</strong><span>상품, 채널, 결제금액과 고객 조건을 정합니다.</span></div>
            <div><b>기간</b><strong>언제 시작하고 끝낼지</strong><span>주문일, 결제일과 출고일 중 적용 기준을 정합니다.</span></div>
            <div><b>재고</b><strong>사은품 수량을 어떻게 볼지</strong><span>일반 상품과 별도 재고로 입출고를 기록합니다.</span></div>
            <div><b>소진</b><strong>부족할 때 어떻게 할지</strong><span>대체, 제외 또는 출고 보류 기준을 미리 정합니다.</span></div>
          </div>
        `,
      },
      {
        id: "sets",
        title: "세트와 합포장 운영 기준",
        html: `
          <div class="process-grid">
            <div><b>01</b><strong>구성 확정</strong><span>세트에 들어가는 SKU와 수량을 정합니다.</span></div>
            <div><b>02</b><strong>재고 방식 선택</strong><span>사전 조립 또는 주문 시 조립 방식을 정합니다.</span></div>
            <div><b>03</b><strong>포장 규격 확인</strong><span>합포장 후 박스 크기와 중량을 확인합니다.</span></div>
            <div><b>04</b><strong>검수 기준 설정</strong><span>구성 누락을 막는 확인 순서를 정합니다.</span></div>
            <div><b>05</b><strong>재고 차감</strong><span>구성품과 세트 재고가 맞게 반영되는지 확인합니다.</span></div>
            <div><b>06</b><strong>변경 관리</strong><span>구성 변경일과 이전 주문 처리 기준을 남깁니다.</span></div>
          </div>
        `,
      },
      {
        id: "launch",
        title: "첫 출고 전 테스트 주문 체크리스트",
        html: `
          <ul class="check-list">
            <li>옵션이 비슷한 상품의 바코드와 피킹 위치를 확인합니다.</li>
            <li>단품, 다품목과 세트 주문을 각각 테스트합니다.</li>
            <li>사은품 대상 주문과 비대상 주문을 함께 확인합니다.</li>
            <li>브랜드 자재를 적용한 완성 포장 사진을 확인합니다.</li>
            <li>택배 규격, 송장 위치와 파손 위험을 점검합니다.</li>
            <li>취소, 주소 변경과 재출고 같은 예외 처리 절차를 확인합니다.</li>
          </ul>
          <div class="note"><b>운영 원칙</b><span>주문이 적을 때 만든 명확한 작업 기준은 물량이 급증했을 때 브랜드 포장 품질을 지키는 가장 실용적인 준비입니다.</span></div>
        `,
      },
    ],
    faq: [
      ["소량 출고도 브랜드 포장이 가능한가요?", "상품과 포장 작업, 자재 보관 조건에 따라 상담할 수 있습니다. 포장 완성 사진과 동봉 순서를 기준서로 정리하면 정확도가 높아집니다."],
      ["사은품 재고도 따로 관리해야 하나요?", "네. 판매 상품과 별도로 입고·사용 수량을 기록하고 대상 주문, 적용 기간과 소진 시 처리 기준을 정하는 것이 좋습니다."],
      ["세트 상품은 재고를 어떻게 관리하나요?", "미리 조립한 세트 완제품으로 관리하거나 주문 시 구성품을 차감하는 방식이 있습니다. 판매 빈도와 구성 변경 가능성에 맞춰 선택합니다."],
    ],
  },
];
