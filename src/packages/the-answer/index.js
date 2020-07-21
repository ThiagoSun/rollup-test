import answer from 'the-answer';

export const f0 = () => {
  console.log('the answer is ' + answer);
}

const f1 = () => {
  console.log(1);
};

export const f2 = () => {
  console.log(2);
};

const f3 = () => {
  console.log(3);
}

export const f4 = () => {
  console.log(4);
  f3();
}
