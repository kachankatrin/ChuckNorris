import * as reducers from './JokesReducer';
import * as types from '../actions/Actions';

describe('jokes reducer', () => {
  it('should return initial state', () => {
    const result = reducers.jokesReducer(undefined, {});
    delete result.currentDate;
    expect(result).toEqual(
      {
        jokes: [],
        search: 'random',
        searchType: 'random',
        searchapi: 'random',
        category: '',
        textsearch: '',
        currentPage: 1,
        jokesPerPage: 5,
        indexOfLastJoke: null
      }
    )
  })

  it('should get jokes with "random" search query and reset search', () => {
    const initialState = {
      jokes: [],
      textsearch: '',
      currentPage: 1,
      indexOfLastJoke: null,
      searchapi: 'random',
      jokesPerPage: 5
    }
    const action = {
      type: types.DATA_LOADED,
      payload: {
        categories: [],
        created_at: "2020-01-05 13:42:22.089095",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "f7aGbCj9QcWQCdvDxJYkjg",
        updated_at: "2020-01-05 13:42:22.089095",
        url: "https://api.chucknorris.io/jokes/f7aGbCj9QcWQCdvDxJYkjg",
        value: "Chuck Norris can tap dance though a mine field...wearing clown shoes"
      }
    }
    expect(
      reducers.jokesReducer(initialState, action)).toMatchObject({
        jokes: action.payload,
        textsearch: '',
        currentPage: 1,
        indexOfLastJoke: 1 * initialState.jokesPerPage,
        searchapi: 'random'
      })
  })

  it('should get jokes with "animal category" search query and reset search', () => {
    const initialState = {
      jokes: [],
      textsearch: '',
      currentPage: 1,
      indexOfLastJoke: null,
      searchapi: 'random?category=animal',
      jokesPerPage: 5
    }
    const action = {
      type: types.DATA_LOADED,
      payload: {
        categories: ["animal"],
        created_at: "2020-01-05 13:42:19.104863",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "o-vfxwx6rgecuo_f5cecpq",
        updated_at: "2020-01-05 13:42:19.104863",
        url: "https://api.chucknorris.io/jokes/o-vfxwx6rgecuo_f5cecpq",
        value: "They say curiosity killed the cat. This is false. Chuck Norris killed the cat. Every single one of them."      
      }
    }
    expect(
      reducers.jokesReducer(initialState, action)).toMatchObject({
        jokes: action.payload,
        textsearch: '',
        currentPage: 1,
        indexOfLastJoke: 1 * initialState.jokesPerPage,
        searchapi: 'random?category=animal'
      })
  })

  it('should get jokes with "career category" search query and reset search', () => {
    const initialState = {
      jokes: [],
      textsearch: '',
      currentPage: 1,
      indexOfLastJoke: null,
      searchapi: 'random?category=career',
      jokesPerPage: 5
    }
    const action = {
      type: types.DATA_LOADED,
      payload: {
        categories: ["career"],
        created_at: "2020-01-05 13:42:18.823766",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "cwguxfhptcuagndjdt1hya",
        updated_at: "2020-01-05 13:42:18.823766",
        url: "https://api.chucknorris.io/jokes/cwguxfhptcuagndjdt1hya",
        value: "In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said 'Get a job'. That is the story of the universe."
      }
    }
    expect(
      reducers.jokesReducer(initialState, action)).toMatchObject({
        jokes: action.payload,
        textsearch: '',
        currentPage: 1,
        indexOfLastJoke: 1 * initialState.jokesPerPage,
        searchapi: 'random?category=career'
      })
  })

  it('should get jokes with "celebrity category" search query and reset search', () => {
    const initialState = {
      jokes: [],
      textsearch: '',
      currentPage: 1,
      indexOfLastJoke: null,
      searchapi: 'random?category=celebrity',
      jokesPerPage: 5
    }
    const action = {
      type: types.DATA_LOADED,
      payload: {
        categories: ["celebrity"],
        created_at: "2020-01-05 13:42:19.576875",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "664705gltfezqxhwbzykrg",
        updated_at: "2020-01-05 13:42:19.576875",
        url: "https://api.chucknorris.io/jokes/664705gltfezqxhwbzykrg",
        value: "Mr. T pities the fool. Chuck Norris rips the fool's head off."        
      }
    }
    expect(
      reducers.jokesReducer(initialState, action)).toMatchObject({
        jokes: action.payload,
        textsearch: '',
        currentPage: 1,
        indexOfLastJoke: 1 * initialState.jokesPerPage,
        searchapi: 'random?category=celebrity'
      })
  })

  it('should get jokes with "dev category" search query and reset search', () => {
    const initialState = {
      jokes: [],
      textsearch: '',
      currentPage: 1,
      indexOfLastJoke: null,
      searchapi: 'random?category=dev',
      jokesPerPage: 5
    }
    const action = {
      type: types.DATA_LOADED,
      payload: {
        categories: ["dev"],
        created_at: "2020-01-05 13:42:19.324003",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "ijpnw0birv-ogszti_wuag",
        updated_at: "2020-01-05 13:42:19.324003",
        url: "https://api.chucknorris.io/jokes/ijpnw0birv-ogszti_wuag",
        value: "The Chuck Norris Eclipse plugin made alien contact."
      }
    }
    expect(
      reducers.jokesReducer(initialState, action)).toMatchObject({
        jokes: action.payload,
        textsearch: '',
        currentPage: 1,
        indexOfLastJoke: 5,
        searchapi: 'random?category=dev'
      })
  })

  it('should get jokes with free text search search query and reset search', () => {
    const initialState = {
      jokes: [],
      textsearch: '',
      currentPage: 1,
      indexOfLastJoke: null,
      searchapi: 'search?query=',
      jokesPerPage: 5
    }
    const action = {
      type: types.DATA_LOADED,
      payload: {
        result: [
          { categories: [],
            created_at: "2020-01-05 13:42:18.823766",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "vnWkdAk7QT6z5eD8hEuuFg",
            updated_at: "2020-01-05 13:42:18.823766",
            url: "https://api.chucknorris.io/jokes/vnWkdAk7QT6z5eD8hEuuFg",
            value: "Chuck Norris has alredy been to Mars. This is why there is no signs of life there,"
          },
          { categories: [],
            created_at: "2020-01-05 13:42:19.897976",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "j-oQahQOQautZ-WXgnwhpw",
            updated_at: "2020-01-05 13:42:19.897976",
            url: "https://api.chucknorris.io/jokes/j-oQahQOQautZ-WXgnwhpw",
            value: "Chuck Norris has already been to Mars; that's why there are no signs of life there."
          },
          { categories: [],
            created_at: "2020-01-05 13:42:23.880601",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "R98kEqZ7Qh6eKmFJuitiYw",
            updated_at: "2020-01-05 13:42:23.880601",
            url: "https://api.chucknorris.io/jokes/R98kEqZ7Qh6eKmFJuitiYw",
            value: "Chuck Norris commanded Russell Wilson to pass the ball instead of handing it off to Marshawn Lynch. Thats the reason why the Patriots won.........Seahawks should've won."
          },
          { categories: [],
            created_at: "2020-01-05 13:42:24.696555",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "h43Kev_3S4-5L9M1KkmLdQ",
            updated_at: "2020-01-05 13:42:24.696555",
            url: "https://api.chucknorris.io/jokes/h43Kev_3S4-5L9M1KkmLdQ",
            value: "A man once told Chuck Norris that he would like to go to Mars. Chuck Norris then bent the man over backwards, shoved the man's head up his own ass and then asked, 'Do you want an express or first class flight?' The man said, 'mumble mumble.' Then Chuck Norris roundhouse kicked him to Jupiter. This is because Chuck Norris doesn't know the names of the planets, nor does he give a shit about them."
          },
          { categories: [],
            created_at: "2020-01-05 13:42:25.352697",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "aBanNLDwR-SAz7iMHuCiyw",
            updated_at: "2020-01-05 13:42:25.352697",
            url: "https://api.chucknorris.io/jokes/aBanNLDwR-SAz7iMHuCiyw",
            value: "Chuck Norris has already been to mars; that why there's no signs of life"
          },
          { categories: [],
            created_at: "2020-01-05 13:42:25.352697",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "4XpBg1qRRuyKopwmUsVxrg",
            updated_at: "2020-01-05 13:42:25.352697",
            url: "https://api.chucknorris.io/jokes/4XpBg1qRRuyKopwmUsVxrg",
            value: "Chuck Norris was once paralyzed by the pressure of his awesomeness. He then roundhouse kicked his awesomeness to Mars, where it eradicated all life, he then made more awesome."
          },
          { categories: [],
            created_at: "2020-01-05 13:42:26.447675",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "QlwDavQbT1uoVgECA2RYAg",
            updated_at: "2020-01-05 13:42:26.447675",
            url: "https://api.chucknorris.io/jokes/QlwDavQbT1uoVgECA2RYAg",
            value: "Chuck Norris has already been to mars thats why there are no signs of life there"
          },
          {categories: [],
            created_at: "2020-01-05 13:42:28.420821",
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "yGZXAYb9RvO8WaFU5Dp48A",
            updated_at: "2020-01-05 13:42:28.420821",
            url: "https://api.chucknorris.io/jokes/yGZXAYb9RvO8WaFU5Dp48A",
            value: "Chuck Norris has been to Mars. That is why there are no signs of life there."
          }
        ]
      }
    }
    expect(
      reducers.jokesReducer(initialState, action)).toMatchObject({
        jokes: action.payload,
        textsearch: '',
        currentPage: 1,
        indexOfLastJoke: 1 * initialState.jokesPerPage,
        searchapi: 'search?query='
      })
  })

  it('should check radiobutton', () => {
    const initialState = {
      searchapi: 'random',
    }
    const action = {
      type: types.CHANGE_RADIO,
      payload: {value: 'random', key: 'search'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      search: action.payload.value,
      searchapi: action.payload.value
    })
  })

  it('should check radiobutton', () => {
    const initialState = {
      searchapi: 'random',
    }
    const action = {
      type: types.CHANGE_RADIO,
      payload: {value: 'random?category=animal', key: 'search'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      search: action.payload.value,
      searchapi: action.payload.value
    })
  })

  it('should check radiobutton', () => {
    const initialState = {
      searchapi: 'random',
    }
    const action = {
      type: types.CHANGE_RADIO,
      payload: {value: 'random?category=career', key: 'search'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      search: action.payload.value,
      searchapi: action.payload.value
    })
  })

  it('should check radiobutton', () => {
    const initialState = {
      searchapi: 'random',
    }
    const action = {
      type: types.CHANGE_RADIO,
      payload: {value: 'random?category=celebrity', key: 'search'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      search: action.payload.value,
      searchapi: action.payload.value
    })
  })

  it('should check radiobutton', () => {
    const initialState = {
      searchapi: 'random',
    }
    const action = {
      type: types.CHANGE_RADIO,
      payload: {value: 'random?category=dev', key: 'search'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      search: action.payload.value,
      searchapi: action.payload.value
    })
  })


  it('should change search type', () => {
    const initialState = {
      searchType: 'random',
      textsearch: '',
      category: ''
    }
    const action = {
      type: types.SET_SEARCH_TYPE,
      payload: {type: 'random', searchType: 'searchType'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      searchType: action.payload.type,
      textsearch: '',
      category: ''
    })
  })

  it('should change search type', () => {
    const initialState = {
      searchType: 'random',
      textsearch: '',
      category: ''
    }
    const action = {
      type: types.SET_SEARCH_TYPE,
      payload: {type: 'categories', searchType: 'searchType'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      searchType: action.payload.type,
      textsearch: '',
      category: ''
    })
  })
  
  it('should change search type', () => {
    const initialState = {
      searchType: 'random',
      textsearch: '',
      category: ''
    }
    const action = {
      type: types.SET_SEARCH_TYPE,
      payload: {type: 'textsearch', searchType: 'searchType'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      searchType: action.payload.type,
      textsearch: '',
      category: ''
    })
  })

  it('should change selected category', () => {
    const initialState = {
      searchapi: 'random',
      search: 'random?category=',
      category: ''
    }
    const action = {
      type: types.SELECT_CATEGORY,
      payload: {value: 'animal', key: 'category'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      category: 'animal',
      searchapi: 'random?category=animal'
    })
  }) 
  
  it('should change selected category', () => {
    const initialState = {
      searchapi: 'random',
      search: 'random?category=',
      category: ''
    }
    const action = {
      type: types.SELECT_CATEGORY,
      payload: {value: 'career', key: 'category'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      category: 'career',
      searchapi: 'random?category=career'
    })
  }) 

  it('should change selected category', () => {
    const initialState = {
      searchapi: 'random',
      search: 'random?category=',
      category: ''
    }
    const action = {
      type: types.SELECT_CATEGORY,
      payload: {value: 'celebrity', key: 'category'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      category: 'celebrity',
      searchapi: 'random?category=celebrity'
    })
  }) 

  it('should change selected category', () => {
    const initialState = {
      searchapi: 'random',
      search: 'random?category=',
      category: ''
    }
    const action = {
      type: types.SELECT_CATEGORY,
      payload: {value: 'dev', key: 'category'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      category: 'dev',
      searchapi: 'random?category=dev'
    })
  }) 

  it('should change input value', () => {
    const initialState = {
      search: 'search?query=',
      searchapi: 'search?query=',
      textsearch: ''
    }
    const action = {
      type: types.CHANGE_INPUT,
      payload: {value: 'life', key: 'textsearch'}
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      textsearch: 'life',
      searchapi: 'search?query=life'
    })
  })
  
  it('should switch between pages', () => {
    const initialState = {
      currentPage: 1
    }
    const action = {
      type: types.SWITCH_PAGE,
      payload: 13
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      currentPage: 13
    })
  })

  it('should change index of a last joke', () => {
    const initialState = {
      currentPage: 7,
      jokesPerPage: 5,
      indexOfLastJoke: null
    }
    const action = {
      type: types.INDEX_OF_LAST_JOKE
    }
    expect(reducers.jokesReducer(initialState, action)).toMatchObject({
      indexOfLastJoke: 35
    })
  })
})