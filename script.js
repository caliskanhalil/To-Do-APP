const inputText = document.getElementById("input-box");
const listContiner = document.getElementById("list-item");


function addTask(){
    if(inputText.value === ''){
        alert("Bir Değer Girmelisin");
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputText.value;
        listContiner.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputText.value="";
    saveData();
}

listContiner.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContiner.innerHTML);
}
function showData(){
    listContiner.innerHTML = localStorage.getItem("data");
}
showData();
