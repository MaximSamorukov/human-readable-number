module.exports = function toReadable(number) {
  const lib = {
    0: {
      1: ' one',
      2: ' two',
      3: ' three',
      4: ' four',
      5: ' five',
      6: ' six',
      7: ' seven',
      8: ' eight',
      9: ' nine',
      '01': ' ten',
    },
    1: {
      10: ' ten',
      2: ' twenty',
      3: ' thirty',
      4: ' forty',
      5: ' fifty',
      6: ' sixty',
      7: ' seventy',
      8: ' eighty',
      9: ' ninety',
    },
    2: {
      1: 'one hundred',
      2: 'two hundred',
      3: 'three hundred',
      4: 'four hundred',
      5: 'five hundred',
      6: 'six hundred',
      7: 'seven hundred',
      8: 'eight hundred',
      9: 'nine hundred',
    }
  }

  const lib1 = {
    0: {
      11: ' eleven',
      21: ' twelve',
      31: ' thirteen',
      41: ' fourteen',
      51: ' fifteen',
      61: ' sixteen',
      71: ' seventeen',
      81: ' eighteen',
      91: ' nineteen'
    },
    1: {
      1: 'one hundred',
      2: 'two hundred',
      3: 'three hundred',
      4: 'four hundred',
      5: 'five hundred',
      6: 'six hundred',
      7: 'seven hundred',
      8: 'eight hundred',
      9: 'nine hundred',
    }
  }

  const lib2 = {
    0: {
      '01': ' ten',
    },
    1: {
      1: 'one hundred',
      2: 'two hundred',
      3: 'three hundred',
      4: 'four hundred',
      5: 'five hundred',
      6: 'six hundred',
      7: 'seven hundred',
      8: 'eight hundred',
      9: 'nine hundred',
    }
  };
  result = 'zero';
  if (number === 0) return result;
  const numberToString = `${number}`;
  const stringToArrayInv = numberToString.split('').reverse();
  if (stringToArrayInv.length > 1 && stringToArrayInv[1] === '1' && stringToArrayInv[0] !== '0') {
    let resultArray = [];
    resultArray[0] = stringToArrayInv[0] + stringToArrayInv[1];
    if (stringToArrayInv[2]) resultArray[1] = stringToArrayInv[2];
    result = resultArray.map((i, index) => {

      return lib1[index][parseInt(i, 10)];

    }).map((i) => i.trim()).reverse().join(' ').trim();

  } else {
    if (stringToArrayInv.length > 1 && stringToArrayInv[1] === '1' && stringToArrayInv[0] === '0') {
      let newArray = []
      newArray[0] = stringToArrayInv[0] + stringToArrayInv[1];
      if (stringToArrayInv[2]) newArray[1] = stringToArrayInv[2];
      result = newArray.map((i, index) => {
        return lib2[index][i];
      }).reverse().join('').trim();
    } else {
      result = stringToArrayInv.map((i, index) => lib[index][parseInt(i, 10)]).reverse().join('').trim();

    }
  }

  return result;
}


