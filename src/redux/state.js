const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likeCounter: 15},
      {id: 2, message: 'My first react post', likeCounter: 25},
      {id: 3, message: 'Yo', likeCounter: 5},
    ]
  },
  dialogsPage: {
    // avatar: [
    //   {id: 1, avatar: 'https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg'},
    //   {id: 2, avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
    //   {id: 3, avatar: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png'},
    //   // {id: 4, name: 'Sveta'},
    //   // {id: 5, name: 'Valera'},
    //   // {id: 6, name: 'Viktor'}
    // ],
    dialogsData: [
      {id: 1, name: 'Andrew', avatar: 'https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg'},
      {id: 2, name: 'Dmitry', avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
      {id: 3, name: 'Sasha', avatar: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png'},
      {id: 4, name: 'Sveta'},
      {id: 5, name: 'Valera'},
      {id: 6, name: 'Viktor'},
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your it?'},
      {id: 3, message: 'I am fine'},
    ],
    messagesFriend: [
      {id: 1, message: 'Yo-yo-yo'},
      {id: 2, message: 'Yo-yo'},
      {id: 3, message: 'Yo'}
    ]
  },
  sidebar: {

  }
}

export let addPost = (postMessage) => {
  debugger
  let newPost = {
    id: 4,
    message: postMessage,
    likeCounter: 0
  }
  state.profilePage.posts.push(newPost)
}

export default state