export function nameField(text: string) {
  let arrayStrings = text.split(" ");
  if (arrayStrings[0].length < 3) {
    return "имя не может быть меньше 3 символов";
  } else if (arrayStrings[0].length > 30) {
    return "имя не может быть больше 30 символов";
  } else if (!arrayStrings[1]) {
    return "Введите фамилию";
  } else if (arrayStrings[1] && arrayStrings[1].length < 3) {
    return "фамилия не может быть меньше 3 символов";
  } else if (arrayStrings[1] && arrayStrings[1].length > 30) {
    return "фамилия не может быть больше 30 символов";
  } else return "";
}
export function emailField(symbol: string, action: (text: string) => void) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(String(symbol).toLowerCase())) {
    action("не корректный email");
  } else {
    action("");
  }
}
export function phoneField() {}
export function stringReplacement(phone: string) {
  let mask = "+7(***) *** ** **";
  let arr1 = mask.split("");
  let textReg = phone.match(/(-?\d+(\.\d+)?)/g);
  if (textReg) {
    let text;
    if (phone.length === 1) {
      text = textReg.splice(0, 5).join("");
    } else {
      text = textReg.splice(1, 5).join("");
    }
    const rezult: any = {
      0: mask,
      1: arr1.slice(0, 3).join("") + text + arr1.slice(4, mask.length).join(""),
      2: arr1.slice(0, 3).join("") + text + arr1.slice(5, mask.length).join(""),
      3: arr1.slice(0, 3).join("") + text + arr1.slice(6, mask.length).join(""),
      4:
        arr1.slice(0, 3).join("") +
        text[0] +
        text[1] +
        text[2] +
        ") " +
        text[3] +
        arr1.slice(9, mask.length).join(""),
      5:
        arr1.slice(0, 3).join("") +
        text[0] +
        text[1] +
        text[2] +
        ") " +
        text[3] +
        text[4] +
        arr1.slice(10, mask.length).join(""),
      6:
        arr1.slice(0, 3).join("") +
        text[0] +
        text[1] +
        text[2] +
        ") " +
        text[3] +
        text[4] +
        text[5] +
        arr1.slice(11, mask.length).join(""),
      7:
        arr1.slice(0, 3).join("") +
        text[0] +
        text[1] +
        text[2] +
        ") " +
        text[3] +
        text[4] +
        text[5] +
        " " +
        text[6] +
        arr1.slice(13, mask.length).join(""),
      8:
        arr1.slice(0, 3).join("") +
        text[0] +
        text[1] +
        text[2] +
        ") " +
        text[3] +
        text[4] +
        text[5] +
        " " +
        text[6] +
        text[7] +
        arr1.slice(14, mask.length).join(""),
      9:
        arr1.slice(0, 3).join("") +
        text[0] +
        text[1] +
        text[2] +
        ") " +
        text[3] +
        text[4] +
        text[5] +
        " " +
        text[6] +
        text[7] +
        " " +
        text[8] +
        arr1.slice(16, mask.length).join(""),
      10:
        arr1.slice(0, 3).join("") +
        text[0] +
        text[1] +
        text[2] +
        ") " +
        text[3] +
        text[4] +
        text[5] +
        " " +
        text[6] +
        text[7] +
        " " +
        text[8] +
        text[9] +
        arr1.slice(17, mask.length).join(""),
    };
    if (rezult.hasOwnProperty(text.length)) {
      return rezult[text.length];
    }
  }
}
export function messageField(text: string, min: number, max: number) {
  if (text.length < min) {
    return "минимальное число символов: 3";
  } else if (text.length > max) {
    return "максимально число символов: 300";
  } else return "";
}
