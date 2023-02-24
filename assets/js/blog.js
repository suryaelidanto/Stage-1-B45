let datas = [];

function getData(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files[0];
  console.log(image);

  image = URL.createObjectURL(image);

  let data = {
    title,
    content,
    image,
    postedAt: new Date(), // 24 feb 2023, 10:00 WIB
    author: "Dandi Saputra",
  };

  datas.push(data);
  console.log(datas);
  showData();
}

const showData = () => {
  document.getElementById("contents").innerHTML = "";
  for (let i = 0; i < datas.length; i++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${datas[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${datas[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              ${createTime(datas[i].postedAt)} | ${datas[i].author}
            </div>
            <p>
              ${datas[i].content}
            </p>

            <div style="float:right; margin: 10px">
              <p style="font-size: 15px; color:grey">${getDuration(datas[i].postedAt)}</p>
            </div>

          </div>
        </div>`;
  }
};

function createTime(time) {
  // declaration variable time
  let years = time.getFullYear();
  let monthIndex = time.getMonth();
  let date = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // 24 Feb 2023 10:00 WIB
  return `${date} ${month[monthIndex]} ${years} ${hour}:${minute} WIB`;
}


const getDuration = (time) => {
  const miliSecond = 1000
  const distance = new Date() - new Date(time);
  
  const dayDistance = Math.floor(distance / (24 * 60 * 60 * miliSecond))
  if(dayDistance > 0 ) {
    return dayDistance  + "Day Ago"
  } else {
    const hourDistance = Math.floor(distance / (60 * 60 * miliSecond))
    if(hourDistance != 0) {
      return hourDistance  + "Hour Ago"
    } else {
      const minuteDistance = Math.floor(distance / (60 * miliSecond)) 
      if(minuteDistance >= 1) {
        return minuteDistance  + "minute Ago"
      } else {
        const secondDistance = Math.floor(distance / (miliSecond))
        if(secondDistance != 0) {
          return secondDistance  + "second Ago"
        }
      }
    }
  }
};

setInterval(showData, 1000)


// 1 hari = 24 jam
// 1 jam = 60 menit
// 1 menit = 60 detik
// 1 detik = 1000 milidetik
// math.floor => 1.9 => 1
// 09:34:05
// math.ceil => 1.2 => 2
// math.arround => 1.4 => 1 & 1.6 => 2
