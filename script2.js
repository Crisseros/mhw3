const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function toggle1(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details1');
  const text = event.currentTarget.querySelector('span');
  
  isVisible1 = !isVisible1;
  if (isVisible1) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible1 = false;

const detailToggle1 = document.querySelector('.show-details');
detailToggle1.addEventListener('click',toggle1);

function toggle2(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details2');
  let text = event.currentTarget.querySelector('span');
  
  isVisible2 = !isVisible2;
  if (isVisible2) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible2 = false;

const detailToggle2 = document.querySelector('.show-details1');
detailToggle2.addEventListener('click',toggle2);

function toggle3(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details3');
  let text = event.currentTarget.querySelector('span');
  
  isVisible3 = !isVisible3;
  if (isVisible3) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible3 = false;

const detailToggle3 = document.querySelector('.show-details2');
detailToggle3.addEventListener('click',toggle3);

function toggle4(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details4');
  let text = event.currentTarget.querySelector('span');
  
  isVisible4 = !isVisible4;
  if (isVisible4) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible4 = false;

const detailToggle4 = document.querySelector('.show-details3');
detailToggle4.addEventListener('click',toggle4);

function toggle5(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details5');
  let text = event.currentTarget.querySelector('span');
  
  isVisible5 = !isVisible5;
  if (isVisible5) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible5 = false;

const detailToggle5 = document.querySelector('.show-details4');
detailToggle5.addEventListener('click',toggle5);

function toggle6(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details6');
  let text = event.currentTarget.querySelector('span');
  
  isVisible6 = !isVisible6;
  if (isVisible6) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible6 = false;

const detailToggle6 = document.querySelector('.show-details5');
detailToggle6.addEventListener('click',toggle6);

function toggle7(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details7');
  let text = event.currentTarget.querySelector('span');
  
  isVisible7 = !isVisible7;
  if (isVisible7) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible7 = false;

const detailToggle7 = document.querySelector('.show-details6');
detailToggle7.addEventListener('click',toggle7);

function toggle8(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details8');
  let text = event.currentTarget.querySelector('span');
  
  isVisible8 = !isVisible8;
  if (isVisible8) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible8 = false;

const detailToggle8 = document.querySelector('.show-details7');
detailToggle8.addEventListener('click',toggle8);

function toggle9(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details9');
  let text = event.currentTarget.querySelector('span');
  
  isVisible9 = !isVisible9;
  if (isVisible9) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible9 = false;

const detailToggle9 = document.querySelector('.show-details8');
detailToggle9.addEventListener('click',toggle9);

function toggle10(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details10');
  let text = event.currentTarget.querySelector('span');
  
  isVisible10 = !isVisible10;
  if (isVisible10) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible10 = false;

const detailToggle10 = document.querySelector('.show-details9');
detailToggle10.addEventListener('click',toggle10);

function toggle11(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details11');
  let text = event.currentTarget.querySelector('span');
  
  isVisible11 = !isVisible11;
  if (isVisible11) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible11 = false;

const detailToggle11 = document.querySelector('.show-details10');
detailToggle11.addEventListener('click',toggle11);

function toggle12(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details12');
  let text = event.currentTarget.querySelector('span');
  
  isVisible12 = !isVisible12;
  if (isVisible12) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible12 = false;

const detailToggle12 = document.querySelector('.show-details11');
detailToggle12.addEventListener('click',toggle12);

function toggle13(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details13');
  let text = event.currentTarget.querySelector('span');
  
  isVisible13 = !isVisible13;
  if (isVisible13) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible13 = false;

const detailToggle13 = document.querySelector('.show-details12');
detailToggle13.addEventListener('click',toggle13);

function toggle14(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details14');
  let text = event.currentTarget.querySelector('span');
  
  isVisible14 = !isVisible14;
  if (isVisible14) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible14 = false;

const detailToggle14 = document.querySelector('.show-details13');
detailToggle14.addEventListener('click',toggle14);

function toggle15(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details15');
  let text = event.currentTarget.querySelector('span');
  
  isVisible15 = !isVisible15;
  if (isVisible15) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible15 = false;

const detailToggle15 = document.querySelector('.show-details14');
detailToggle15.addEventListener('click',toggle15);

function toggle16(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details16');
  let text = event.currentTarget.querySelector('span');
  
  isVisible16 = !isVisible16;
  if (isVisible16) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible16 = false;

const detailToggle16 = document.querySelector('.show-details15');
detailToggle16.addEventListener('click',toggle16);

function toggle17(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details17');
  let text = event.currentTarget.querySelector('span');
  
  isVisible17 = !isVisible17;
  if (isVisible17) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible17 = false;

const detailToggle17 = document.querySelector('.show-details16');
detailToggle17.addEventListener('click',toggle17);

function toggle18(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details18');
  let text = event.currentTarget.querySelector('span');
  
  isVisible18 = !isVisible18;
  if (isVisible18) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible18 = false;

const detailToggle18 = document.querySelector('.show-details17');
detailToggle18.addEventListener('click',toggle18);

function toggle19(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details19');
  let text = event.currentTarget.querySelector('span');
  
  isVisible19 = !isVisible19;
  if (isVisible19) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible19 = false;

const detailToggle19 = document.querySelector('.show-details18');
detailToggle19.addEventListener('click',toggle19);

function toggle20(event) {
  console.log('event.target: ' + event.target.tagName);
  console.log('event.currentTarget: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details20');
  let text = event.currentTarget.querySelector('span');
  
  isVisible20 = !isVisible20;
  if (isVisible20) {
    details.classList.remove('hidden');
    text.textContent = 'Nascondi dettagli';
  } else {
    details.classList.add('hidden');
    text.textContent = 'Mostra dettagli';
  }
  
}
let isVisible20 = false;

const detailToggle20 = document.querySelector('.show-details19');
detailToggle20.addEventListener('click',toggle20);
