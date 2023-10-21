let palindroms = [
    "А роза упала на лапу Азора",
    "Ого",
    "А Собака боса",
    "Привет, мир",
    "А Собака боса",
    "Лёша на полке клопа нашёл",
    "Я — арка края",
  ];

  function checkPalindrom(arr) {
    let pals =[];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toLowerCase();
        str = str.replaceAll(" ", "");
        str = str.replaceAll("—", "");
        str = str.replaceAll(",", "");
        console.log(str);
        //console.log(arr[i]);
        // Todo reverse and copmare
        //let str1 = str.split("");
        reversed = reversed.reverse();
        reversed = reversed.join("");
        console.log(reversed);
        // if (str == reversed){
        //   pals.
        // }
        //pals[i] = reversed;
    }
    return pals;
  }

  console.log(checkPalindrom(palindroms));