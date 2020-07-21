var index = 42;

const f0 = () => {
  return index;
};

const f2 = () => {
  return 2;
};

const f3 = () => {
  return 3;
};

const f4 = () => {
  return f3() + 1;
};

var index$1 = {
  f0,
  f2,
  f4
};

export default index$1;
