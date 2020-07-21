import answer from 'the-answer';

const f0 = () => {
  console.log('the answer is ' + answer);
}

const f1 = () => {
  console.log(1);
};

const f2 = () => {
  console.log(2);
};

const f3 = () => {
  console.log(3);
}

const f4 = () => {
  console.log(4);
  f3();
}

export default {
  f0, f2, f4
};
