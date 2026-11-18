for(const carousel of document.querySelectorAll('[data-brand-carousel]')){
 const track=carousel.querySelector('[data-brand-track]'),previous=carousel.querySelector('[data-brand-previous]'),next=carousel.querySelector('[data-brand-next]');
 const originals=[...track.children],autoplay=carousel.hasAttribute('data-brand-autoplay'),motion=matchMedia('(prefers-reduced-motion: reduce)');
 let timer,intersecting=false,hovering=false,focused=false,stopped=false;
 if(autoplay)for(const item of originals){
  const clone=item.cloneNode(true);clone.setAttribute('aria-hidden','true');clone.tabIndex=-1;clone.dataset.brandClone='';
  clone.querySelectorAll('[id]').forEach(node=>node.removeAttribute('id'));clone.querySelectorAll('img').forEach(img=>img.alt='');track.append(clone);
 }
 const step=()=>originals.length>1?originals[1].offsetLeft-originals[0].offsetLeft:0;
 const cycle=()=>autoplay?track.children[originals.length]?.offsetLeft-originals[0].offsetLeft:0;
 const clear=()=>{clearTimeout(timer);timer=undefined;};
 const update=()=>{
  const overflow=track.scrollWidth>track.clientWidth+2;previous.hidden=next.hidden=!overflow;
  previous.disabled=!autoplay&&track.scrollLeft<2;next.disabled=!autoplay&&track.scrollLeft+track.clientWidth>=track.scrollWidth-2;
 };
 function schedule(){
  clear();if(!autoplay||motion.matches||!intersecting||hovering||focused||stopped||document.hidden||!step())return;
  timer=setTimeout(()=>{move(1);schedule();},4000);
 }
 function move(direction){
  const distance=step(),length=cycle();if(!distance)return;
  let position=track.scrollLeft;
  if(autoplay&&length){
   if(position>=length-2){position=Math.max(0,position-length);track.scrollTo({left:position,behavior:'instant'});}
   if(direction<0&&position<2){position=length;track.scrollTo({left:position,behavior:'instant'});}
  }
  requestAnimationFrame(()=>track.scrollTo({left:Math.round(position/distance)*distance+direction*distance,behavior:motion.matches?'instant':'smooth'}));
 }
 previous.addEventListener('click',()=>{stopped=true;clear();move(-1);});next.addEventListener('click',()=>{stopped=true;clear();move(1);});
 carousel.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch'){hovering=true;clear();}});
 carousel.addEventListener('pointerleave',()=>{hovering=false;schedule();});
 carousel.addEventListener('pointerdown',event=>{if(event.pointerType==='touch'){stopped=true;clear();}},{passive:true});
 carousel.addEventListener('focusin',()=>{focused=true;stopped=true;clear();});
 carousel.addEventListener('focusout',event=>{if(!carousel.contains(event.relatedTarget)){focused=false;schedule();}});
 track.addEventListener('keydown',event=>{
  if(event.target!==track)return;
  if(['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();stopped=true;clear();move(event.key==='ArrowRight'?1:-1);}
  if(event.code==='Space'&&autoplay){event.preventDefault();stopped=!stopped;clear();if(!stopped){focused=false;schedule();}}
 });
 track.addEventListener('scroll',update,{passive:true});
 document.addEventListener('visibilitychange',schedule);motion.addEventListener('change',schedule);
 new ResizeObserver(()=>{update();schedule();}).observe(track);
 new IntersectionObserver(entries=>{intersecting=entries[0].isIntersecting;schedule();},{threshold:.15}).observe(carousel);
 update();
}
