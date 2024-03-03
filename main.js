// console.log('hello')
// let element = document.getElementById('startButton')
// element.addEventListener('click', function() {
//     let tl = gsap.timeline()
//         tl.to('#poemContainer', { 
//             display: 'block' 
//         })
//         tl.from('#line1', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1 
//         })
//         tl.from('#line2', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1 
//         })
//         tl.from('#line3', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line4', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line5', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line6', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line7', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line8', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line9', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line10', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1 
//         })
//         tl.from('#line11', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1
//         })
//         tl.from('#line12', {
//              y: -50, 
//              opacity: 0, 
//              duration: 1 
//         });
// });

console.log('hello');

let element = document.getElementById('startButton');
element.addEventListener('click', function() {
    element.style.display = 'none'
    let tl = gsap.timeline();
    tl.to('#poemContainer', { 
        display: 'flex',

     })
    tl.from('#poemContainer',{
        scale:0.3,
        duration:0.7,
        stagger:1

    })
    .from('.image',{
        x : 100,
        filter: 'blur(10px)',
        opacity:0,
        duration: 1
    })
      .from('#line1', { x: -100, opacity: 0, duration: 1 })
      .from('#line2', { x: 100, opacity: 0, duration: 1 })
      .from('#line3', { x: -100, opacity: 0, duration: 1 })
      .from('#line4', { x: 100, opacity: 0, duration: 1 })
      .from('#line5', { x: -100, opacity: 0, duration: 1 })
      .from('#line6', { x: 100, opacity: 0, duration: 1 })
      .from('#line7', { x: -100, opacity: 0, duration: 1 })
      .from('#line8', { x: 100, opacity: 0, duration: 1 })
      .from('#line9', { x: -100, opacity: 0, duration: 1 })
      .from('#line10', { X: 100, opacity: 0, duration: 1 })
      .from('#line11', { X: -100, opacity: 0, duration: 1 })
      .from('#line12', { X: 100, opacity: 0, duration: 1 });
});
