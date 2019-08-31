
const { Resource } = require('@dazejs/framework');

@Resource('user')
class User {
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
