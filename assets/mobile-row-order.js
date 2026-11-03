(function () {
  var mq = window.matchMedia('(max-width: 768px)');

  function arrangeRow(row, mobile) {
    var title = row.querySelector('.row__title');
    var image = row.querySelector('.row__col--image');
    var bodyTop = row.querySelector('.row__body-top');
    if (!title || !image || !bodyTop) return;

    if (mobile) {
      row.insertBefore(title, row.firstChild);
      row.insertBefore(image, title.nextSibling);
    } else {
      bodyTop.insertBefore(title, bodyTop.firstChild);
    }
  }

  function arrangeAll() {
    document.querySelectorAll('.row').forEach(function (row) {
      arrangeRow(row, mq.matches);
    });
  }

  arrangeAll();
  mq.addEventListener('change', arrangeAll);
})();
