exports.numOfClass = (number) => {
  let className = "";
  switch (number) {
    case '2':
      className = "two";
      break;
    case '3':
      className = "three";
      break;
    case '4':
      className = "four";
      break;
    case '5':
      className = "five";
      break;
    case '6':
      className = "six";
      break;
    case '7':
      className = "seven";
      break;
    case '8':
      className = "eight";
      break;
    case '9':
      className = "nine";
      break;
    default:
      className = null;
      break;
  }

  return className;
};
