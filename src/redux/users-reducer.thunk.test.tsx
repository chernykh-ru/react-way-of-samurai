import {follow, unfollow, actions} from './users-reducer'
import { usersAPI} from '../api/users-api';
import {BasicResponseType, ResultCodeEnum} from '../api/api'

jest.mock('../api/users-api')//имитация API
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>//типизация mock

const dispatchMock = jest.fn()//create custom fakeDispatch fn
const getStateMock = jest.fn()//create custom getState fn

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  // usersAPIMock.follow.mockClear()
  // usersAPIMock.unfollow.mockClear()
})

const result: BasicResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {}
}

// usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
// usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

// usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
//apiMethod: (userId: number | null) => Promise<BasicResponseType> in reducer

test ('thunk follow success', async() => {
  const thunk = follow(1)
  // const dispatchMock = jest.fn()//create custom fakeDispatch fn
  // const getStateMock = jest.fn()//create custom getState fn

  usersAPIMock.follow.mockReturnValue(Promise.resolve(result))

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))

})

test ('thunk unfollow success', async() => {
  const thunk = unfollow(1)
  // const dispatchMock = jest.fn()//create custom fakeDispatch fn
  // const getStateMock = jest.fn()//create custom getState fn

  usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))

})

