// const posts = [
//   {id: 1, message: 'Hi, how are you?', likeCounter: 15},
//   {id: 2, message: 'My first react post', likeCounter: 25},
//   {id: 3, message: 'Yo', likeCounter: 5},
// ]

// const dialogsData = [
//   {id: 1, name: 'Andrew'},
//   {id: 2, name: 'Dmitry'},
//   {id: 3, name: 'Sasha'},
//   {id: 4, name: 'Sveta'},
//   {id: 5, name: 'Valera'},
//   {id: 6, name: 'Viktor'},
//   {id: 7, name: 'Pasha'},
// ]

// const messages = [
//   {id: 1, message: 'Hi'},
//   {id: 2, message: 'How is your it?'},
//   {id: 3, message: 'Yo'},
//   {id: 4, message: 'Yo-yo-yo'},
//   {id: 5, message: 'Yo-yo'},
//   {id: 6, message: 'Yo'}
// ]

const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likeCounter: 15},
      {id: 2, message: 'My first react post', likeCounter: 25},
      {id: 3, message: 'Yo', likeCounter: 5},
    ]
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Andrew'},
      {id: 2, name: 'Dmitry'},
      {id: 3, name: 'Sasha'},
      {id: 4, name: 'Sveta'},
      {id: 5, name: 'Valera'},
      {id: 6, name: 'Viktor'},
      {id: 7, name: 'Pasha'},
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it?'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'Yo-yo-yo'},
      {id: 5, message: 'Yo-yo'},
      {id: 6, message: 'Yo'}
    ]
  }
}

export default state