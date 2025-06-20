const date = [
  {
    date: "2025-06-14",
    month: "06월",
    weekday: "토",
    day: "14",
    selected: true,
  },
  {
    date: "2025-06-15",
    month: "06월",
    weekday: "일",
    day: "15",
    selected: false,
  },
  {
    date: "2025-06-16",
    month: "06월",
    weekday: "월",
    day: "16",
    selected: false,
  },
  {
    date: "2025-06-17",
    month: "06월",
    weekday: "화",
    day: "17",
    selected: false,
  },
  {
    date: "2025-06-18",
    month: "06월",
    weekday: "수",
    day: "18",
    selected: false,
  },
  {
    date: "2025-06-19",
    month: "06월",
    weekday: "목",
    day: "19",
    selected: false,
  },
  {
    date: "2025-06-20",
    month: "06월",
    weekday: "금",
    day: "20",
    selected: false,
  },
  {
    date: "2025-06-21",
    month: "06월",
    weekday: "토",
    day: "21",
    selected: false,
  },
];

const movie = [
  {
    title: "신명",
    genre: "드라마",
    rating: "15",
    duration: 118,
    release_date: "2025-06-02",
    showtimes: [
      { time: "12:10", screen: "2관 6층", seats: 90 },
      { time: "16:00", screen: "6관 10층", seats: 83 },
      { time: "21:10", screen: "1관 6층", seats: 129 },
    ],
  },
  {
    title: "미션 임파서블: 파이널 레코닝",
    genre: "액션",
    rating: "15",
    duration: 169,
    release_date: "2025-05-17",
    showtimes: [
      { time: "11:00", screen: "1관 6층", seats: 112 },
      { time: "14:20", screen: "1관 6층", seats: 56 },
      { time: "17:45", screen: "1관 6층", seats: 124 },
      { time: "18:30", screen: "6관 10층", seats: 98 },
      { time: "21:50", screen: "6관 10층", seats: 123 },
      { time: "23:40", screen: "1관 6층", seats: 144 },
    ],
  },
  {
    title: "인생은 아름다워",
    genre: "드라마, 전쟁, 코미디",
    rating: "All",
    duration: 116,
    release_date: "2025-06-11",
    showtimes: [
      { time: "14:45", screen: "2관 6층", seats: 72 },
      { time: "19:40", screen: "2관 6층", seats: 95 },
    ],
  },
  {
    title: "드래곤 길들이기",
    genre: "액션, 어드벤처, 환타지",
    rating: "All",
    duration: 125,
    release_date: "2025-06-06",
    showtimes: [
      { time: "10:30", screen: "4관 SCREENX 8층", seats: 109 },
      { time: "11:55", screen: "3관 8층", seats: 136 },
      { time: "13:05", screen: "4관 SCREENX 8층", seats: 92 },
      { time: "14:30", screen: "3관 8층", seats: 58 },
      { time: "15:40", screen: "4관 SCREENX 8층", seats: 56 },
      { time: "17:10", screen: "3관 8층", seats: 76 },
      { time: "18:15", screen: "4관 SCREENX 8층", seats: 96 },
      { time: "19:50", screen: "3관 8층", seats: 104 },
      { time: "20:50", screen: "4관 SCREENX 8층", seats: 123 },
      { time: "22:30", screen: "3관 8층", seats: 172 },
      { time: "23:30", screen: "4관 SCREENX 8층", seats: 119 },
    ],
  },
  {
    title: "태양의 노래",
    genre: "로맨스, 멜로",
    rating: "12",
    duration: 108,
    release_date: "2025-06-11",
    showtimes: [
      { time: "09:50", screen: "2관 6층", seats: 0, status: "마감" },
      { time: "22:10", screen: "2관 6층", seats: 123 },
    ],
  },
  {
    title: "하이파이브",
    genre: "코미디, 액션",
    rating: "15",
    duration: 119,
    release_date: "2025-05-30",
    showtimes: [
      { time: "11:30", screen: "5관 10층", seats: 158 },
      { time: "14:00", screen: "5관 10층", seats: 93 },
      { time: "16:30", screen: "5관 10층", seats: 117 },
      { time: "19:00", screen: "5관 10층", seats: 138 },
      { time: "21:30", screen: "5관 10층", seats: 166 },
      { time: "24:00", screen: "5관 10층", seats: 172 },
    ],
  },
  {
    title: "브링 허 백",
    genre: "호러",
    rating: "18",
    duration: 104,
    release_date: "2025-06-06",
    showtimes: [
      { time: "13:40", screen: "6관 10층", seats: 94 },
      { time: "17:20", screen: "2관 6층", seats: 81 },
    ],
  },
  {
    title: "인피니트 15주년 콘서트 리미티드 에디션 더 무비",
    genre: "콘서트 무비",
    rating: "All",
    duration: 115,
    release_date: "2025-06-11",
    showtimes: [{ time: "11:15", screen: "6관 10층", seats: 114 }],
  },
];

document.addEventListener("DOMContentLoaded", function () {
    const dateWrap = document.querySelector('.dateWrap');

    date.forEach((x) => {
      const dateDiv = document.createElement("div");
      dateDiv.className = "dateBox" + ((x.selected) ? " selected" : "");
      dateDiv.innerHTML = `
        <div class="dateLeft">
              <div class="month">${x.month}</div>
              <div class="week">${x.weekday}</div>
        </div>
        <div class="dateRight">
              ${x.day}
        </div>
      `;

      dateDiv.addEventListener("click", () => {
          document.querySelectorAll(".dateBox").forEach((elem) => {
              elem.classList.remove("selected");
          });
          dateDiv.classList.add("selected");
        });
      dateWrap.appendChild(dateDiv);

    });


    const movieContainer = document.querySelector('.movieContainer');

    movie.forEach((x) => {
        const movieWrap = document.createElement('div');
        const releaseDate = x.release_date.replaceAll('-', '.')
        let raingColor = x.rating;
        
        if (raingColor === '15') raingColor = 'fifteen';
        else if (raingColor === '12') raingColor = 'twelve';
        else if (raingColor === '18') raingColor = 'eighteen';
        else raingColor = 'all';
        console.log(raingColor);
        movieWrap.className = 'movieWrap';

        movieWrap.innerHTML += `
            <div class="movieHeader">
                <div class="ratings ${raingColor}">${x.rating}</div>
                <div class="title">${x.title}</div>
                <div class="showing">상영중</div>
                <div class="infoWrap">
                    <span class="genre">${x.genre} /</span>
                    <span class="time">${x.duration}분 /</span>
                    <span class="release">${releaseDate} 개봉</span>
                </div>
            </div>
        `;
        
        const screenGroup = {};

        x.showtimes.forEach((showtimes) => {
            // console.log(showtimes);
            if (!screenGroup[showtimes.screen]) screenGroup[showtimes.screen] = [];
            screenGroup[showtimes.screen].push(showtimes);
        })
        
        Object.entries(screenGroup).forEach(([key, val]) => {
            viewSeats = val[0].seats;
            
            if (viewSeats === 0) viewSeats = val[1].seats;
            const reserveWrap = document.createElement('div');
            reserveWrap.className = 'reserveWrap';

            reserveWrap.innerHTML = `
              <div class="top">
                  <span class="icon">▶</span>
                  <span>2D</span>
                  <span>${key}</span>
                  <span>총 ${viewSeats}석</span>
              </div>
            `;
            const timeWrap = document.createElement('div');
            val.forEach((show) => {
              show.seats = (show.seats === 0) ? '마감' : show.seats + '석';

              timeWrap.className = 'timeWrap';
              timeWrap.innerHTML += `
                <div class="item">
                    <div class="time">${show.time}</div>
                    <div class="seats">${show.seats}</div>
                </div>
              `;
            })
            reserveWrap.appendChild(timeWrap);
            movieWrap.appendChild(reserveWrap);
        })
        movieContainer.appendChild(movieWrap);
    })
});
