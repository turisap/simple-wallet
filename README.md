# Welcome to Simple Wallet 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

![Screen](.github/banner.png?raw=true "Title")

This simple wallet was build solely for getting familiar with `@solana/web3.js` library
as well as getting better in development for Solana and Rust.

[DEMO on gh-pages](https://turisap.github.io/simple-wallet)

The wallet uses the following packages from the ecosystem:

* `@saberhq/token-utils`
* `@project-serum/borsh`
* `@solana/spl-token-registry`
* `@solana/wallet-adapter-*`
* `@solana/web3.js`


## Local usage

Install modules across all packages
```sh
yarn install 
```

To start web-app
```sh
yarn serve
```

## Rust and smart contracts
This wallet provides a functionality to write / update favorite addresses on-chain
using Rust (it lies in `rust/address-list/src`) and deployed to the dev net. The addresses are saved in PDAs, which are 
unique for each user (pubKey).


![Screen](.github/approve.png?raw=true "Title")
![Screen](.github/addresses.png?raw=true "Title")



## Author

👤 **Kirill Shakirov <kirillshakirov57@gmail.com>**

* Github: [@turisap](https://github.com/turisap)
