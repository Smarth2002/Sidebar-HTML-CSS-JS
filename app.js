const toggleBtn=document.querySelector(".sidebar-toggle");
const closeBtn=document.querySelector(".close-btn");
const sidebar=document.querySelector(".sidebar");

//by default we set translate(-100%) to hide sidebar

//toggle the show-sidebar class which set translate(0) to show sidebar
toggleBtn.addEventListener("click", function (){

    sidebar.classList.toggle("show-sidebar");
});

//remove show-sidebar class
closeBtn.addEventListener("click", function (){

    sidebar.classList.remove("show-sidebar");
})