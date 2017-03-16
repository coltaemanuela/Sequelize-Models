var Event= require('./events_model.js');
var sequelize = require("../config/db");
var Sequelize = require("sequelize");
//_______________________________________________Declare table structure ______________________________________________

var User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING
  },
}, {
  freezeTableName: true
});

//___________________________________Establish relationships with other tables____________________

//  N Users - N Events (N-N)

//____________________________________________________________________________________________

User.sync().then(function () { //sync only creates table; cannot update them  //detele  force: true when in production
  return User.create({
    username: 'username',
    password: 'parola',
    email: 'email@gmail.com',

  });
}).then(c => {
    console.log("User Created", c.toJSON());
})
.catch(e => console.error(e));

//_______________________________________________________________________________________________________________________

module.exports = User;
