# Hyper Address

This is a package to convert

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
