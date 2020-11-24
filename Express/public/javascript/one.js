var obj = []
Object.defineProperty(obj, 'test', {
  get: () => {
    console.log(test);
  },
  set: (newVal) => {
    document.getElementById('textP').innerHTML = newVal;
    document.getElementById('inputP').value = newVal;
  }
})

document.addEventListener('keyup', e => {
  obj.test = e.target.value;
})

obj.test = '';