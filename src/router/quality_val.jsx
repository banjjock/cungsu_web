import React, { useState, useEffect } from "react";

export default function Load_val({code=''}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // 예: GET http://<서버IP>:4000/api/sensors/2d0d05f8-... 같은 엔드포인트
    fetch(`http://168.131.224.219:8080/api/readings/latest`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json.data ?? json)) // 서버가 {ok, data}로 줄 수도 있어서 보정
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  const readings = Array.isArray(data)
  ? data
  : data?.readings ?? []; // data가 { readings: [...] } 형태면 여기로
  const val = readings.find(r => r.code === code)?.value;
  return val;
}