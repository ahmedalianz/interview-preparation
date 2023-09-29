let arr = [1, 2, 5, 6, 3, 5, 4, 'a', 5];
arr.reduce((acc, curr) => acc + curr, 0); // 26a5
arr.reduceRight((acc, curr) => acc + curr, 0); //5a4536521
