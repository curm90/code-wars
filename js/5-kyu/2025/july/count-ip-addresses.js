// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

function ipsBetween(start, end) {
  const startParts = start.split('.').map(Number);
  const endParts = end.split('.').map(Number);

  let startNum = 0;
  let endNum = 0;

  for (let i = 0; i < startParts.length; i++) {
    startNum += startParts[i] * 256 ** (3 - i);
    endNum += endParts[i] * 256 ** (3 - i);
  }

  return endNum - startNum;
}

function ipsBetweenBitwise(start, end) {
  const ipToNumber = (ip) => {
    const parts = ip.split('.').map(Number);
    return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
  };

  return ipToNumber(end) - ipToNumber(start);
}

function ipsBetweenSingleBitwise(start, end) {
  const ipToNumber = (ip) => {
    const [a, b, c, d] = ip.split('.').map(Number);
    return (((((a << 8) | b) << 8) | c) << 8) | d;
  };

  return ipToNumber(end) - ipToNumber(start);
}

function ipsBetweenCompact(start, end) {
  const ipToNumber = (ip) => {
    return ip
      .split('.')
      .map(Number)
      .reduce((acc, octet) => (acc << 8) | octet, 0);
  };

  return ipToNumber(end) - ipToNumber(start);
}

console.log(ipsBetween('150.0.0.0', '150.0.0.1', 1));
console.log(ipsBetween('10.0.0.0', '10.0.0.50', 50));
console.log(ipsBetween('20.0.0.10', '20.0.1.0', 246));
console.log(ipsBetween('10.11.12.13', '10.11.13.0', 243));
console.log(ipsBetween('160.0.0.0', '160.0.1.0', 256));
console.log(ipsBetween('170.0.0.0', '170.1.0.0', 65536));
console.log(ipsBetween('50.0.0.0', '50.1.1.1', 65793));
console.log(ipsBetween('180.0.0.0', '181.0.0.0', 16777216));
console.log(ipsBetween('1.2.3.4', '5.6.7.8', 67372036));
console.log(ipsBetween('0.0.0.0', '255.255.255.255', 2 ** 32 - 1));
