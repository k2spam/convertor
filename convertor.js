class Convertor {
  constructor () {
    console.log('convertor')
  }

  stringToBin(str) {
    const isStr = /[^0-9.]/g.test(str)

    if(isStr) {
      return str.split('').map(s => s.charCodeAt().toString(2)).join(' ')
    }
    else {
      return parseFloat(str).toString(2)
    }
  }

  binToString(bin) {
    const isStr = /\s/g.test(bin)

    if(isStr) {
      return bin.split(' ').map( b => String.fromCharCode(parseInt(b, 2))).join('')
    }
    else {
      const isDot = /\./g.test(bin)
      if(isDot) {
        const parts = bin.toString().split('.')
        return `${parseInt(parts[0], 2)}.${parseInt(parts[1], 2)}`
      }
      return parseInt(bin, 2)
    }
  }

  stringToBase64(str) {
    return window.btoa(str)
  }

  base64ToString(base) {
    return window.atob(base)
  }
}