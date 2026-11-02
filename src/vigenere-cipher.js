const { NotImplementedError } = require('../lib');

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
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.process(encryptedMessage, key, 'decrypt');
  }

  process(text, key, mode) {
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperText.length; i += 1) {
      const char = upperText[i];
      const charCode = char.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        const textOffset = charCode - 65;
        const keyOffset = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;

        let shiftedOffset;
        if (mode === 'encrypt') {
          shiftedOffset = (textOffset + keyOffset) % 26;
        } else {
          shiftedOffset = (textOffset - keyOffset + 26) % 26;
        }

        result.push(String.fromCharCode(shiftedOffset + 65));
        keyIndex += 1;
      } else {

        result.push(char);
      }
    }
    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}
module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
