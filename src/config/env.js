const ENV = {
  development: {
    CONTRACT_ADDRESS: '',
    SCAN_LINK:
      'https://testnet.ftmscan.com/address/0xc457d0e885a878f2f8ae4b2ad9d850db046ce818',
    NETWORK: {
      NAME: 'Fantom Testnet',
      SYMBOL: 'FTM',
      ID: 4002,
    },
    NFT_NAME: 'METAHEADS',
    SYMBOL: ' Metaheads',
    MAX_SUPPLY: 10000,
    WEI_COST: 10000000000000000, // 0.01 eth
    DISPLAY_COST: 0.01,
    GAS_LIMIT: 285000,
    MARKETPLACE: 'Kyodo',
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
