const ENV = {
  development: {
    CONTRACT_ADDRESS: '0x9c5C0E7Ec4B2d727f5c431cdbC2C28aDDfAD5Bdd', //wallet from contract deployed 0xa7f4f9ddeadC97fDA29e438dd37e75d0d2e855A8
    SCAN_LINK:
      'https://testnet.ftmscan.com/address/0x9c5c0e7ec4b2d727f5c431cdbc2c28addfad5bdd',
    NETWORK: {
      NAME: 'Fantom Testnet',
      SYMBOL: 'FTM',
      ID: 0xfa2,
    },
    NFT_NAME: 'Meta Heads',
    SYMBOL: 'MetaHead',
    MAX_SUPPLY: 8888,
    WEI_COST: 10000000000000000, // 0.01 eth
    DISPLAY_COST: 0.01,
    GAS_LIMIT: 285000,
    MARKETPLACE: 'Paint Swap',
    MARKETPLACE_LINK: 'https://https://paintswap.finance/.io',
    SHOW_BACKGROUND: true,
  },
  // production: {
  //   CONTRACT_ADDRESS: '0x4F229e3679Bc3b74fC03e2E20c9587feecC43d68',
  //   SCAN_LINK:
  //     'https://ftmscan.com/address/0x4F229e3679Bc3b74fC03e2E20c9587feecC43d68',
  //   NETWORK: {
  //     NAME: 'Fantom Opera',
  //     SYMBOL: 'FTM',
  //     ID: 250,
  //   },
  //   NFT_NAME: 'Fantom Soup Cans',
  //   SYMBOL: 'SOUP',
  //   MAX_SUPPLY: 3200,
  //   WEI_COST: 75000000000000000000,
  //   DISPLAY_COST: 75,
  //   GAS_LIMIT: 285000,
  //   MARKETPLACE: 'PaintSwap',
  //   MARKETPLACE_LINK:
  //     'https://paintswap.finance/marketplace/collections/0x4F229e3679Bc3b74fC03e2E20c9587feecC43d68',
  //   SHOW_BACKGROUND: true,
  // },
};

export default ENV;
