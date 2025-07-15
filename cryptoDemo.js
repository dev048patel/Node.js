// It provide cryptograophy demo using Node.js crypto module
// can create hash, hmac, cipher, decipher, sign, verify, encrypt and decrypt data.

import crypto from 'crypto';

// create a hash
//createHash()
// const hash = crypto.createHash('sha256');
// hash.update('password');
// console.log(hash.digest('hex')); // prints the hash of the password


// generate random bytes
//randomBytes()
// crypto.randomBytes(16, (err, buf) => {
//     if(err) throw err;
// console.log(buf.toString('hex')); // prints 16 random bytes in hex format
// });

// 2 MEHODS
// 1. creataeCipheriv & 2. createDecipheriv
const algorithm = 'aes-256-cbc'; // can read the documentation for more algorithms
const key = crypto.randomBytes( 32); // random key of 32 bytes
const iv = crypto.randomBytes(16); // random initialization vector of 16 bytes

// ENCRYPTION
const cipher = crypto.createCipheriv(algorithm, key, iv); // Create cipher
let encrypted = cipher.update('Hello, this is a secret messagee', 'utf-8', 'hex'); // Encrypted message
encrypted += cipher.final('hex'); // Final encrypted message
console.log('Encrypted:', encrypted); // prints the encrypted message

// DECRYPTION
const desipher = crypto.createDecipheriv(algorithm, key, iv); // Create decipher
let decrypted = desipher.update(encrypted, 'hex', 'utf-8'); // Decrypted Message
decrypted += desipher.final('utf-8');
console.log( decrypted); // prints the decrypted message