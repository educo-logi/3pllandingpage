export const largeCargoArticles = [
  {
    slug: "guide-large-cargo-3pl-selection.html",
    cluster: "large-cargo",
    category: "대형화물 업체 선택",
    title: "대형화물 물류대행 업체 선택 기준: 입고·보관·출고 확인하기",
    shortTitle: "대형화물 물류대행 업체 선택 기준",
    description:
      "부피와 중량이 큰 상품의 3PL 물류대행 업체를 선택할 때 입고 동선, 보관 공간, 작업 장비, 포장, 출고와 반품 조건을 확인하는 방법입니다.",
    lead:
      "대형화물은 보관 면적만 넓다고 운영할 수 있는 것이 아니라 입고부터 이동, 피킹, 포장과 차량 인계까지 전체 동선이 상품에 맞아야 합니다.",
    readingTime: "약 8분",
    accent: "purple",
    takeaways: [
      "가로·세로·높이, 중량과 포장 상태를 정확히 전달해야 입고 가능 여부와 견적을 판단할 수 있습니다.",
      "하차 공간과 내부 이동 장비, 보관 위치, 출고 차량 인계까지 하나의 흐름으로 확인해야 합니다.",
      "일반 택배 규격을 넘는 상품은 배송 방식과 추가비용, 파손 책임 기준을 별도로 확인해야 합니다.",
    ],
    sections: [
      {
        id: "definition",
        title: "대형화물은 크기만으로 정해지지 않습니다",
        html: `
          <div class="signal-grid">
            <div><b>규격</b><strong>가로·세로·높이</strong><span>보관 위치와 출고 차량 적재 가능 여부를 판단합니다.</span></div>
            <div><b>중량</b><strong>개별·포장 후 무게</strong><span>하역과 이동에 필요한 장비와 인원을 확인합니다.</span></div>
            <div><b>형태</b><strong>정형·비정형 여부</strong><span>적재 안정성과 공간 활용 방식이 달라집니다.</span></div>
            <div><b>취급</b><strong>파손·눕힘·적층 조건</strong><span>보관과 운반 중 지켜야 할 방향과 작업 기준을 정합니다.</span></div>
          </div>
          <p>같은 무게라도 길이가 길거나 무게 중심이 한쪽으로 치우친 상품, 적층할 수 없는 상품은 필요한 공간과 작업 방식이 다릅니다. 상품 사진과 포장 후 실측 정보를 함께 전달하는 것이 중요합니다.</p>
        `,
      },
      {
        id: "facility",
        title: "센터 시설과 작업 동선을 확인하세요",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>단계</th><th>확인할 환경</th><th>질문할 내용</th></tr></thead>
              <tbody>
                <tr><td>차량 진입</td><td>입고 차량과 상하차 공간</td><td>차량 종류와 예약 가능 시간</td></tr>
                <tr><td>하차</td><td>상품 중량에 맞는 장비·인력</td><td>하차 주체와 별도 작업비</td></tr>
                <tr><td>내부 이동</td><td>통로 폭, 문 높이와 이동 장비</td><td>포장 상태 그대로 이동 가능한지</td></tr>
                <tr><td>보관</td><td>바닥·파렛트·전용 위치</td><td>적층 가능 여부와 공간 과금 방식</td></tr>
                <tr><td>출고</td><td>피킹, 포장과 차량 인계 동선</td><td>출고 마감과 배송사 인계 기준</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        id: "operations",
        title: "운영 범위를 같은 기준으로 비교하세요",
        html: `
          <ol class="number-list">
            <li><b>입고 예약</b><span>예정일, 차량, 수량과 하차 방식을 사전 공유하는지 확인합니다.</span></li>
            <li><b>입고 검수</b><span>외관, 포장 파손과 수량을 어느 범위까지 확인하는지 묻습니다.</span></li>
            <li><b>보관 방식</b><span>상품별 위치, 적층 제한과 재고조사 방식을 확인합니다.</span></li>
            <li><b>출고 준비</b><span>피킹, 보강 포장, 라벨과 출고 차량 인계를 구분합니다.</span></li>
            <li><b>반품 처리</b><span>회수 가능 방식, 검수 범위와 재입고 조건을 확인합니다.</span></li>
          </ol>
        `,
      },
      {
        id: "estimate",
        title: "견적을 위해 준비할 상품 정보",
        html: `
          <ul class="check-list">
            <li>상품과 출고 포장 상태의 가로·세로·높이 실측값</li>
            <li>상품 1개와 포장 완료 후의 개별 중량</li>
            <li>파렛트 입고 여부, 파렛트당 수량과 전체 높이</li>
            <li>적층 가능 단수와 눕힘·세움 등 보관 방향 제한</li>
            <li>월평균 입고·출고량과 한 번에 들어오는 최대 수량</li>
            <li>택배, 화물차, 용달 등 현재 사용하는 배송 방식</li>
            <li>포장 사진, 파손 이력과 필요한 보강 작업</li>
          </ul>
          <div class="note"><b>실측 원칙</b><span>제품 상세페이지의 본품 크기가 아니라 완충재와 박스를 포함한 실제 입고·출고 포장 상태로 측정해야 합니다.</span></div>
        `,
      },
      {
        id: "contract",
        title: "계약 전에 확인할 책임과 예외 기준",
        html: `
          <div class="cost-grid">
            <div><b>01</b><strong>입고 파손</strong><span>도착 시 이상 발견과 사진 기록 절차</span></div>
            <div><b>02</b><strong>보관 손상</strong><span>적층·이동·습기 등 상품별 관리 기준</span></div>
            <div><b>03</b><strong>출고 포장</strong><span>기본 포장과 보강 작업의 구분</span></div>
            <div><b>04</b><strong>배송 사고</strong><span>운송사 인계 후 사고 접수와 증빙 범위</span></div>
          </div>
        `,
      },
    ],
    faq: [
      ["어떤 상품이 대형화물에 해당하나요?", "배송사와 센터 기준에 따라 다릅니다. 포장 후 가로·세로·높이, 중량, 형태와 적층 가능 여부를 전달해 입고와 출고 방식을 확인해야 합니다."],
      ["대형화물 물류대행 견적에 필요한 정보는 무엇인가요?", "포장 후 실측 규격과 중량, 월 입출고량, 파렛트 여부, 보관 방향, 적층 조건, 현재 배송 방식과 포장 사진이 필요합니다."],
      ["대형화물 반품도 처리할 수 있나요?", "회수 운송 방식과 상품 검수 범위에 따라 상담할 수 있습니다. 반품 입고 전 차량, 포장 상태와 하차 방법을 먼저 확인해야 합니다."],
    ],
  },
  {
    slug: "guide-large-cargo-inbound-storage.html",
    cluster: "large-cargo",
    category: "대형화물 입고·보관",
    title: "대형화물 입고와 보관 기준: 파렛트·적층·재고관리 체크리스트",
    shortTitle: "대형화물 입고와 보관 기준",
    description:
      "대형 상품과 파렛트 화물을 물류센터에 입고할 때 필요한 예약, 하차, 검수, 적층, 위치관리와 재고조사 기준을 단계별로 정리했습니다.",
    lead:
      "대형화물 입고는 상품이 도착한 뒤 시작되는 일이 아니라 차량과 하차 방식, 공간과 인력을 사전에 맞추는 예약 단계부터 시작됩니다.",
    readingTime: "약 8분",
    accent: "blue",
    takeaways: [
      "입고 예정 정보와 실제 차량, 파렛트 수, 상품 규격이 다르면 하차 지연과 추가비용이 생길 수 있습니다.",
      "적층 가능 여부와 보관 방향은 판매자나 제조사가 명확하게 전달해야 합니다.",
      "대형화물도 위치와 상태별 재고를 구분해야 찾는 시간과 출고 오류를 줄일 수 있습니다.",
    ],
    sections: [
      {
        id: "reservation",
        title: "입고 예약에서 확정할 내용",
        html: `
          <div class="process-grid">
            <div><b>01</b><strong>상품 정보</strong><span>규격, 중량, 수량과 포장 사진을 전달합니다.</span></div>
            <div><b>02</b><strong>차량 정보</strong><span>차량 종류와 상하차 방향을 확인합니다.</span></div>
            <div><b>03</b><strong>하차 방식</strong><span>장비, 파렛트와 작업 인력을 정합니다.</span></div>
            <div><b>04</b><strong>도착 시간</strong><span>센터 운영 일정과 입고 시간을 맞춥니다.</span></div>
            <div><b>05</b><strong>검수 범위</strong><span>수량, 외관과 파손 확인 기준을 정합니다.</span></div>
            <div><b>06</b><strong>보관 위치</strong><span>필요 면적과 적층 조건을 준비합니다.</span></div>
          </div>
        `,
      },
      {
        id: "inspection",
        title: "대형화물 입고 검수 기준",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>검수 항목</th><th>확인 내용</th><th>기록 방법</th></tr></thead>
              <tbody>
                <tr><td>수량</td><td>파렛트·박스·개별 상품 수량</td><td>입고 예정과 실수량 대조</td></tr>
                <tr><td>외부 포장</td><td>찢김, 눌림, 젖음과 밴딩 상태</td><td>이상 위치 사진과 수량 기록</td></tr>
                <tr><td>상품 식별</td><td>SKU, 라벨과 바코드</td><td>미표기 상품 별도 분리</td></tr>
                <tr><td>파렛트</td><td>규격, 파손과 상품 고정 상태</td><td>교체·보강 필요 여부 기록</td></tr>
                <tr><td>취급 표시</td><td>상하 방향, 적층 제한과 주의 표시</td><td>보관 위치에 조건 반영</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        id: "stacking",
        title: "적층과 보관 방향을 임의로 정하지 마세요",
        html: `
          <div class="signal-grid">
            <div><b>적층</b><strong>가능 단수 확인</strong><span>포장 강도와 제조사 기준을 바탕으로 정합니다.</span></div>
            <div><b>방향</b><strong>눕힘·세움 제한</strong><span>상품 특성과 내부 구조에 맞는 방향을 유지합니다.</span></div>
            <div><b>하중</b><strong>바닥·파렛트 집중 하중</strong><span>상품과 포장 무게를 포함해 위치를 정합니다.</span></div>
            <div><b>동선</b><strong>출고 빈도별 위치</strong><span>자주 출고되는 상품의 이동 거리를 줄입니다.</span></div>
          </div>
          <div class="note"><b>판매자 역할</b><span>센터가 상품 내부 구조를 추측하지 않도록 제조사 보관 지침과 금지 방향, 적층 한계를 문서로 전달해야 합니다.</span></div>
        `,
      },
      {
        id: "inventory",
        title: "대형화물도 위치별 재고관리가 필요합니다",
        html: `
          <ol class="number-list">
            <li><b>고유 위치 등록</b><span>바닥, 랙과 파렛트 위치를 상품 재고와 연결합니다.</span></li>
            <li><b>상태 구분</b><span>정상, 출고 대기, 보류, 파손과 반품 재고를 분리합니다.</span></li>
            <li><b>이동 기록</b><span>공간 재배치와 출고 준비 이동도 재고 기록에 반영합니다.</span></li>
            <li><b>순환 조사</b><span>고가·고회전 상품과 오류 위험 위치부터 정기 확인합니다.</span></li>
            <li><b>장기재고 점검</b><span>오래 보관된 상품의 포장 상태와 공간 비용을 함께 확인합니다.</span></li>
          </ol>
        `,
      },
      {
        id: "outbound",
        title: "출고 전 다시 확인할 항목",
        html: `
          <ul class="check-list">
            <li>주문 상품과 실제 피킹한 SKU·수량이 일치하는지 확인합니다.</li>
            <li>장기 보관 중 포장 눌림, 밴딩 이완과 외관 손상이 없는지 확인합니다.</li>
            <li>출고 방식에 필요한 보강 포장과 라벨을 적용합니다.</li>
            <li>차량 적재 방향과 다른 화물과의 간섭 가능성을 확인합니다.</li>
            <li>운송장, 인수증과 출고 상태 사진 등 필요한 증빙을 정합니다.</li>
          </ul>
        `,
      },
    ],
    faq: [
      ["대형화물은 입고 예약이 꼭 필요한가요?", "차량과 하차 장비, 작업 인력, 보관 공간을 준비해야 하므로 사전 예약이 중요합니다. 예정 정보가 바뀌면 도착 전에 다시 공유해야 합니다."],
      ["파렛트 없이 입고할 수 있나요?", "상품 규격, 중량과 하차 방식에 따라 가능 여부가 달라집니다. 낱개 입고 시 필요한 인력과 작업비를 사전에 확인해야 합니다."],
      ["적층 가능 단수는 센터가 정하나요?", "판매자나 제조사가 포장 강도와 상품 특성에 맞는 기준을 제공해야 합니다. 센터는 전달받은 조건과 현장 안전 기준을 반영합니다."],
    ],
  },
  {
    slug: "guide-large-cargo-shipping-cost.html",
    cluster: "large-cargo",
    category: "대형화물 물류비",
    title: "대형화물 물류비 계산 방법: 입고·보관·포장·배송비 비교",
    shortTitle: "대형화물 물류비 계산 방법",
    description:
      "부피와 중량이 큰 상품의 3PL 견적을 하차, 입고, 보관 면적, 이동, 보강 포장, 상차와 배송비로 나눠 계산하는 방법입니다.",
    lead:
      "대형화물은 택배비 하나보다 공간과 이동, 상하차, 포장과 배송 방식이 전체 비용에 더 큰 영향을 줄 수 있습니다.",
    readingTime: "약 8분",
    accent: "green",
    takeaways: [
      "본품 크기가 아니라 입출고 포장 완료 상태의 규격과 중량으로 견적을 받아야 합니다.",
      "보관료는 상품 수량뿐 아니라 적층 가능 여부와 실제 차지하는 면적에 따라 달라질 수 있습니다.",
      "평균 출고와 함께 한 번에 들어오는 최대 입고량, 지역별 배송 비중과 반품을 포함해 계산해야 합니다.",
    ],
    sections: [
      {
        id: "components",
        title: "대형화물 물류비를 구성하는 작업",
        html: `
          <div class="cost-grid">
            <div><b>하차</b><strong>차량·장비·인력</strong><span>파렛트와 낱개 입고 방식</span></div>
            <div><b>입고</b><strong>수량·외관 검수</strong><span>SKU 등록과 이상 기록</span></div>
            <div><b>보관</b><strong>면적·파렛트·위치</strong><span>적층 제한과 장기재고</span></div>
            <div><b>출고</b><strong>이동·피킹·상차</strong><span>중량과 작업 난이도</span></div>
            <div><b>포장</b><strong>보강·밴딩·완충</strong><span>자재와 추가 작업</span></div>
            <div><b>배송</b><strong>택배·화물·용달</strong><span>규격, 거리와 차량 조건</span></div>
          </div>
        `,
      },
      {
        id: "storage",
        title: "보관비는 적층 가능 여부에 따라 달라집니다",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>보관 형태</th><th>비용에 영향을 주는 요소</th><th>확인할 내용</th></tr></thead>
              <tbody>
                <tr><td>파렛트 보관</td><td>파렛트 수, 높이와 중량</td><td>표준 규격 여부와 교체 조건</td></tr>
                <tr><td>바닥 보관</td><td>점유 면적과 통로 공간</td><td>상품별 고정 위치 필요 여부</td></tr>
                <tr><td>적층 보관</td><td>가능 단수와 포장 강도</td><td>하단 상품 눌림 위험과 제한</td></tr>
                <tr><td>전용 공간</td><td>형태, 방향과 작업 동선</td><td>비정형·고가 상품의 분리 조건</td></tr>
              </tbody>
            </table>
          </div>
          <div class="formula"><b>월 예상 보관비</b><span>보관 단위별 단가 × 평균 사용 수량 또는 점유 면적 + 장기재고·전용 공간 조건</span></div>
        `,
      },
      {
        id: "shipping",
        title: "배송 방식을 주문별로 구분하세요",
        html: `
          <ol class="number-list">
            <li><b>규격 택배</b><span>배송사 허용 범위 안에 들어오는 상품의 운임을 확인합니다.</span></li>
            <li><b>대형 택배·화물</b><span>규격, 중량, 권역과 인계 방식에 따른 조건을 확인합니다.</span></li>
            <li><b>용달·전용 차량</b><span>상품 수, 거리, 차량 종류와 상하차 조건을 반영합니다.</span></li>
            <li><b>묶음 배송</b><span>같은 지역과 일정의 주문을 합칠 수 있는지 검토합니다.</span></li>
            <li><b>반품 회수</b><span>회수 차량과 재포장, 센터 재입고 비용을 별도로 계산합니다.</span></li>
          </ol>
        `,
      },
      {
        id: "simulation",
        title: "세 가지 운영 상황으로 견적을 계산하세요",
        html: `
          <div class="signal-grid">
            <div><b>평상시</b><strong>월평균 입출고량</strong><span>일반적인 보관과 출고 총비용을 계산합니다.</span></div>
            <div><b>최대 입고</b><strong>한 번에 들어오는 물량</strong><span>하차와 임시 공간의 추가 조건을 확인합니다.</span></div>
            <div><b>성수기</b><strong>최대 보관·출고량</strong><span>공간과 차량 확보 조건을 확인합니다.</span></div>
            <div><b>반품</b><strong>회수와 재입고 상황</strong><span>운송, 검수와 재포장 비용을 반영합니다.</span></div>
          </div>
        `,
      },
      {
        id: "checklist",
        title: "견적서에서 놓치기 쉬운 비용",
        html: `
          <ul class="check-list">
            <li>입고 차량 대기, 예약 변경과 예정 정보 불일치에 따른 추가 작업</li>
            <li>낱개 하차, 파렛트 교체와 파손 파렛트 처리 비용</li>
            <li>비정형 상품의 별도 위치와 적층 불가에 따른 공간 비용</li>
            <li>출고 전 밴딩, 모서리 보호와 추가 완충재 등 보강 포장</li>
            <li>규격·중량 초과, 외곽 지역과 현장 상하차 배송 조건</li>
            <li>반품 회수 후 재포장, 폐기 또는 공급사 반송 비용</li>
          </ul>
          <div class="note"><b>비교 원칙</b><span>단가표가 아니라 예상 물량과 실제 작업 조건을 넣은 월 총비용 시뮬레이션으로 업체를 비교해야 합니다.</span></div>
        `,
      },
    ],
    faq: [
      ["대형화물 보관비는 어떻게 계산하나요?", "파렛트 수, 점유 면적, 높이, 중량과 적층 가능 여부에 따라 달라질 수 있습니다. 평균과 최대 보관량을 함께 전달해야 합니다."],
      ["대형화물도 일반 택배로 보낼 수 있나요?", "배송사별 허용 규격과 중량 안에 들어오는지 확인해야 합니다. 범위를 넘으면 대형 택배, 화물 또는 전용 차량 등 다른 방식을 검토합니다."],
      ["견적에서 가장 자주 빠지는 비용은 무엇인가요?", "낱개 하차, 파렛트 교체, 적층 불가 공간, 보강 포장, 규격 초과 배송과 반품 회수 작업이 별도 조건인 경우가 많습니다."],
    ],
  },
  {
    slug: "guide-large-cargo-packaging-damage.html",
    cluster: "large-cargo",
    category: "대형화물 포장",
    title: "대형화물 포장과 파손 예방: 보관·상차·배송 체크리스트",
    shortTitle: "대형화물 포장과 파손 예방",
    description:
      "대형 상품의 물류 과정에서 눌림, 흔들림, 모서리 충격과 포장 이탈을 줄이기 위한 입고 포장, 보관, 이동, 상차와 배송 기준입니다.",
    lead:
      "대형화물 파손은 배송 중 충격만이 아니라 입고 포장, 적층, 내부 이동과 차량 고정 기준이 연결되지 않을 때 발생하기 쉽습니다.",
    readingTime: "약 8분",
    accent: "purple",
    takeaways: [
      "포장 기준은 상품 보호뿐 아니라 장비 이동, 보관과 차량 적재까지 고려해 설계해야 합니다.",
      "파손 이력이 있다면 결과 사진만 보지 말고 포장이 이탈한 단계와 충격 방향을 찾아야 합니다.",
      "출고 전 사진과 포장 자재 기록은 반복 파손의 원인을 비교하는 데 도움이 됩니다.",
    ],
    sections: [
      {
        id: "risks",
        title: "대형화물에서 자주 확인할 파손 위험",
        html: `
          <div class="signal-grid">
            <div><b>눌림</b><strong>적층과 집중 하중</strong><span>하단 포장과 상품에 지속적인 압력이 생깁니다.</span></div>
            <div><b>충격</b><strong>모서리·돌출부 접촉</strong><span>이동과 상하차 중 작은 접촉이 손상으로 이어집니다.</span></div>
            <div><b>흔들림</b><strong>내부 빈 공간과 고정 부족</strong><span>차량 이동 중 상품이 포장 안에서 움직입니다.</span></div>
            <div><b>이탈</b><strong>밴딩·랩핑 풀림</strong><span>파렛트와 상품이 분리되거나 기울어질 수 있습니다.</span></div>
          </div>
        `,
      },
      {
        id: "packaging",
        title: "포장 기준서에 필요한 항목",
        html: `
          <div class="table-wrap">
            <table>
              <thead><tr><th>항목</th><th>정할 내용</th><th>확인 자료</th></tr></thead>
              <tbody>
                <tr><td>외부 포장</td><td>박스·목재·랩핑 등 기본 포장 방식</td><td>완성 포장 전체 사진</td></tr>
                <tr><td>내부 완충</td><td>빈 공간, 모서리와 취약 부위 보호</td><td>포장 내부 구조 사진</td></tr>
                <tr><td>상품 고정</td><td>밴딩 위치, 횟수와 파렛트 결합</td><td>정면·측면 고정 상태</td></tr>
                <tr><td>취급 표시</td><td>상하 방향, 적층 금지와 주의 라벨</td><td>라벨 위치와 문구</td></tr>
                <tr><td>보강 조건</td><td>배송 방식별 추가 자재와 작업</td><td>규격·중량별 작업표</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        id: "warehouse",
        title: "보관과 내부 이동에서 지킬 기준",
        html: `
          <ol class="number-list">
            <li><b>보관 방향 유지</b><span>입고부터 출고까지 눕힘·세움 제한을 위치에 표시합니다.</span></li>
            <li><b>적층 한계 준수</b><span>포장 강도와 상품 특성에 맞는 단수를 넘기지 않습니다.</span></li>
            <li><b>통로 확보</b><span>이동 장비와 상품이 다른 재고에 부딪히지 않을 간격을 유지합니다.</span></li>
            <li><b>돌출부 보호</b><span>손상되기 쉬운 모서리와 부품의 접촉을 줄입니다.</span></li>
            <li><b>장기 보관 점검</b><span>밴딩 이완, 포장 눌림과 습기 흔적을 정기 확인합니다.</span></li>
          </ol>
        `,
      },
      {
        id: "loading",
        title: "상차와 차량 인계 전 체크리스트",
        html: `
          <ul class="check-list">
            <li>주문 상품, 수량과 포장 라벨이 일치하는지 확인합니다.</li>
            <li>포장 외관과 밴딩·랩핑이 이동 중 풀리지 않는지 확인합니다.</li>
            <li>차량 적재 방향과 무게 중심을 운송 담당자와 공유합니다.</li>
            <li>다른 화물이 상품을 누르거나 움직이며 충격을 주지 않는지 확인합니다.</li>
            <li>필요한 경우 출고 전 포장 상태와 차량 인계 사진을 남깁니다.</li>
          </ul>
        `,
      },
      {
        id: "improvement",
        title: "파손이 발생했을 때 개선하는 순서",
        html: `
          <div class="process-grid">
            <div><b>01</b><strong>상태 보존</strong><span>상품과 내외부 포장을 함께 촬영합니다.</span></div>
            <div><b>02</b><strong>단계 확인</strong><span>입고, 보관, 출고와 배송 기록을 대조합니다.</span></div>
            <div><b>03</b><strong>충격 추정</strong><span>손상 위치와 포장 변형 방향을 확인합니다.</span></div>
            <div><b>04</b><strong>포장 보완</strong><span>완충, 모서리와 고정 방식을 수정합니다.</span></div>
            <div><b>05</b><strong>시험 출고</strong><span>변경한 방식으로 일부 주문을 확인합니다.</span></div>
            <div><b>06</b><strong>기준 반영</strong><span>작업 사진과 문서를 최신 상태로 바꿉니다.</span></div>
          </div>
          <div class="note"><b>개선 원칙</b><span>자재를 무조건 늘리기보다 손상이 시작된 위치와 단계에 맞춰 포장과 취급 기준을 수정해야 비용과 파손을 함께 줄일 수 있습니다.</span></div>
        `,
      },
    ],
    faq: [
      ["대형화물은 포장을 두껍게 하면 파손을 막을 수 있나요?", "자재 두께만으로 해결되지 않을 수 있습니다. 내부 빈 공간, 모서리, 무게 중심, 상품 고정과 차량 적재 방향을 함께 확인해야 합니다."],
      ["출고 사진은 모든 주문에 필요한가요?", "상품 가치, 파손 이력과 분쟁 가능성에 따라 촬영 범위를 정하는 것이 좋습니다. 반복 문제가 있는 상품은 포장과 인계 상태를 비교할 수 있게 기록합니다."],
      ["파손이 반복되면 무엇부터 확인해야 하나요?", "손상된 상품과 내외부 포장을 보존하고 입고, 보관, 출고, 차량 인계와 배송 기록을 시간순으로 대조해 손상이 시작된 단계를 찾습니다."],
    ],
  },
];
