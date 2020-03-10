// Paired with @hernandez87v and @jeff-sexton


const spinnerArray = [
  '|',
  '/',
  '-',
  '\\',
  '|'];

// const spinnerArray = [
//   '😀',
//   '😇',
//   '🤩',
//   '🥶'];

let repititions = 2;
let delay = 0;


while (repititions > 0) {
  for (const elem of spinnerArray) {
    setTimeout(() => {
      process.stdout.write('\r' + elem + '  ');

    }, delay);
    delay += 100;
  }

  repititions--;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay);