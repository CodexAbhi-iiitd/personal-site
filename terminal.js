const lines = [
  "Name: Abhishek",
  "Institute: IIIT Delhi",
  "JEE Mains: Qualified",
  "JEE Advanced: Qualified",
  "Chess Rating: 2244",
  "Status: Building quietly"
];

let i=0,j=0;
const el=document.getElementById("terminal-text");

function typeLine(){
  if(i<lines.length){
    if(j<lines[i].length){
      el.innerHTML+=lines[i][j++];
      const s=new Audio("type.mp3");
      s.volume=0.15;
      s.play().catch(()=>{});
    }else{
      el.innerHTML+="<br>";
      i++; j=0;
    }
    setTimeout(typeLine,45);
  }else{
    setTimeout(()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),1200);
  }
}
typeLine();

window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(r=>{
    if(r.getBoundingClientRect().top<window.innerHeight-100)
      r.classList.add("active");
  });
});
