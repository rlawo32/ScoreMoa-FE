export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p'

export const PLATFORM_META = {
  watcha:     { name: '왓챠피디아',       color: '#e94560', border: 'rgba(233,69,96,0.22)',   borderHover: 'rgba(233,69,96,0.5)'   },
  cgv:        { name: 'CGV 골든에그',     color: '#f5a623', border: 'rgba(245,166,35,0.22)',  borderHover: 'rgba(245,166,35,0.5)'  },
  rt:         { name: 'Rotten Tomatoes', color: '#fa320a', border: 'rgba(250,50,10,0.22)',   borderHover: 'rgba(250,50,10,0.5)'   },
  popcorn:    { name: '팝콘 지수',        color: '#f9c23c', border: 'rgba(249,194,60,0.22)',  borderHover: 'rgba(249,194,60,0.5)'  },
  letterboxd: { name: 'Letterboxd',      color: '#00b020', border: 'rgba(0,176,32,0.22)',    borderHover: 'rgba(0,176,32,0.5)'    },
  imdb:       { name: 'IMDb',            color: '#f5c518', border: 'rgba(245,197,24,0.22)',  borderHover: 'rgba(245,197,24,0.5)'  },
  tmdb:       { name: 'TMDB',            color: '#01b4e4', border: 'rgba(1,180,228,0.22)',   borderHover: 'rgba(1,180,228,0.5)'   },
  metacritic: { name: 'Metacritic',      color: '#66cc33', border: 'rgba(102,204,51,0.22)',  borderHover: 'rgba(102,204,51,0.5)'  },
} as const
