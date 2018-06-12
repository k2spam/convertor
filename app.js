class App {
  constructor () {
    this.conv = new Convertor()
    this.f1 = document.getElementById('field1')
    this.f2 = document.getElementById('field2')
    this.radio = document.querySelectorAll('[type=radio]')
    this.setTo()

    this.f1.addEventListener('keyup', () => {this.convert()})
    this.radio.forEach( r => r.addEventListener('change', () => {this.setTo()}) )
  }

  setTo() {
    this.to = document.querySelector('[type=radio]:checked')
    this.convert()
  }

  convert() {
    try{
      switch(this.to.value){
        case 'StringToBase64': this.f2.innerText = this.conv.stringToBase64( this.f1.value ); break
        case 'Base64ToString': this.f2.innerText = this.conv.base64ToString( this.f1.value ); break
        case 'StringToBin': this.f2.innerText = this.conv.stringToBin( this.f1.value ); break
        case 'BinToString': this.f2.innerText = this.conv.binToString( this.f1.value ); break
      }
    }
    catch (e) {}
  }
}

window.addEventListener('DOMContentLoaded', () => { new App() })