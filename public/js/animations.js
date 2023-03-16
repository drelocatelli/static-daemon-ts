// docs:
// https://greensock.com/docs/

// from/to reverse

// ease:
// https://greensock.com/docs/v2/Easing/Back

gsap.from('#animation-1', { duration: 1, y: '-100%', ease: 'bounce' });

// stagger: child effects delay
gsap.from('#animation-2 .reveal', { duration: 1, opacity: 0, delay: 1, stagger: .5 });

gsap.from('#animation-3', {duration: 2, x: '-100vw', ease: 'back', delay: 1});

// ovewrite: avoid waiting for the last animation
gsap.from('#animation-3 .reveal', {overwrite: 'auto',duration: 2, ease: 'back', x: '-60px', delay: 3, stagger: .5});

gsap.fromTo('#animation-4', {duration: 2, ease: 'back', x: '-60'}, {overwrite: 'auto', duration: 2, ease: 'back', x: '5px', delay: 4});

gsap.fromTo('#animation-5', {opacity:0, scale: 0, rotation: 720}, {duration: 1, opacity:1, scale: 1, rotation: 0, delay: 3.5});

// obj properties
const obj = { x: 0 };
// gsap.to(obj, {duration: 2, x: 1, onUpdate: () => console.log(obj.x) });

// const timeline = gsap.timeline();
// timeline
    // .from('#animation-1',  { duration: 1, y: '-100%', ease: 'bounce' })
    // .from('#animation-2 .reveal', { duration: 1, opacity: 0, delay: 1, stagger: .5 });