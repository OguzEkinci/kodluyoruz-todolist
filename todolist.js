var nodeList = document.getElementsByTagName("li");
for(let i=0; i<nodeList.length;i++){
    var span = document.createElement("span");
    var txt = document. createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

for(let i=0; i<nodeList.length;i++){
    localStorage.setItem(`${i+1}`,nodeList[i].innerText)
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("task").value = ""; // clear input area
  
    // add a close item to new element
  
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    $("#liveToast").toast("show");
  
    // add a close function to new item
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  
  
    // add new item to local storage
    localStorage.setItem(`eleman ${localStorage.length+1}`,li.innerText)
  
  }