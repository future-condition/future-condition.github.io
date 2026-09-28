const shifts = [
  {label:'−5 frames',values:[34.2,49.6,61.7],note:'A five-frame early shift makes the plain generated future less effective than no future guidance (54.0%).'},
  {label:'−3 frames',values:[52.9,68.9,76.8],note:'RAFC retains a substantial advantage at an off-grid early shift.'},
  {label:'−1 frame',values:[64.6,78.4,81.2],note:'Nearby phase weighting keeps performance high under a small early shift.'},
  {label:'No shift',values:[69.8,79.4,82.3],note:'At zero shift, the four-branch bank helps; learned weighting adds 2.9 points beyond uniform averaging.'},
  {label:'+1 frame',values:[65.3,79.0,81.5],note:'RAFC remains above uniform averaging under a small late shift.'},
  {label:'+3 frames',values:[51.9,68.8,76.0],note:'RAFC recovers from a three-frame late shift without knowing its value.'},
  {label:'+5 frames',values:[41.6,55.5,65.2],note:'At the largest late offset, RAFC gains 23.6 points over the plain generated future.'}
];
const labels=['Generated future','Uniform averaging','RAFC'];
const slider=document.querySelector('#phase-slider');
function updatePhase(){
  const item=shifts[Number(slider.value)];
  document.querySelector('#phase-label').textContent=item.label;
  document.querySelector('#phase-takeaway').textContent=item.note;
  const bars=document.querySelector('#phase-bars');bars.replaceChildren();
  item.values.forEach((value,i)=>{
    const row=document.createElement('div');row.className='phase-row';
    const label=document.createElement('span');label.textContent=labels[i];
    const track=document.createElement('div');track.className='bar-track';
    const fill=document.createElement('span');fill.className='bar-fill';fill.style.width=value+'%';track.append(fill);
    const number=document.createElement('strong');number.textContent=value.toFixed(1)+'%';
    row.append(label,track,number);bars.append(row);
  });
}
slider.addEventListener('input',updatePhase);updatePhase();
const dialog=document.querySelector('#figure-dialog');
document.querySelector('[data-zoom]').addEventListener('click',()=>dialog.showModal());
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
