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

const mean = (arr, sum = 0, count = 0) => {
  if (arr.length === 0) {
    return sum / count;
  }

  return mean(arr, sum + arr.pop(), count + 1);
};

const min_and_max = (arr, min = arr[0], max = 0, top = 0) => {
  if (arr.length === 0) {
    return `min = ${min} , max = ${max}`;
  }

  top = arr.pop();

  if (top > max) {
    max = top;
  }

  if (top < min) {
    min = top;
  }

  return min_and_max(arr, min, max, top);
};

const str_reverse = (str, str_arr = str.split(""), rev_str = []) => {
  if (str_arr.length === 0) {
    return rev_str.join("");
  }

  rev_str.push(str_arr.pop());

  return str_reverse(str, str_arr, rev_str);
};

const ascending = (arr, up = 0, len = arr.length - 1) => {
  let first = arr[up];
  let last = arr[len];

  if (up == arr.length) {
    last = arr.pop();
    arr.splice(1, 0, last);
    return arr;
  }

  if (len == 0) {
    return ascending(arr, up + 1, arr.length - 1);
  }

  if (last < first) {
    arr[up] = last;
    arr[len] = first;
    return ascending(arr, up, len - 1);
  }

  return ascending(arr, up, len - 1);
};

// countDown(5);
// console.log(sumRange(3));
// listChildren(family);
// console.log(sumEvenRange(7));

// let arr = [20, 10, 14, 1, 1, 2, 4, 3, 2, 2, 2, 4, 6, 100];

// console.log(ascending(arr));

// console.log(min_and_max(arr));

// console.log(str_reverse("book"))
// console.log(mean(arr))
