export const RPC_CONFIG = {
  bsc : {
    production : {
      name : "Binance Smart Chain Mainnet",
      chainId : 56,
      url : [
        'https://bsc-dataseed.binance.org/',
        "https://bsc-dataseed1.ninicoin.io/"
      ],
      scan : "https://bscscan.com/"
    },
    dev : {
      name : "Binance Smart Chain Testnet",
      chainId : 97,
      url : 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      scan : "https://testnet.bscscan.com/"
    },
    staging : {
      name : "Binance Smart Chain Testnet",
      chainId : 97,
      url : 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      scan : "https://testnet.scscan.com/"
    }
  },
  eth : {
    production : {
      name : "Ethereum Mainnet",
      chainId : 1,
      url : 'https://mainnet.infura.io/v3/ac6e5dfdbd5e4d4d85447d7599b5a3e5',
      scan : "https://etherscan.io"
    },
    dev : {
      name : "Ethereum Ribery Testnet",
      chainId : 4,
      url : 'https://rinkeby.infura.io/v3/ac6e5dfdbd5e4d4d85447d7599b5a3e5',
      scan : 'https://rinkeby.etherscan.io/',
    },
    staging : {
      name : "Ethereum Ribery Testnet",
      chainId : 4,
      url : 'https://rinkeby.infura.io/v3/ac6e5dfdbd5e4d4d85447d7599b5a3e5',
      scan : 'https://rinkeby.etherscan.io/',
    }
  },
}

export const BUSD_CONTRACT  = {
  97 : "0x6945239350ae805b0823cb292a4da5974d166640",
  56 : "0xe9e7cea3dedca5984780bafc599bd69add087d56"
}

export const RIR_BSC_CONTRACT  = {
  97 : "0x6768BDC5d03A87942cE7cB143fA74e0DadE0371b",
  56 : "0x30FB969AD2BFCf0f3136362cccC0bCB99a7193bC",
}

export const RIR_ETH_CONTRACT  = {
  1 : "0x6768bdc5d03a87942ce7cb143fa74e0dade0371b",
  4 : "0x6768bdc5d03a87942ce7cb143fa74e0dade0371b",
}

export const USDT_CONTRACT  = {
  4 : "0x6945239350ae805b0823cb292a4da5974d166640"
}



export const NetworkLocalStorageKey = "__network"

export const POLLING_INTERVAL = 12000