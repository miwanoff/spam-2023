const str1 = "Lorem ipsum dolor sit";
const str2 =
  "Loremipsumdolorsitametconsectetur adipisicing elit. Tempora id commodi neque, unde amet adipisci eius molestias error, quae cumque placeat quidem illum dolorem tenetur porro molestiae quas officia culpa.";

function preview(str, n) {
  // let n = 20;
  if (str.length >= n) {
    str = str.substr(0, n);
    console.log(str);
    let d = str.lastIndexOf(" ");
    console.log(d);
    if (d != -1) {
      // d
    }
    // ...
    return str;
  }
}
preview(str2, 20);
