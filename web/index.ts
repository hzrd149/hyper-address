import { encodeAddress, decodeAddress } from "../src";

function hexToUint8Array(hex) {
  if (hex.length % 2 !== 0) throw new Error("Hex string must have an even length");

  const uint8Array = new Uint8Array(hex.length / 2);

  for (let i = 0; i < hex.length; i += 2) {
    uint8Array[i / 2] = parseInt(hex.substr(i, 2), 16);
  }

  return uint8Array;
}
function uint8ArrayToHex(uint8Array: Uint8Array) {
  return Array.from(uint8Array)
    .map((byte) => byte.toString(16).padStart(2, "0")) // Convert to hex and pad with zeros
    .join(""); // Join all hex strings into a single string
}

const hexInput = document.getElementById("hex") as HTMLInputElement;
const bech32Input = document.getElementById("bech32") as HTMLInputElement;

hexInput?.addEventListener("change", () => {
  if (hexInput.value.length === 64) {
    bech32Input.value = encodeAddress(hexToUint8Array(hexInput.value));
  } else bech32Input.value = "";
});

bech32Input?.addEventListener("change", () => {
  if (bech32Input.value.length >= 58) {
    hexInput.value = uint8ArrayToHex(decodeAddress(bech32Input.value));
  } else hexInput.value = "";
});
