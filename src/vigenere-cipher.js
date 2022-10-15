const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

//  Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).


class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect ?? true;
    this.alfabetul = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  calculateIndex (arr) {
    let result = [];
    arr.forEach(litere => {
      result.push(this.alfabetul.indexOf(litere.toUpperCase()));
    });
    return result;
  }

  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }
    
    const testLength = () => {
      if (key.length >= message.length) {
        //return key;
      } else {
        key = key+key;
        testLength(key);
      }
    }
    
    testLength();
    
    const messageIndex = this.calculateIndex(message.split(''));
    let keyIndex = this.calculateIndex(key.split(''));
    let shift = 0;
    
    const newIndex = [];
    
    messageIndex.forEach((element, index) => {
      const currentIndex = this.alfabetul.split('')[(element + keyIndex[index - shift]) % 26];
      if (messageIndex[index] === -1) {
        shift += 1;
        newIndex.push(message[index]);
      } else {
        newIndex.push(element + keyIndex[index] < 28 ? currentIndex : this.alfabetul.split('')[(element + keyIndex[index - shift]) % 26]);
      }
    });

    return this.isDirect ? newIndex.join('') : newIndex.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!(encryptedMessage && key)) {
      throw new Error('Incorrect arguments!');
    }
    
    const testLength = () => {
      if (key.length >= encryptedMessage.length) {
        //return key;
      } else {
        key = key+key;
        testLength(key);
      }
    }
    
    testLength();
    
    const encryptedMessageIndex = this.calculateIndex(encryptedMessage.split(''));
    let keyIndex = this.calculateIndex(key.split(''));
    let shift = 0;
    
    const newIndex = [];
    
    encryptedMessageIndex.forEach((element, index) => {
      const currentIndex = this.alfabetul.split('')[element - keyIndex[index - shift]];
      if (encryptedMessageIndex[index] === -1) {
        shift += 1;
        newIndex.push(encryptedMessage[index]);
      } else {
        
        if (element - keyIndex[index - shift] < 0) {
          newIndex.push(this.alfabetul[this.alfabetul.length - Math.abs(element - keyIndex[index - shift])]);
        } else {
          newIndex.push(currentIndex);
        }
      }
    });

    return this.isDirect ? newIndex.join('') : newIndex.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
