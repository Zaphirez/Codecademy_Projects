// Write class below
class ShiftCipher {
    constructor(num) {
        this._shifter = num;
    }

    encrypt(string) {
        string = string.toLowerCase()
        let UnicodeChars = []
        let EncryptedChars = []
        let returnString = ""
        for(let i = 0; i < string.length; ++i) {
            let currentChar = string.charCodeAt(i)
            UnicodeChars.push(currentChar)
        }
        for(let i = 0; i < UnicodeChars.length; ++i){
            if (UnicodeChars[i] >= 97 && UnicodeChars[i] <= 122){
                // Check if Shifted Number is in range
                if (UnicodeChars[i] + this._shifter >= 97 && UnicodeChars[i] + this._shifter <= 122) {
                    EncryptedChars.push(UnicodeChars[i] + this._shifter);
                } else {
                    EncryptedChars.push(UnicodeChars[i] + this._shifter - 122 + 96)
                }
            } else {
                EncryptedChars.push(UnicodeChars[i])
            }
        }
        for(let i = 0; i < EncryptedChars.length; ++i) {
            returnString += String.fromCharCode(EncryptedChars[i])
        }
        return returnString.toUpperCase()
    }

    decrypt(string) {
        string = string.toLowerCase()
        let UnicodeChars = []
        let DecryptedChars = []
        let returnString = ""
        for(let i=0; i < string.length; ++i) {
            UnicodeChars.push(string.charCodeAt(i));
        }
        for(let i=0; i < UnicodeChars.length; ++i) {
            let currentChar = UnicodeChars[i]
            if(currentChar >= 97 && currentChar <= 122) {
                // Check if unshifted Char is still in abc range
                if(currentChar - this._shifter >= 97) {
                    DecryptedChars.push(currentChar - this._shifter)
                } else {
                    DecryptedChars.push(currentChar - this._shifter + 122 - 96)
                }
            } else {
                DecryptedChars.push(currentChar)
            }
        }
        for (let i = 0; i < DecryptedChars.length; ++i) {
            returnString += String.fromCharCode(DecryptedChars[i])
        }
        return returnString.toLowerCase()
    }
}
