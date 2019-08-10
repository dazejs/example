
const {
  Controller, Http,
} = require('@dazejs/framework');

@Controller('users')
class Hello {
  /**
   * ==========================================
   * Example for Api Resource (collection)
   * ==========================================
   * @uri GET /users
   */
  @Http.Get()
  index() {
    const users = [
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
    // ./resource/user.js Resource declaration
    return this.resource('user').collection(users);
  }

  /**
   * ==========================================
   * Example for Api Resource (item)
   * ==========================================
   * @uri GET /users/:id
   */
  @Http.Get(':id')
  show(id) {
    const user = {
      id,
      name: 'Xiaoming',
      mobile: '13777777777',
    };
    // ./resource/user.js Resource declaration
    return this.resource('user').item(user);
  }
}

module.exports = Hello;
