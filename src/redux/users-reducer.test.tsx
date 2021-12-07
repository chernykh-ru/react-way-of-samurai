import usersReducer, {InitialStateType, actions} from './users-reducer'

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [{
      name: 'petya 0',
      id: 0,
      uniqueUrlName:null,
      photos: {small: null,
        large: null,},
      status: 'status 0',
      followed: false,
    },
    {
      name: 'petya 1',
      id: 1,
      uniqueUrlName:null,
      photos: {small: null,
        large: null,},
      status: 'status 1',
      followed: false,
    },
    {
      name: 'petya 2',
      id: 2,
      uniqueUrlName:null,
      photos: {small: null,
        large: null,},
      status: 'status 2',
      followed: true,
    },
    {
      name: 'petya 3',
      id: 3,
      uniqueUrlName:null,
      photos: {small: null,
        large: null,},
      status: 'status 3',
      followed: true,
    }],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
  }
})

test ('follow success', () => {

  const newState =  usersReducer(state, actions.followSuccess(1))

  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[1].followed).toBeTruthy()
})

test ('unfollow success', () => {

  const newState =  usersReducer(state, actions.unfollowSuccess(3))

  expect(newState.users[2].followed).toBeTruthy()
  expect(newState.users[3].followed).toBeFalsy()
})