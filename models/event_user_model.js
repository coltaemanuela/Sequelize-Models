var User = require('./users_model.js');
var Event= require('./events_model.js');
//_____________________________________________________Initialize & Config Sequelize__________________________________
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

var EventUser = sequelize.define('eventuser', {    

 reservationConfirmation:{
    type:Sequelize.BOOLEAN,
 },
 attendance:{
    type:Sequelize.BOOLEAN
 },
},{
  freezeTableName: true 
});

//___________________________________Establish relationships with other tables_______________________________________

//EventUser.hasMany(User, {foreignKey:id});
//EventUser.hasMany(Event, {foreignKey: eventid});

EventUser.belongsTo(Event);
EventUser.belongsTo(User);
//________________________________________Create table_______________________________________________________________

EventUser.sync(  ).then(function () {
  return EventUser.create({
    reservationConfirmation: true,
    attendance: true   
  });
}).then(c => {
    console.log("Created", c.toJSON());
}).catch(e => console.error(e));

//_______________________________________________________________________________________________________________________

module.exports = EventUser;