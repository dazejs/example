
const {
  Controller, Route, Http, useService,
} = require('@dazejs/framework');

@Route('users')
class Hello extends Controller {
  // Example for Service
  // ./service/user.js Service declaration
  @useService('user') userService;

  /**
   * Example for users list api
   * @uri GET /users
   */
  @Http.Get()
  index() {
    // Example for Service
    // ./service/user.js Service declaration
    const users = this.userService.getItems();
    // Example for Api Resource (collection)
    // ./resource/user.js Resource declaration
    return this.resource('user').collection(users);
  }

  /**
   *  Example for user data api
   * @uri GET /users/:id
   */
  @Http.Get(':id')
  show(id) {
    // Example for Service 2
    // ./service/user.js Service declaration
    const user = this.service('user').getItemById(id);
    // Example for Api Resource(item)
    // ./resource/user.js Resource declaration
    return this.resource('user').item(user);
  }
}

module.exports = Hello;
