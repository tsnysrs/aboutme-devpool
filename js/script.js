const text="Thatsaneeya Surisan";
let i=0;
function type(){
 if(i<text.length){
  document.getElementById("typing").innerHTML+=text.charAt(i);
  i++;
  setTimeout(type,100);
 }
}
type();

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
 if(e.isIntersecting)e.target.classList.add("show");
 });
});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const topBtn=document.getElementById("topBtn");
window.onscroll=()=>{
 topBtn.style.display=window.scrollY>300?"block":"none";
}
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

function changeImage() {
 const img = document.getElementById("appleImage");
 if (img.src.includes("apple1.jpeg")) {
 img.src = "src/apple2.jpeg";
} else {
 img.src = "src/apple1.jpeg";
    }
}