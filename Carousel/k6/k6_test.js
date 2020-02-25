import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("errors");

export let options = {
  vus:100,
  duration: '30s'
}


export default function() {
  var url = "http://localhost:50002/api/carousel/9900088/";

  check(http.get(url), {
    "status is 200": (r) => r.status == 200
  }) || errorRate.add(1);
};