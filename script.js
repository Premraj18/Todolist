let input = document.getElementById("input-box");
let btn = document.getElementById("btn");
let list = document.querySelector(".list-container");

btn.addEventListener('click',(e) => {
    if(input.value === ''){
        alert("Enter the note please");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    input.value ="";
    savedata();
})
input.addEventListener('keypress',function(e){
    if(e.key === "Enter"){
        // e.preventDefault();
        btn.click();
    }
})
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}

function showtask(){
    list.innerHTML = localStorage.getItem("data");

}

showtask();