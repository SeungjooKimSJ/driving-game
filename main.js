var $image = document.querySelector('.image');

document.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowRight') {
    $image.className = 'image';
  } else if (event.key === 'ArrowDown') {
    $image.className = 'image rotate90';
  } else if (event.key === 'ArrowLeft') {
    $image.className = 'image rotate180';
  } else if (event.key === 'ArrowUp') {
    $image.className = 'image rotate270';
  }
});
