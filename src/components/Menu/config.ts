import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "http://exchange.firedefi.finance//#/swap",
      },
      {
        label: "Liquidity",
        href: "http://exchange.firedefi.finance//#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools (soon)',
    icon: 'PoolIcon',
    href: '/Pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Price Chart',
        href: 'https://goswapp-bsc.web.app/0x2011b7b10111DDA8dfC4673C74E3c4Cf3dd214C1'
      },
      {
        label: 'Docs',
        href: 'https://firefarm.gitbook.io/fire-defi/',
      },
      {
        label: 'Github',
        href: 'https://github.com/fireDEFIfarm',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x2011b7b10111DDA8dfC4673C74E3c4Cf3dd214C1',
      },
    ],
  },
]

export default config
