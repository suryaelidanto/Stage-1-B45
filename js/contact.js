
// console.log("Hallo Semuanya")
// alert("Selamat Pagi")
// document.write("Hallo Batch 40")

// Variable

// VAR
// LET
// CONST

// var bisa di deklarasi ulang
// var gelas = "Air Putih"
// var gelas = "Kopi"
// console.log(gelas)

// // let tidak bisa di deklarasi ulang
// let mangkok = "Bakso"
// mangkok = "Mie Ayam"
// console.log(mangkok)

// // const data tetap tidak bisa diganti
// const piring = "Nasi Goreng"
// console.log(piring)

// type data
// let nama = "Samsul"
// let umur = 15

// nama saya Samsul umur saya 15 tahun
// console.log("nama saya Samsul umur saya 15 tahun");
// console.log(`nama saya ${nama} umur saya ${umur} tahun`); // cara 1
// console.log("nama saya", nama, "umur saya", umur, "tahun"); // cara 2
// console.log("nama saya " + nama + " umur saya " + umur + " tahun");

// operator

// let bilanganSatu = 50
// let bilanganDua = "20"

// let result = bilanganSatu + bilanganDua
// console.log(result);


// condition
// jika nilai 75 atas maka lulus

// let nilai = 75

// if(nilai == 75 ){
//     console.log("lulus");
// } else {
//     console.log("tidak lulus");
// }


// function
// function Hello(){

//     let bilanganSatu = 50
//     let bilanganDua = 20

//     let result = bilanganSatu + bilanganDua

//     console.log(result);
// }

// Hello()

// function Hello(bilanganSatu, bilanganDua){

//     // let result = bilanganSatu + bilanganDua

//     // console.log(result);
//     console.log(bilanganSatu);
//     console.log(bilanganDua);
// }

// Hello(50, 20)


// membuat function dengan nama namaSaya, dengan parameter name

// function namaSaya(name){
//     console.log(name);
// }

// namaSaya("Samsul")



function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value


    // if( name == "" || email == "" || phone == ""){
    //    return alert("semua filed wajib diisi")
    // }

    if(name == ""){
       return alert("name harus diisi")
    } else if(email == ""){
       return alert("email harus diisi")
    } else if(phone == ""){
       return alert("phone harus diisi")
    } else if(subject == ""){
       return alert("subject harus diisi")
    } else if(message == ""){
       return alert("message harus diisi")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    // <a href="mailto:hallo@dw.com?subject=hallo samsul&body=isi pesan">Send email</a>
 
    let emailReceiver = "hallo@dw.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak ke nomor ${phone}`
    a.click()

    // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student);
}
