const ONE_MS = 1000

/* IIFE
for (var i = 1; i <= 10; i++) {
  const timer = (x) => {
    setTimeout(() => {
      console.log(x)
    }, x * ONE_MS)
  }
  timer(i)
} */

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, ONE_MS)
}
