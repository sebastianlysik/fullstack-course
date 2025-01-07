// for(var i = 0; i < 4; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", () => {
//         document.querySelector("h1").style.color = "purple"
//     })
// }

$("button").click(() =>{
    $("h1").slideToggle()
})

$("input").keypress((e)=>{
    $("h1").text(e.key);
})


