let burgerbtn = document.querySelector('.icon--open'),
  closebtn = document.querySelector('.icon--close'),
  burgertoggle = document.querySelector('.header-modal'), //modal div
  headermenu = document.querySelector('.header-main'); //то что скроется

burgerbtn.onclick = function () {
  burgertoggle.style.height = '100%';
  // burgertoggle.style.display = 'block';
  // headermenu.style.visibility = 'hidden';
};
closebtn.onclick = function () {
  burgertoggle.style.height = '0';
  // burgertoggle.style.display = 'none';
  // headermenu.style.visibility = 'visible';
};
