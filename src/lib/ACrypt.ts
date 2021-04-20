// Asymmetrical Encryption

import * as crypto from 'crypto'

let _privateKey: crypto.KeyObject
let _publicKey: crypto.KeyObject

export function setPublicKey (publicKey: crypto.KeyObject) {
  _publicKey = publicKey
}

export function setPrivateKey (privateKey: crypto.KeyObject) {
  _privateKey = privateKey
}

export function generateKeyPair () {
  return (({ publicKey, privateKey }) => ({ publicKey, privateKey }))(
    crypto.generateKeyPairSync('rsa', {
      modulusLength: 8192
    })
  )
}

export function derivePublicKeyFromPrivateKey (
  privateKeyObj?: crypto.KeyObject
) {
  return crypto.createPublicKey(privateKeyObj || _privateKey)
}

export function serialisePublicKey (publicKeyObj?: crypto.KeyObject) {
  return (publicKeyObj || _publicKey)
    .export({ format: 'der', type: 'spki' })
    .toString('base64')
}

export function deserialisePublicKey (
  publicKeyString: string
): crypto.KeyObject {
  return crypto.createPublicKey({
    key: Buffer.from(publicKeyString, 'base64'),
    format: 'der',
    type: 'spki'
  })
}

export function serialisePrivateKey (privateKeyObj?: crypto.KeyObject) {
  return (privateKeyObj || _privateKey)
    .export({ format: 'der', type: 'pkcs8' })
    .toString('base64')
}

export function deserialisePrivateKey (
  privateKeyString: string
): crypto.KeyObject {
  return crypto.createPrivateKey({
    key: Buffer.from(privateKeyString, 'base64'),
    format: 'der',
    type: 'pkcs8'
  })
}

function stringReverse (string: String): String {
  return string
    .split('')
    .reverse()
    .join('')
}

export function encryptData (data: Buffer, publicKey?: crypto.KeyObject) {
  return crypto.publicEncrypt(
    {
      key: publicKey || _publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha512'
    },
    data
  )
}

export function decryptData (data: Buffer, privateKey?: crypto.KeyObject) {
  return crypto.privateDecrypt(
    {
      key: privateKey || _privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha512'
    },
    data
  )
}
