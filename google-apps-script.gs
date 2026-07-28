var SHEET_ID = '1QRf2_lzRankZ19PLWVlcAYWdhThAYzqJBM1lXFmPoiI';
var LOGISTICS_SHEET_NAME = '물류대행신청';
var SLACK_WEBHOOK_PROPERTY = 'SLACK_WEBHOOK_URL';

function doPost(e) {
  var params = e.parameter || {};
  var formType = String(params.formType || '').toLowerCase();

  if (formType === '3pl' || formType === 'logistics') {
    return handleLogisticsPost_(params);
  }

  return handleEducationPost_(params);
}

function handleLogisticsPost_(params) {
  var sheet = getSheetByName_(LOGISTICS_SHEET_NAME);
  ensureLogisticsHeader_(sheet);

  var row = [];
  row.push(new Date());
  row.push(params.submittedAt || '');
  row.push(params.source || '');
  row.push(params.landingPage || '');
  row.push(params.pageUrl || '');
  row.push(params.companyName || '');
  row.push(params.managerName || '');
  row.push(formatPhoneNumber_(params.phone || ''));
  row.push(params.salesChannels || '');
  row.push(params.productCategory || '');
  row.push(params.monthlyShipments || '');
  row.push(params.storageNeed || '');
  row.push(params.largeCargo || '');
  row.push(params.coupangMilkrun || '');
  row.push(params.rocketGrowth || '');
  row.push(params.currentLogistics || '');
  row.push(params.location || '');
  row.push(params.message || '');
  row.push(params.privacyAgree || '');
  row.push('전송 대기');
  row.push('');

  var lock = LockService.getScriptLock();
  var rowNumber;

  lock.waitLock(10000);
  try {
    sheet.appendRow(row);
    rowNumber = sheet.getLastRow();
  } finally {
    lock.releaseLock();
  }

  var slackResult = sendSlackNotification_(params, row[0]);
  sheet.getRange(rowNumber, 20, 1, 2).setValues([[
    slackResult.ok ? '전송 성공' : '전송 실패',
    slackResult.message
  ]]);

  return jsonResponse_({
    ok: true,
    type: '3pl',
    slack: slackResult.ok
  });
}

function handleEducationPost_(params) {
  var sheet = getFirstSheet_();
  var parentPhone = formatPhoneNumber_(params.parentPhone || '');
  var grade = resolveGrade_(params.grade, params.gradeChoice, params.gradeOther);

  ensureEducationHeader_(sheet);

  var row = [];
  row.push(new Date());
  row.push(params.submittedAt || '');
  row.push(params.source || '');
  row.push(params.landingPage || '');
  row.push(params.pageUrl || '');
  row.push(parentPhone);
  row.push(grade);
  row.push(params.school || '');
  row.push(params.mathLevel || '');
  row.push(params.score || '');
  row.push(params.classType || '');
  row.push(params.concern || '');
  row.push(params.privacyAgree || '');

  sheet.appendRow(row);
  return jsonResponse_({ ok: true, type: 'education' });
}

function formatPhoneNumber_(value) {
  var numbers = String(value || '').replace(/\D/g, '').slice(0, 11);

  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 7) return numbers.replace(/(\d{3})(\d+)/, '$1-$2');

  return numbers.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
}

function resolveGrade_(grade, gradeChoice, gradeOther) {
  var selectedGrade = String(grade || '').trim();
  if (selectedGrade) return selectedGrade;

  var selectedChoice = String(gradeChoice || '').trim();
  if (selectedChoice === '기타') return String(gradeOther || '').trim();

  return selectedChoice;
}

function doGet() {
  return ContentService
    .createTextOutput('Landing page form endpoint is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function getSpreadsheet_() {
  return SpreadsheetApp.openById(SHEET_ID);
}

function getFirstSheet_() {
  var sheets = getSpreadsheet_().getSheets();
  return sheets[0];
}

function getSheetByName_(sheetName) {
  var spreadsheet = getSpreadsheet_();
  var sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}

function ensureEducationHeader_(sheet) {
  var headers = [
    '접수일시',
    '브라우저 제출시각',
    '유입페이지',
    '랜딩페이지',
    '페이지URL',
    '학부모 연락처',
    '학생 학년',
    '학교명',
    '현재 수학 상태',
    '현재 점수/등급',
    '희망 수업 방식',
    '고민 내용',
    '개인정보 동의'
  ];

  setHeader_(sheet, headers, '#EFF4FF');
}

function ensureLogisticsHeader_(sheet) {
  var headers = [
    '접수일시',
    '브라우저 제출시각',
    '유입페이지',
    '랜딩페이지',
    '페이지URL',
    '업체명',
    '담당자명',
    '연락처',
    '판매 채널',
    '주요 상품군',
    '월 평균 출고량',
    '보관 필요 여부',
    '대형화물 여부',
    '쿠팡 밀크런 필요 여부',
    '로켓그로스 필요 여부',
    '현재 물류 방식',
    '위치/지역',
    '상담 희망 내용',
    '개인정보 동의',
    'Slack 알림 상태',
    'Slack 응답'
  ];

  setHeader_(sheet, headers, '#F1ECFF');
}

function sendSlackNotification_(params, receivedAt) {
  var webhookUrl = PropertiesService
    .getScriptProperties()
    .getProperty(SLACK_WEBHOOK_PROPERTY);

  if (!webhookUrl) {
    return {
      ok: false,
      message: SLACK_WEBHOOK_PROPERTY + ' 설정이 없습니다.'
    };
  }

  var payload = {
    text: '새 물류대행 상담 신청: ' + slackValue_(params.companyName),
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '새 물류대행 상담 신청',
          emoji: true
        }
      },
      {
        type: 'section',
        fields: [
          slackField_('업체명', params.companyName),
          slackField_('담당자명', params.managerName),
          slackField_('연락처', formatPhoneNumber_(params.phone || '')),
          slackField_('월 평균 출고량', params.monthlyShipments),
          slackField_('판매 채널', params.salesChannels),
          slackField_('주요 상품군', params.productCategory)
        ]
      },
      {
        type: 'section',
        fields: [
          slackField_('보관 필요 여부', params.storageNeed),
          slackField_('대형화물 여부', params.largeCargo),
          slackField_('쿠팡 밀크런', params.coupangMilkrun),
          slackField_('로켓그로스', params.rocketGrowth),
          slackField_('현재 물류 방식', params.currentLogistics),
          slackField_('위치/지역', params.location)
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*상담 희망 내용*\n' + slackValue_(params.message)
        }
      },
      {
        type: 'section',
        fields: [
          slackField_('유입페이지', params.source),
          slackField_('랜딩페이지', params.landingPage),
          slackField_('페이지 URL', params.pageUrl),
          slackField_('브라우저 제출시각', params.submittedAt),
          slackField_('접수일시', formatSlackDate_(receivedAt)),
          slackField_('개인정보 동의', params.privacyAgree)
        ]
      }
    ]
  };

  try {
    var response = UrlFetchApp.fetch(webhookUrl, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
    var responseCode = response.getResponseCode();
    var responseText = String(response.getContentText() || '').trim();
    var success = responseCode >= 200 && responseCode < 300;

    return {
      ok: success,
      message: 'HTTP ' + responseCode + (responseText ? ' / ' + responseText : '')
    };
  } catch (error) {
    return {
      ok: false,
      message: String(error && error.message ? error.message : error)
    };
  }
}

function testSlackNotification() {
  var result = sendSlackNotification_({
    source: 'apps-script-authorization-test',
    landingPage: '3PL1',
    pageUrl: 'https://3pl.33pl.co.kr/consultation/?from=main',
    companyName: 'Slack 알림 권한 테스트',
    managerName: '시스템 점검',
    phone: '01000000000',
    salesChannels: '자사몰, 스마트스토어, 쿠팡',
    productCategory: '연동 테스트 상품',
    monthlyShipments: '1,000~3,000건',
    storageNeed: '필요',
    largeCargo: '상담 필요',
    coupangMilkrun: '필요',
    rocketGrowth: '필요',
    currentLogistics: '자체 출고',
    location: '테스트',
    message: 'Apps Script 외부 전송 권한 및 Slack 수신 확인용 테스트입니다.',
    submittedAt: Utilities.formatDate(
      new Date(),
      'Asia/Seoul',
      "yyyy-MM-dd'T'HH:mm:ssXXX"
    ),
    privacyAgree: '동의'
  }, new Date());

  Logger.log(JSON.stringify(result));

  if (!result.ok) {
    throw new Error(result.message);
  }
}

function logAuthorizationUrl() {
  var authorizationInfo = ScriptApp.getAuthorizationInfo(
    ScriptApp.AuthMode.FULL
  );

  Logger.log('Authorization status: ' + authorizationInfo.getAuthorizationStatus());
  Logger.log('Authorization URL: ' + authorizationInfo.getAuthorizationUrl());
}

function slackField_(label, value) {
  return {
    type: 'mrkdwn',
    text: '*' + slackEscape_(label) + '*\n' + slackValue_(value)
  };
}

function slackValue_(value) {
  var text = String(value || '').trim();
  return slackEscape_(text || '-');
}

function slackEscape_(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatSlackDate_(value) {
  return Utilities.formatDate(
    value instanceof Date ? value : new Date(value),
    'Asia/Seoul',
    'yyyy-MM-dd HH:mm:ss'
  );
}

function setHeader_(sheet, headers, background) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  } else {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground(background);
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
