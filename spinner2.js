///// REFACTORED CODE:

let r = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let timer = 100

for (let i = 0; i < r.length; i++) {
  setTimeout(() => {
    process.stdout.write(r[i]);
  }, timer);
  timer+= 200
}
