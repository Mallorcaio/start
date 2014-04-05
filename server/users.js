Meteor.publish("users", function() {
  return Meteor.users.find().fetch();
});

Meteor.publish("singleUser", function(id) {
  return Meteor.users.find({_id: id}).fetch();
});