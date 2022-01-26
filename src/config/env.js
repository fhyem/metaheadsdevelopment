const ENV = {
  development: {
    CONTRACT_ADDRESS: '0x3FD78592C3257848a56aA9b0Ba235eD732E49763',
    SCAN_LINK:
      'https://kovan.etherscan.io/address/0x3fd78592c3257848a56aa9b0ba235ed732e49763',
    NETWORK: {
      NAME: 'Kovan Test Network',
      SYMBOL: 'ETH',
      ID: 42,
    },
    NFT_NAME: 'Florence.gg Tickets',
    SYMBOL: 'Florence',
    MAX_SUPPLY: 10000,
    WEI_COST: 10000000000000000, // 0.01 eth
    DISPLAY_COST: 0.01,
    GAS_LIMIT: 285000,
    MARKETPLACE: 'OpenSea',
    MARKETPLACE_LINK: 'https://opensea.io',
    SHOW_BACKGROUND: true,
  },
  production: {
    CONTRACT_ADDRESS: '0x4F229e3679Bc3b74fC03e2E20c9587feecC43d68',
    SCAN_LINK:
      'https://ftmscan.com/address/0x4F229e3679Bc3b74fC03e2E20c9587feecC43d68',
    NETWORK: {
      NAME: 'Fantom Opera',
      SYMBOL: 'FTM',
      ID: 250,
    },
    NFT_NAME: 'Fantom Soup Cans',
    SYMBOL: 'SOUP',
    MAX_SUPPLY: 3200,
    WEI_COST: 75000000000000000000,
    DISPLAY_COST: 75,
    GAS_LIMIT: 285000,
    MARKETPLACE: 'PaintSwap',
    MARKETPLACE_LINK:
      'https://paintswap.finance/marketplace/collections/0x4F229e3679Bc3b74fC03e2E20c9587feecC43d68',
    SHOW_BACKGROUND: true,
  },
};

export default ENV;
