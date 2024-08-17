# Hyper Address

This is a package to convert [HyperDHT](https://docs.pears.com/building-blocks/hyperdht) publix keys or [Holesail](holesail.io) connection strings into bech32 encoded hyper addresses

This is necessary because the maximum length of a domain name is `63` characters and the `64` character hex key will not fit into a domain name.

Bech32 solves this because when encoding a `64` byte hex key with a `4` character prefix the total length comes out to `58` characters

For example this `6a3f429a867061373d159ca04468a4479b55e0f6e4cced6d5283a4f377634631` connection string with the prefix `hypr` gets converted into `hypr1dgl59x5xwpsnw0g4njsyg69yg7d4tc8kunxw6m2jswj0xamrgccsf5h969`

## Web App

You can use the web app [here](https://hzrd149.github.io/hyper-address/)

## Using the package

```js
import HolesailServer from "holesail-server";
import { isAddress, encodeAddress, decodeAddress } from "hyper-address";

const server = new HolesailServer();

server.serve({ port: 5000, address: "127.0.0.1" }, () => {
  console.log("Server started");

  // print the bech32 address
  console.log(encodeAddress(server.getPublicKey()));

  setTimeout(() => {
    server1.destroy();
    console.log("Server destroyed");
  }, 6000);
});
```

## Using the cli

Encoding an address

```bash
npx hyper-address encode 6a3f429a867061373d159ca04468a4479b55e0f6e4cced6d5283a4f377634631
# hypr1dgl59x5xwpsnw0g4njsyg69yg7d4tc8kunxw6m2jswj0xamrgccsf5h969.hyper
```

Decoding an address

```bash
npx hyper-address decode hypr1dgl59x5xwpsnw0g4njsyg69yg7d4tc8kunxw6m2jswj0xamrgccsf5h969.hyper
# 6a3f429a867061373d159ca04468a4479b55e0f6e4cced6d5283a4f377634631
```
