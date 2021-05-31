import http from "k6/http";
import {check, sleep} from "k6";

export let options = {
    stages: [
        {duration: "30s", target: 5},
        {duration: "1m30s", target: 2},
        {duration: "20s", target: 0},
    ]
}

export default function () {
    let url = 'http://127.0.0.1:3001/api/expenses';
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let res = http.get(url, params);

    check(res, {
        "status was 200": (r) => r.status === 200,
        "transaction time OK": (r) => r.timings.duration < 200
    });
    sleep(1);
}