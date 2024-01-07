// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript

function createSecretHolder(secret) {
  let _secret = secret;

  return {
    getSecret() {
      return _secret;
    },
    setSecret(newSecret) {
      _secret = newSecret;
    },
  };
}

function createSecretHolder(secret) {
  return {
    getSecret: () => secret,
    setSecret: (_secret) => (secret = _secret),
  };
}

const createSecretHolder = (secret) => ({
  getSecret: () => secret,
  setSecret: (_secret) => (secret = _secret),
});

const obj = createSecretHolder(5);
console.log(obj.getSecret(), 5);
console.log(obj.setSecret(2));
console.log(obj.getSecret(), 2);
