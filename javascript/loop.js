const countDown = (num) => {
  if (num <= 0) {
    return;
  }
  console.log(num);
  countDown(num - 1);
};

const sumRange = (num, total = 0) => {
  if (num <= 0) {
    return total;
  }
  return sumRange(num - 1, total + num);
};

const listChildren = (obj) => {
  if (obj.children.length === 0) {
    return;
  }

  obj.children.forEach((child) => {
    console.log(child.name);
    listChildren(child);
  });
};

const family = {
  name: "Adam",
  children: [
    {
      name: "Abel",
      children: [],
    },
    {
      name: "Cain",
      children: [
        { name: "Enoch", children: [] },
        { name: "Olad", children: [] },
      ],
    },
  ],
};

const sumEvenRange = (num, sum = 0) => {
  if (num == 0) {
    return sum;
  }

  if (num % 2 == 0) {
    return sumEvenRange(num - 2, sum + num);
  } else {
    return sumEvenRange(num - 1, sum);
  }
};

// countDown(5);
// console.log(sumRange(3));
// listChildren(family);
console.log(sumEvenRange(7));
