let arr = [1, 2, 5, 6, 3, 5, 4, 2, 5];
arr.splice(1, 2, 'a', 'b')[ //[2, 5]
  //splice(start index , how_many_to_delete , elements_to_add)
  // the return is the spliced,and mutates the array
  (1, 'a', 'b', 6, 3, 5, 4, 2, 5)
];
