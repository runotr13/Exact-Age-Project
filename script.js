let years = document.querySelector("#yearsonur")
let months = document.querySelector("#months")
let days = document.querySelector("#days")
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let birthdayPicker = document.querySelector("[name=birthday]")

//********YIL */
birthdayPicker.addEventListener("change",function event(){
    //YIL
    let yearss = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear()-1;
    document.getElementById("yearsonur").innerHTML = yearss;
    //AY
    let month = new Date().getMonth() - new Date(birthdayPicker.value).getMonth() +11;
    document.getElementById("months").innerHTML = month;
    //GÜN
    let day = new Date().getDate() - new Date(birthdayPicker.value).getDate() +31 ;
    document.getElementById("days").innerHTML = day;
    //SAAT
    let hours = new Date().getHours() - new Date(birthdayPicker.value).getHours()  ;
    document.getElementById("hours").innerHTML = hours;
    //DAKİKA
    let minutes = new Date().getMinutes() - new Date(birthdayPicker.value).getMinutes()  ;
    document.getElementById("minutes").innerHTML = minutes;
    //SANİYE
    let seconds = new Date().getSeconds() - new Date(birthdayPicker.value).getSeconds()  ;
    document.getElementById("seconds").innerHTML = seconds;
    setInterval(event, 1000);

})
let body = document.querySelector('body')
let loading = document.querySelector('.loading')
birthdayPicker.addEventListener("click",()=>{
    loading.style.display = "none";
    body.style.background = 'url("https://images3.alphacoders.com/853/thumb-1920-85305.jpg")';
})













// //****AY */
// birthdayPicker.addEventListener("change",()=>{
//     let month = new Date().getMonth() - new Date(birthdayPicker.value).getMonth()+12  ;
//     document.getElementById("months").innerHTML = month;
// })

// //****GÜNNNNNN */
// birthdayPicker.addEventListener("change",()=>{
//     let day = new Date().getDate() - new Date(birthdayPicker.value).getDate()  ;
//     document.getElementById("days").innerHTML = day;
// })
// birthdayPicker.addEventListener("change",()=>{
//     let hours = new Date().getHours() - new Date(birthdayPicker.value).getHours()  ;
//     document.getElementById("hours").innerHTML = hours;
//     if(hours == 24){
//         day += 1
//     }
// })

// birthdayPicker.addEventListener("change",()=>{
//     let minutes = new Date().getMinutes() - new Date(birthdayPicker.value).getMinutes()  ;
//     document.getElementById("minutes").innerHTML = minutes;
//     if(minutes==60){
//         hours += 1
//     }
// })

// birthdayPicker.addEventListener("change",()=>{
//     let seconds = new Date().getSeconds() - new Date(birthdayPicker.value).getSeconds()  ;
//     document.getElementById("seconds").innerHTML = seconds;
//     if(seconds == 60){
//         minutes +=1 
//     }
// })



// var currentdate = new Date(); 
// var datetime = "Last Sync: " + currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + " @ "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ":" 
//                 + currentdate.getSeconds();
// console.log(datetime);