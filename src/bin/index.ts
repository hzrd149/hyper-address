#!/usr/bin/env node
import { Command } from "commander";
import { decodeAddress, encodeAddress } from "../address.js";

const program = new Command();

program
  .command("decode")
  .description("decode a bech32 hyper address to hex")
  .argument("<address>", "The hypr1 bech32 encoded address")
  .action((address: string) => {
    process.stdout.write(Buffer.from(decodeAddress(address)).toString("hex") + "\n");
  });

program
  .command("encode")
  .description("encode a hex hyperdht key to a bech32 address")
  .argument("<key>", "A hex string")
  .action((key: string) => {
    process.stdout.write(encodeAddress(Buffer.from(key, "hex")) + "\n");
  });

program.parse();
