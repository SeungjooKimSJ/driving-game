// var $image = document.querySelector('.image');

// $image.addEventListener('keydown', function (event) {

//   switch(event.code) {
//     case 'KeyD':
//     case 'ArrowRight':
//       break;

//     case 'KeyS':
//     case 'ArrowDown':
//       break;

//     case 'KeyA':
//     case 'ArrowLeft':
//       break;

//     case 'KeyW':
//     case 'ArrowUp':
//       break;
//   };


//   if (event.key === 'ArrowRight') {
//     $image.className = 'image';
//   } else if (event.key === 'ArrowDown') {
//     $image.className = 'image' + 'rotate90';
//   } else if (event.key === 'ArrowLeft') {
//     $image.className = 'image' + 'rotate180';
//   } else if (event.key === 'ArrowUp') {
//     $image.className = 'image' + 'rotate270';
//   }

// });


var $image = document.querySelector('.image');
console.log($image);

document.addEventListener('keydown', function (event) {

  console.log('key pressed!');
  console.log('event.key:', event.key);

  switch(event.code) {
    case 'KeyD':
    case 'ArrowRight':
      break;

    case 'KeyS':
    case 'ArrowDown':
      break;

    case 'KeyA':
    case 'ArrowLeft':
      break;

    case 'KeyW':
    case 'ArrowUp':
      break;
  };

  if (event.key === 'ArrowRight') {
    console.log('ArrowRight clicked');
    $image.className = 'image';
  } else if (event.key === 'ArrowDown') {
    console.log('ArrowDown clicked');
    $image.className = ('image' + 'rotate90');
  } else if (event.key === 'ArrowLeft') {
    $image.className = 'image' + 'rotate180';
  } else if (event.key === 'ArrowUp') {
    $image.className = 'image' + 'rotate270';
  }
});



// $image.addEventListener('keydown', function (event) {
//   if (event.defaultPrevented) {
//     return;
//   };

//   switch(event.code) {
//     case 'KeyD':
//     case 'ArrowRight':
//       $image.className = 'image';
//       break;

//     case 'KeyS':
//     case 'ArrowDown':
//       $image.className = 'image' + 'rotate90';
//       break;

//     case 'KeyA':
//     case 'ArrowLeft':
//       $image.className = 'image' + 'rotate180';
//       break;

//     case 'KeyW':
//     case 'ArrowUp':
//       $image.className = 'image' + 'rotate270';
//       break;
//   }
//   event.preventDefault();
// }, true);
