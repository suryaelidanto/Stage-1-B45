
let dataBlog = [] // untuk menyimpan data-data blog

function addBlog(event) {
    event.preventDefault() // agar tidak melakukan referesh halaman

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    // let startDate = document.getElementById("start-date").value
    // let endDate = document.getElementById("end-date").value

    // karena kita ingin mengambil file datanya bukan valuenya
    let image = document.getElementById("input-blog-image").files

    let facebook = document.getElementById("input-fb").checked
    let instagram = document.getElementById("input-ig").checked
    let tiktok = document.getElementById("input-tok").checked

    if (facebook) {
        facebook = document.getElementById("input-fb").value
    } else {
        facebook = ""
    }

    if (instagram) {
        instagram = document.getElementById("input-ig").value
    } else {
        instagram = ""
    }

    if (tiktok) {
        tiktok = document.getElementById("input-tok").value
    } else {
        tiktok = ""
    }

    // jika image diisi
    if (image.length != 0) {
        // untuk membuat url gambar, agar tampil
        image = URL.createObjectURL(image[0])
    } else {
        // jika tidak diisi
        return alert("gambar wajib diisi!!")
    }


    // mengelompakan data menjadi object
    let blog = {
        title,
        content,
        image,
        postAt: new Date(),
        author: "Surya Elidanto",
        // startDate,
        // endDate,
        facebook,
        instagram,
        tiktok
    }

    dataBlog.push(blog)
    console.log(dataBlog);

    renderBlog() // menjalankan function renderBlog agar data blog tampil
}

function renderBlog() {

    document.getElementById("contents").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index]);

        document.getElementById("contents").innerHTML += `
        
            <div class="blog-list-item">
                <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
                </div>
                <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${dataBlog[index].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
                </div>
                <p>
                    ${dataBlog[index].content}
                </p>
                <i class="fa-brands fa-${dataBlog[index].facebook}"></i>
                <i class="fa-brands fa-${dataBlog[index].instagram}"></i>
                <i class="fa-brands fa-${dataBlog[index].tiktok}"></i>

                <div style="float:right; margin: 10px">
                    <p style="font-size: 15px; color:grey">${getDistanceTime(dataBlog[index].postAt)}</p>
                </div>
                </div>
            </div>
        `
    }
}

function getFullTime(time) {

    // let time = new Date()
    // console.log(time);

    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nop', 'Dec']
    // console.log(monthName[8]);

    let date = time.getDate()
    console.log(date);

    let monthIndex = time.getMonth()
    console.log(monthIndex);

    let year = time.getFullYear()
    console.log(year);

    let hours = time.getHours()
    let minutes = time.getMinutes()


    if (hours <= 9) {
        hours = "0" + hours
    } else if (minutes <= 9) {
        minutes = "0" + minutes
    }

    // 16 Sep 2022 09:11 WIB
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time) {

    let timeNow = new Date()
    let timePost = time

    // waktu sekarang - waktu post
    let distance = timeNow - timePost // hasilnya milisecond
    console.log(distance);

    let milisecond = 1000 // milisecond
    let secondInHours = 3600 // 1 jam 3600 detik
    let hoursInDay = 24 // 1 hari 24 jam

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)


    if (distanceDay > 0) {
        return `${distanceDay} day ago`
    } else if (distanceHours > 0) {
        return `${distanceHours} hours ago`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} minutes ago`
    } else {
        return `${distanceSecond} seconds ago`
    }

}

// setInterval(function(){
//     renderBlog()
// }, 3000)