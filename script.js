var txtInput = document.getElementById("txtInput");
var btn = document.getElementById("btn");
var lists = document.getElementById("lists");
btn.addEventListener("click",function(){
    var tag = document.createElement("span")
    tag.innerHTML ="#"+txtInput.value;
    lists.appendChild(tag);

    // add css
    var all = document.querySelectorAll("span");
    all.forEach(all =>{
        all.classList.add("addcss");
    })
    // end css

    tag.addEventListener("click",function(){
        tag.style.textDecoration="line-through";
    })
    tag.addEventListener("dblclick",function(){
        lists.removeChild(tag);
    })

})
var ttt = document.getElementById("color");
ttt.addEventListener("click",function(){
    var hh = document.getElementById("header")

    hh.setAttribute("class","color");
})