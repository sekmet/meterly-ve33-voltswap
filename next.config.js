module.exports = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API || 'http://localhost:3033',
    RPC_URL: process.env.NEXT_PUBLIC_RPC_URL || 'https://testnet.meter.io',
    CHAINID: process.env.NEXT_PUBLIC_CHAINID || '83',
    METER_WALLET_PRIVATE_KEY: process.env.METER_WALLET_PRIVATE_KEY || '',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}
