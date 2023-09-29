new Date(2018); //will be treated as milliseconds
new Date('2018'); //will be treated as year
new Date(2018, 0); //will be treated as year , month
new Date().getMilliseconds(); //will get the milliseconds on now (hr, min, sec, >ms<)
new Date().getTime(); //will convert the current date to milliseconds
