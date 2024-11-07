const towerOfHanoi = (n, from_rod, to_rod, to_aux) => {
  if (n == 0) {
    return n;
  }

  if (n > 0) {
    towerOfHanoi(n - 1, from_rod, to_aux, to_rod);
    console.log(from_rod, "-", to_aux);
    towerOfHanoi(n - 1, to_rod, from_rod, to_aux);
  }
};

towerOfHanoi(4, "A", "B", "C");
