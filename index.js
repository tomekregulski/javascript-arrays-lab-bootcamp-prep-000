var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

var kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name) {
  return [...kittens, name];
}
