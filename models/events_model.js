var EventUser = require('./event_user_model.js');
var User = require('./users_model.js');
//_____________________________________________________Init & Config Sequelize__________________________________

const Sequelize = require("sequelize");
const sequelize = new Sequelize('millesime_admin', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
//_______________________________________________Declare table structure ______________________________________________

var Event = sequelize.define('event', {   

  title: {
    type: Sequelize.STRING,
  }  
}, {
  freezeTableName: true 
});

//___________________________________Establish relationships with other tables____________________

//Event.belongsTo(EventUser);

//Event.belongsToMany(User, { through: EventUser });
//________________________________________Create table_______________________________________________________________

Event.sync().then(function () {
  return Event.create({
    title: 'Event1'  
  });
}).then(c => {
    console.log("Created event", c.toJSON());
}).catch(e => console.error(e));

//_______________________________________________________________________________________________________________________

module.exports = Event;