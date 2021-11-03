// import React from 'react';
// import axios from 'axios';
// import Users from './Users';

// class UsersAPIComponent extends React.Component {
//   // debugger;
//   // constructor(props) {
//   //   super(props);
//   // } //если кроме конструктора(супер) ничего нет, можно не писать

//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
//       )
//       .then((res) => {
//         this.props.setUsers(res.data.items); //получаем user из response(ответ) data(данные) items(объект с юзерами) и диспачим setUsers
//         this.props.setTotalUsersCount(res.data.totalCount);
//       });
//   }

//   onPageChanged = (currentPage) => {
//     this.props.setCurrentPage(currentPage);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
//       )
//       .then((res) => {
//         this.props.setUsers(res.data.items);
//       });
//   };

//   render() {
//     return (
//       <Users
//         totalUsersCount={this.props.totalUsersCount}
//         pageSize={this.props.pageSize}
//         currentPage={this.props.currentPage}
//         users={this.props.users}
//         onPageChanged={this.onPageChanged}
//         follow={this.props.follow}
//         unfollow={this.props.unfollow}
//       />
//     );
//   }
// }

// export default UsersAPIComponent;
