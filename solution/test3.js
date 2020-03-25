const str1 = read_line();
const str2 = read_line();

function DNAMatch(dna1, dna2) {
  let component1 = 0;
  let component2 = 0;
  let diff = 0;
  for (let i = 0; i < dna1.length; i++) {
    let temp1 = dna1.charAt(i);
    let temp2 = dna2.charAt(i);
    if (temp1 !== temp2) {
      diff++;
    }
    if (temp1 === 'A') {
      component1++;
    }

    if (temp2 === 'A') {
      component2++;
    }
  }

  let ans = Math.abs(component1 - component2) + (diff - Math.abs(component1 - component2)) / 2;
  console.log(ans);
}

DNAMatch(str1, str2);