let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCounter: 15 },
        { id: 2, message: 'My first react post', likeCounter: 25 },
        { id: 3, message: 'Yo', likeCounter: 5 },
      ],
      newPostText: '',
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
        {
          id: 1,
          name: 'Andrew',
          avatar: 'https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg',
        },
        {
          id: 2,
          name: 'Dmitry',
          avatar: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg',
        },
        {
          id: 3,
          name: 'Sasha',
          avatar: 'https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png',
        },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Viktor' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it?' },
        { id: 3, message: 'I am fine' },
      ],
      newMessageText: '',
      // messagesFriend: [
      //   { id: 1, message: 'Yo-yo-yo' },
      //   { id: 2, message: 'Yo-yo' },
      //   { id: 3, message: 'Yo' },
      // ],
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // addPost() {
  //   let newPost = {
  //     id: 4,
  //     message: this._state.profilePage.newPostText, //берем значение из стейта
  //     likeCounter: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = ''; //переносим логику зануление из тупого компонента в функцию стейта
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText, //берем значение из стейта
        likeCounter: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''; //переносим логику зануление из тупого компонента в функцию стейта
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
  // dispatch(action) {
  //   if (action.type === 'ADD-POST') {
  //     this._addPost();
  //   } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
  //     this._updateNewPostText(action.newText);
  //   }
  // },

  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText, //берем значение из стейта
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = ''; //переносим логику зануление из тупого компонента в функцию стейта
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
};

export default store;
