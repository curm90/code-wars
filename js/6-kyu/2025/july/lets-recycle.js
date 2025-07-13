// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(array) {
  const bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  for (const item of array) {
    if (item.material) {
      bins[item.material].push(item.type);
    }

    if (item.secondMaterial) {
      bins[item.secondMaterial].push(item.type);
    }
  }

  const { paper, glass, organic, plastic } = bins;
  const result = [paper, glass, organic, plastic];

  return result;
}

function recycle(array) {
  const bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  };

  for (const item of array) {
    if (item.material) {
      bins[item.material].push(item.type);
    }

    if (item.secondMaterial) {
      bins[item.secondMaterial].push(item.type);
    }
  }

  return Object.values(bins);
}

function recycle(array) {
  const materials = ['paper', 'glass', 'organic', 'plastic'];

  const result = materials.map((mat) =>
    array.filter((obj) => obj.material == mat || obj.secondMaterial == mat).map((obj) => obj.type)
  );

  return result;
}

let problem = [
  { type: 'rotten apples', material: 'organic' },
  { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
];

let answer = [
  ['wine bottle', 'amazon box', 'beer bottle'], // paper
  ['wine bottle', 'beer bottle'], // glass
  ['rotten apples', 'out of date yogurt'], // organic
  ['out of date yogurt'], // plastic
];
console.log(recycle(problem), answer);
