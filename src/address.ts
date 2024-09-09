import { bech32 } from "@scure/base";

function stripRoot(address: string) {
  return address.replace(/\.hyper$/, "");
}

function hexToUint8(hex: string) {
  hex = hex.replace(/^0x/, "");
  if (hex.length % 2 !== 0) hex = "0" + hex;

  // Convert hex string to byte array
  const bytes = new Uint8Array(hex.length / 2);

  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }

  return bytes;
}

export function isAddress(address: string) {
  return /^hypr1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{58,}$/gi.test(stripRoot(address));
}

export const Bech32MaxSize = 5000;
export function decodePubkey(encoded: string) {
  let { prefix, words } = bech32.decode(encoded, Bech32MaxSize);
  if (prefix !== "hypr") throw new Error("Invalid prefix");
  return new Uint8Array(bech32.fromWords(words));
}
export function decodeAddress(address: string) {
  return decodePubkey(stripRoot(address));
}
export function encodePubkey(pubkey: Uint8Array | string) {
  let key = typeof pubkey === "string" ? hexToUint8(pubkey) : pubkey;
  let words = bech32.toWords(key);
  return bech32.encode("hypr", words, Bech32MaxSize);
}
export function encodeAddress(pubkey: Uint8Array | string) {
  return encodePubkey(pubkey) + ".hyper";
}
