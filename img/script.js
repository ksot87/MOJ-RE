const b=document.querySelector('.burger'),n=document.getElementById('nav'),h=document.querySelector('.hdr');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',e=>{if(e.target.matches('a')){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
const mq=matchMedia('(min-width:900px)');
document.querySelectorAll('.card').forEach(d=>{d.open=mq.matches});
addEventListener('scroll',()=>h.classList.toggle('sc',scrollY>8),{passive:true});
