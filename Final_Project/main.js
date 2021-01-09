var innerFooter = document.querySelector('.inner-footer');

var dateNow = new Date().toLocaleDateString();

var yearNow = dateNow.slice(dateNow.length-4, dateNow.length);

innerFooter.textContent += yearNow;