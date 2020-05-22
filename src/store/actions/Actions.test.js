import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './Actions';
import * as types from './Actions';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { api } from '../../utils' 
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('getJoke', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should return results for search query', () => {
    
    const expectedPayload = {
      categories: ["explicit"],
      created_at: "2020-01-05 13:42:18.823766",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "t-fGDoDxRx6Njpy88Mi8uA",
      updated_at: "2020-01-05 13:42:18.823766",
      url: "https://api.chucknorris.io/jokes/t-fGDoDxRx6Njpy88Mi8uA",
      value: "If you ever find yourself screaming Chuck Norris' name during sex, then you must send a cheque of your life savings to him and immediately commit suicide."
    }
    fetchMock.getOnce(`${api}/search?query=life`, {
      body: {
        result: [expectedPayload]
      },
      headers: {'content-type': 'application/json'}
    })
    const expectedActions = [{
      type: actions.DATA_LOADED,
      payload: [expectedPayload]
    }]
    const store = mockStore({});
    return store.dispatch(actions.getJoke('search?query=life')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should return results for search query', () => {
    const expectedPayload = {
      "categories":["animal"],
      "created_at":"2020-01-05 13:42:19.104863",
      "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "id":"30lywvzfsowzxkiiy2voyw","updated_at":"2020-01-05 13:42:19.104863",
      "url":"https://api.chucknorris.io/jokes/30lywvzfsowzxkiiy2voyw",
      "value":"Chuck Norris does not own a house. He walks into random houses and people move."
    }
    fetchMock.getOnce(`${api}/random`, {
      body: expectedPayload,
      headers: {'content-type': 'application/json'}
    })
    const expectedActions = [{
      type: actions.DATA_LOADED,
      payload: [expectedPayload]
    }]
    const store = mockStore({});
    return store.dispatch(actions.getJoke('random')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should return results for search query', () => {
    const expectedPayload = {
      categories: ["career"],
      created_at: "2020-01-05 13:42:19.104863",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "3y7vnqsvtvuvvmhtuqjuma",
      updated_at: "2020-01-05 13:42:19.104863",
      url: "https://api.chucknorris.io/jokes/3y7vnqsvtvuvvmhtuqjuma",
      value: "Chuck Norris' first job was as a paperboy. There were no survivors."
    }
    fetchMock.getOnce(`${api}/random?category=career`, {
      body: expectedPayload,
      headers: {'content-type': 'application/json'}
    })
    const expectedActions = [{
      type: actions.DATA_LOADED,
      payload: [expectedPayload]
    }]
    const store = mockStore({});
    return store.dispatch(actions.getJoke('random?category=career')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should return results for search query', () => {
    const expectedPayload = {
      categories: ["animal"],
      created_at: "2020-01-05 13:42:19.104863",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "zjuwql5ns-mklqumqezlhg",
      updated_at: "2020-01-05 13:42:19.104863",
      url: "https://api.chucknorris.io/jokes/zjuwql5ns-mklqumqezlhg",
      value: "Chuck Norris can skeletize a cow in two minutes."
    };
    fetchMock.getOnce(`${api}/random?category=animal`, {
      body: expectedPayload,
      headers: {'content-type': 'applications/json'}
    })
    const expectedActions = [{
      type: actions.DATA_LOADED,
      payload: [expectedPayload]
    }]
    const store = mockStore({});
    return store.dispatch(actions.getJoke('random?category=animal')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should return results for search query', () => {
    const expectedPayload = {
      categories: ["celebrity"],
      created_at: "2020-01-05 13:42:29.855523",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "l7QlUREJQzOIJVB88DY9jg",
      updated_at: "2020-01-05 13:42:29.855523",
      url: "https://api.chucknorris.io/jokes/l7QlUREJQzOIJVB88DY9jg",
      value: "Chuck Norris was at the X-games getting ready for competition when he got a message from Paris Hilton saying that she had sent him a friend request on MySpace. An infuriated Chuck Norris logged on to MySpace using his skateboard and rejected the request immediately."
    };
    fetchMock.getOnce(`${api}/random?category=celebrity`, {
      body: expectedPayload,
      headers: {'content-type': 'applications/json'}
    })
    const expectedActions = [{
      type: actions.DATA_LOADED,
      payload: [expectedPayload]
    }]
    const store = mockStore({});
    return store.dispatch(actions.getJoke('random?category=celebrity')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should return results for search query', () => {
    const expectedPayload = {
      categories: ["dev"],
      created_at: "2020-01-05 13:42:19.104863",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "7ver3y48qqsfktpelir7ua",
      updated_at: "2020-01-05 13:42:19.104863",
      url: "https://api.chucknorris.io/jokes/7ver3y48qqsfktpelir7ua",
      value: "Don't worry about tests, Chuck Norris's test cases cover your code too."
    };
    fetchMock.getOnce(`${api}/random?category=dev`, {
      body: expectedPayload,
      headers: {'content-type': 'applications/json'}
    });
    const expectedActions = [{
      type: actions.DATA_LOADED,
      payload: [expectedPayload]
    }];
    const store = mockStore({});
    return store.dispatch(actions.getJoke('random?category=dev')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})