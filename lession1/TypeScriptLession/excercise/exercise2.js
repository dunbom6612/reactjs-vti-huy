const question1 = () => {
  const account1 = 5249.5;
  const account2 = 10970.055;

  console.log(Number.parseInt(account1));
  console.log(Number.parseInt(account2));
};

const question2 = () => {
  const a = Math.floor(Math.random() * 9999);

  const stringNumber = String(a);

  const length = stringNumber.length;

  let result = '';

  for (let i = 0; i < 5 - length; i++) {
    result = result + '0';
  }

  result = result + stringNumber;

  return result;
};

question2();

const question3 = (number) => {
  // const result = String(number).slice(number.length - 2);
  
  const result = Number(number) % 100;
  console.log('number', number);
  console.log('result', result);

  return result;
};

question3(question2());
