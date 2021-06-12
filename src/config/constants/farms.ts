import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'FIRE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0C1117f343D23Da584DFfAf9f64Ae73278175d9B',
    },
    tokenSymbol: 'FIRE',
    tokenAddresses: {
      97: '',
      56: '0x2011b7b10111DDA8dfC4673C74E3c4Cf3dd214C1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'FIRE-BUSD',
    lpAddresses: {
      97: '',
      56: '0x331770f789779a6ad39d5c42fbafe9bb3fbd39d1',
    },
    tokenSymbol: 'FIRE',
    tokenAddresses: {
      97: '',
      56: '0x2011b7b10111DDA8dfC4673C74E3c4Cf3dd214C1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'DAI-BUSD',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
