import http from 'k6/http';

export default function () {
  var url = 'http://localhost:3002/api/users/login';
  var payload = JSON.stringify({
    "email": "testauto@gmail.com",
    "password": "Password1"
  });

  export const options = {
    duration: '1m',
    vus: 10,
    thresholds: {
      http_req_duration: ['p(95)<500'],
    },
  };
  

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
