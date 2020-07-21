var index = 42;

const f0 = () => {
  console.log('the answer is ' + index);
};

const f2 = () => {
  console.log(2);
};

const f3 = () => {
  console.log(3);
};

const f4 = () => {
  console.log(4);
  f3();
};

var index$1 = {
  f0,
  f2,
  f4
};

export default index$1;
