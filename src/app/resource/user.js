
const { Resource, Component } = require('@dazejs/framework');

@Component('user')
class User extends Resource {
  genderText = {
    M: 'Male',
    F: 'Female',
  }

  resolve(data) {
    return {
      id: Number(data.id),
      name: data.name,
      mobile: data.mobile,
      gender: this.genderText[data.gender] || 'Unknow',
    };
  }
}

module.exports = User;
