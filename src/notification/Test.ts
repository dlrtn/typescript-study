import axios from 'axios';

// FCM 서버 키
const fcmServerKey = 'AAAAlGoLqZ0:APA91bFF5yMGC0DxB8Q_NL3FV0urf-ikuw7GIwl07fAH4VzH0' +
    'iFcMe9wiycI4Q7deF3vO96vYowmjN0Bpn9c5atkdH2YIWMcuQ0h-zX_drIYDtZa_QVcdGHTY_DYuMXtiF5H1Hfy_u76';
// 알림 대상 기기의 FCM 토큰
const fcmToken = `cWulIt0tHkQYkK1Sil1ZsL:APA91bGx6vpBsfTODEwJV72QMiH4wWEIffj4RVg0YuyXEUF1uhWXVt7RNW7Et3Gj5dCAXwnIetxhZU-PsUIWWlffb2aRN6Nfrz7n5pGlR-hjd8fEXlEFOJBOilq4Cu5NUHbOsp9CRoZy`;

// 알림 데이터 생성
const notificationData = {
    title: '4월 5일',
    body: 'ㅋㅋㅋㅋㅋㅋㅋ',
};

console.log('FCM 서버에 전송할 알림 데이터: ', notificationData);

// FCM 서버에 전송할 요청 생성
const requestBody = JSON.stringify({
    notification: notificationData,
    to: fcmToken
});

const config = {
    headers: {
        'Authorization': 'key=' + fcmServerKey,
        'Content-Type': 'application/json'
    }}

console.log(config)
console.log(requestBody)