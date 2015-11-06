Template.navbar.events({
  "click .btn-logout": function(){
    console.log("logout");
    Meteor.logout();
    Router.go('/login')
  }
});

Template.navbar.helpers({
  userEmail: function(){
    return Meteor.user().emails[0].address;
  }
});
