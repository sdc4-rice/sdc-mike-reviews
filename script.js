import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  rps: 1000,
  duration: "60s"
  // stages: [
  //   { duration: "15s", target: 1 },
  //   { duration: "15s", target: 2 },
  //   { duration: "15s", target: 3 },
  //   { duration: "15s", target: 5 },
  //   { duration: "15s", target: 7 },
  //   { duration: "15s", target: 10 }
  // ]
};

export default function() {
  let res = http.get("http://localhost:3002/reviews/9999998");
  check(res, {
    "status was 200": (r) => r.status == 200
  });
};
