import '../App.css';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export function Score() {
    return (
        <section className="score-section">
            <div className="score-header">
              <h2 className="measurement-time">
                (!!) 종합{" "}
                <span className="highlight">수질 측정 점수</span>
              </h2>
            </div>
            <div className="score-box">
              <span className="score"> ??점</span>
              <span className="score-status" style={{ backgroundColor: "#ffc107" }}>
                {"몰루"}
              </span>
            </div>
            <div className="divider"></div>
            <div className="legend">
              <div className="legend-item">
                <span className="legend-color good"></span>
                <span className="legend-label">좋음(100~90)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color normal"></span>
                <span className="legend-label">보통(90~70)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color bad"></span>
                <span className="legend-label">나쁨(70~50)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color very-bad"></span>
                <span className="legend-label">매우나쁨(50~0)</span>
              </div>
            </div>
        </section>
    )
}

export function Quality_prams({pram, category = "none", ppm="ppm"}) {
  return(
      <div className="indicator">
          <span className="label">{category}</span>
          <div className="divider"></div>
          <span className="value">{pram}{ppm}</span>
          <span
          className="status"
          style={{
              backgroundColor:
              pram > 25 ? "#f44336" : pram < 15 ? "#2196f3" : "#4caf50",
          }}
          >
          {pram > 25 ? "높음" : pram < 15 ? "낮음" : "보통"}
          </span>
      </div>
  )
}

export function Report() {
    return(
        <section className="report">
            <div className="report-box">
              <h2 className="report-title">수질 측정 &amp; AI 분석 리포트</h2>
              <p className="note">준비중입니다.</p>
            </div>
          </section>
    )
}

function generateRandomDataPoints(count, min, max, decimals = 2) {
  return Array.from({ length: count }, () =>
    Number((Math.random() * (max - min) + min).toFixed(decimals))
  );
}

export function Graph(){
    const count = 10; // 데이터 개수

    // 시간 라벨 생성 (현재 시각 기준 count 개)
    const timeData = Array.from({ length: count }, (_, i) => {
    const now = new Date();
    now.setSeconds(now.getSeconds() + i * 5);
    return now.toTimeString().split(" ")[0]; // HH:MM:SS
    });

    // 센서 값 랜덤 생성
    const doData  = generateRandomDataPoints(count, 5, 15);   // 용존산소 ppm
    const phData  = generateRandomDataPoints(count, 6.5, 8.5);
    const no2Data = generateRandomDataPoints(count, 0, 1);
    const nh4Data = generateRandomDataPoints(count, 0, 2);

    const data = {
    labels: timeData,
    datasets: [
        {
        label: "용존산소 (ppm)",
        data: doData,
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
        },
        {
        label: "pH",
        data: phData,
        borderColor: "rgba(255, 206, 86, 1)",
        fill: false,
        },
        {
        label: "아질산 (NO₂)",
        data: no2Data,
        borderColor: "rgba(255, 159, 64, 1)",
        fill: false,
        },
        {
        label: "암모니아 (NH₄)",
        data: nh4Data,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
        },
    ],
    };
    return (
        <section className="graph-section">
            <div className="graph-box">
                <h2 className="report-title2">시간별 수질 변화</h2>
                <Line data={data} />
            </div>
        </section>
    )
}




