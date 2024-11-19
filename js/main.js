let sab = document.querySelector(".sab");
let list1 = document.querySelector(".list1");
let close = document.querySelector(".close");
let nav = document.querySelector(".nav");

sab.onclick = function() {
    list1.classList.add("open");
};

close.onclick = function() {
    this.parentElement.classList.remove("open");
};



