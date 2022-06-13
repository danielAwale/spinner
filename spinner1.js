///// REFACTORED CODE:

let r = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let timer = 100

for (let i = 0; i < r.length; i++) {
  setTimeout(() => {
    process.stdout.write(r[i]);
  }, timer);
  timer+= 200
}

/// PREVIOUS CODE:

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);