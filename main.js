var $image = document.querySelector('.image');

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


//   if (event.key === ArrowRight) {
//     $image.className = 'image';
//   } else if (event.key === ArrowDown) {
//     $image.className = 'image' + 'rotate90';
//   } else if (event.key === ArrowLeft) {
//     $image.className = 'image' + 'rotate180';
//   } else if (event.key === ArrowUp) {
//     $image.className = 'image' + 'rotate270';
//   }

// });


// document.addEventListener('keydown', function (event) {

//   console.log('key pressed!');
//   console.log('event.key:', event.key);

//   if (event.defaultPrevented) {
//     return;
//   };

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
//   event.preventDefault();
// }, true);



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
