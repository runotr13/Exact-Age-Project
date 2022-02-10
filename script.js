const years = document.getElementById("years")
const months = document.getElementById("months")
const days = document.getElementById("days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const loading = document.querySelector(".loading")
const countdown = document.querySelector("#countdown")



window.addEventListener("load",()=>{
    loading.style.display = "block";
    // miliseconds in setTimeout
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex"
    },2000);
    // years.innerHTML = "00";
    // months.innerHTML = "00";
    // days.innerHTML = "00";
    // hours.innerHTML = "00";
    // minutes.innerHTML = "00";
    // seconds.innerHTML = "00";

    let H2elements = document.getElementsByTagName("h2")
    // for (let index = 0; index < H2elements.length; index++) {
    //     H2elements[index].innerHTML = "00";
    // };

    let H2elements2 = countdown.querySelectorAll("h2")

    // nodeList.forEach()
    // Array.forEach()
    // H2elements2.forEach(h2Element =>{
    //     h2Element.innerHTML = "--";
    // });
});

// // Convert to array from html collection
// Array.from(H2elements).forEach(element => {
//     element.innerHTML = "00;"
// });

// [...H2elements].forEach(el=>{
//     el.innerHTML = "00";
// });

let selectedBirthday =new Date();
let birthdayPicker = document.querySelector("input[name=birthday]");
birthdayPicker.addEventListener("change",(event)=>{
    console.log(event.target.value);
    //convert to date from dateString
    selectedBirthday = new Date(event.target.value);
    if(selectedBirthday > new Date()){
        alert("Doğum tarihiniz bugünden büyük olamaz.");
        return;
    }
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

    loading.style.display = "block"
    setInterval(updateCountdown,1000);
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex"
    },1000);
});

const updateCountdown = () =>{
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHours = selectedBirthday.getHours();
    let dobMinutes= selectedBirthday.getMinutes();
    let dobSeconds = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHours = now.getHours();
    let currentMinutes= now.getMinutes();
    let currentSeconds = now.getSeconds();

    //if positive => no problem

    let yearOfage = currentYear - dobYear;
    let monthOfage = currentMonth - dobMonth;
    let dayOfage = currentDay - dobDay;
    let hourOfage = currentHours - dobHours;
    let minuteOfage = currentMinutes; - dobMinutes;
    let secondOfage = currentSeconds -  dobSeconds;

    if(secondOfage <0){
        secondOfage += 60;
        minuteOfage--;
    }
    if(minuteOfage < 0){
        minuteOfage += 60
        hourOfage --;
        
    }
    if(hourOfage <0){
        hourOfage += 24;
        dayOfage--;
    }
    if(dayOfage <0){
        //homework ==> istead of 30 get previous month day 
        monthOfage --;
        dayOfage += 30;
    }

    if(monthOfage <0){
        yearOfage --;
        monthOfage += 12;
    }
    
    
    
    
    //Add values to DOM

    years.innerHTML = yearOfage.toString().padStart(2,"0");
    months.innerHTML = monthOfage.toString().padStart(2,"0");
    days.innerHTML = dayOfage.toString().padStart(2,"0");
    hours.innerHTML = hourOfage.toString().padStart(2,"0");
    minutes.innerHTML = minuteOfage.toString().padStart(2,"0");
    seconds.innerHTML = secondOfage.toString().padStart(2,"0");
};





















































// //********YIL */
// birthdayPicker.addEventListener("change",function event(){
//     //YIL
//     let yearss = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear()-1;
//     document.getElementById("yearsonur").innerHTML = yearss;
//     //AY
//     let month = new Date().getMonth() - new Date(birthdayPicker.value).getMonth() +11;
//     document.getElementById("months").innerHTML = month;
//     //GÜN
//     let day = new Date().getDate() - new Date(birthdayPicker.value).getDate() +31 ;
//     document.getElementById("days").innerHTML = day;
//     //SAAT
//     let hours = new Date().getHours() - new Date(birthdayPicker.value).getHours()+23  ;
//     document.getElementById("hours").innerHTML = hours;
//     //DAKİKA
//     let minutes = new Date().getMinutes() - new Date(birthdayPicker.value).getMinutes()  ;
//     document.getElementById("minutes").innerHTML = minutes;
//     //SANİYE
//     let seconds = new Date().getSeconds() - new Date(birthdayPicker.value).getSeconds()  ;
//     document.getElementById("seconds").innerHTML = seconds;
//     setInterval(event, 1000);

// })
// let body = document.querySelector('body')
// let loading = document.querySelector('.loading')


// window.addEventListener("click",function e(){
//     body.style.background = 'url("https://images3.alphacoders.com/853/thumb-1920-85305.jpg")';
// })



// setTimeout(function events(){
//     loading.style.display = "none";
// },500)
// events()
