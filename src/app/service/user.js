const { Service } = require('@dazejs/framework');

@Service('user')
class User {
  /**
   * ===============================================
   * Example for User Service
   * ===============================================
   * Get Users list data
   */
  getItems() {
    const mockUsers = [
      {
        id: 1,
        name: 'Xiaoming',
        mobile: '13777777777',
      },
      {
        id: 2,
        name: 'lily',
        mobile: '13777777777',
        gender: 'F',
      },
    ];
    return mockUsers;
  }

  /**
   * ===============================================
   * Example for User Service
   * ===============================================
   * Get User data by id
   */
  getItemById(id) {
    const mockUser = {
      id,
      name: 'Xiaoming',
      mobile: '1388888888',
    };
    return mockUser;
  }
}

module.exports = User;
