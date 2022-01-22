import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Larvas',
  description:
    '',
  image: 'https://larvastoken.com/wp-content/uploads/2021/12/cropped-photo_2021-12-24_13-26-04__2_-removebg-preview-2-1-1.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
    
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Larvas')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Larvas')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Larvas')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Larvas')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Larvas')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Larvas')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Larvas')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Larvas')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Larvas')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Larvas')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Larvas')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Larvas')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Larvas')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Larvas')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Larvas')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Larvas')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Larvas')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Larvas')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Larvas Info & Analytics')}`,
        description: 'View statistics for Larvas exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Larvas Info & Analytics')}`,
        description: 'View statistics for Larvas exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Larvas Info & Analytics')}`,
        description: 'View statistics for Larvas exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Larvas')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Larvas')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Larvas')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Larvas')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Larvas')}`,
      }
    default:
      return null
  }
}
