let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let ul = document.querySelector("#ul");






//create div span and delete button
function createEle(str) {
    var x = document.createElement('li');
    x.innerHTML = `<span>${str}</span> <button>Delete</button>`;
    ul.appendChild(x)
}
let data = (JSON.parse(localStorage.getItem("key")) == null) ? [] : JSON.parse(localStorage.getItem("key"));


if (data.length >= 1) {
    data.forEach((e) => {
        createEle(e);
    });
}

function check(str){
    let tru=false;
    // console.log(data)
   data.forEach((e)=>{
    if(e==str){
        tru=true
    }
    
   })
return tru

}


//add todo 
function addtodoList() {
    var inputdata = input.value.trim();

    inputdata = inputdata.toLowerCase();
    
    // console.log(check(inputdata))
    if (inputdata.length === 0 || check(inputdata)) {
    }
    else {
        data.push(inputdata)
        localStorage.setItem("key", JSON.stringify(data));
        createEle(inputdata)
        input.value ="";
    }
}

btn.addEventListener("click", addtodoList)


function deletData(strm) {
    data = data.filter((str) => {
        return str != strm;
    })
}
ul.addEventListener('click', (e) => {
    let todoRemove = e.target;
    let todoListContent = todoRemove.previousElementSibling.innerText;
    deletData(todoListContent);
    localStorage.setItem('key', JSON.stringify(data))
  
    let todolistre=todoRemove.parentElement
    todolistre.remove();
})