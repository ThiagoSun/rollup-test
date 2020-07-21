import answer from 'the-answer';

const f0 = () => {
  return answer;
}

const f1 = () => {
  return 1;
};

const f2 = () => {
  return 2;
};

const f3 = () => {
  return 3;
}

const f4 = () => {
  return f3() + 1;
}

export default {
  f0, f2, f4
};
