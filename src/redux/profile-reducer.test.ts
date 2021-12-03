import profileReducer, { actions } from './profile-reducer';
import {PostType, ProfileType} from '../types/types'


// import { render, screen } from '@testing-library/react';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCounter: 15 },
    { id: 2, message: 'My first react post', likeCounter: 25 },
    { id: 3, message: 'Yo', likeCounter: 5 },
  ] as PostType[],
  newPostText: '' as string | null,
  profile: null as unknown as ProfileType,
  status: '' as string | null,
};

it('length of posts should be incremented', () => {
  //1. test data
  let action = actions.addPostActionCreator('chernykh.ru');
  //2. action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.posts.length).toBe(4);
});

it('the integrity of the text is preserved', () => {
  //1. test data
  let action = actions.addPostActionCreator('chernykh.ru');
  //2. action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.posts[3].message).toBe('chernykh.ru');
});

it('length of posts after deleting should be decremented', () => {
  //1. test data
  let action = actions.deletePost(1);
  //2. action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.posts.length).toBe(2);
});

it(`length of posts after deleting shouldn't be decremented if id incorrect`, () => {
  //1. test data
  let action = actions.deletePost(1000);
  //2. action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.posts.length).toBe(3);
});
