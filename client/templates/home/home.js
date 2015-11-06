Meteor.subscribe('theDivisions');
Meteor.subscribe('theCorps');

Template.home.helpers({
//original
 //'Divisions': function(){
   //var currentUserId = Meteor.userId();
   //return Divisions.find({createdBy: currentUserId}, {sort: {score: -1, name: 1}});
 //},
'Divisions': function(){
    var currentUserCorps = Meteor.user().profile.corps;

    return Divisions.find({corps: currentUserCorps}, {sort: {score: -1, name: 1}});

},

'Divisions2': function(){
  var selectedCorps = Session.get('selectedCorps')
    return Divisions.find({corps: selectedCorps},{sort: {score: -1, name: 1}});

},

'Corps': function(){

    return Corps.find({});

},


 'selectedClass': function(){

   var divisionID = this._id;
   var selectedDivision = Session.get('selectedDivision')
   if(divisionID == selectedDivision){
     return "active"

   }

 },

 'showSelected': function(){
   var selectedDivision = Session.get('selectedDivision');
   return Divisions.findOne(selectedDivision)
 }

 });



 Template.home.events({

   'click .list-group-item': function(){
     Session.set('selectedDivision', this._id);
     var selectedDivision = Session.get('selectedDivision');

   },

   'click .btn-success': function(){
     var selectedDivision = Session.get('selectedDivision');
     Meteor.call('givePoint', selectedDivision)
   },
   'click .btn-danger': function(){
     var selectedDivision = Session.get('selectedDivision');
     Meteor.call('takePoint', selectedDivision)
   },
   'click .dropdown-menu': function(e){

     var selectedCorps = $(e.target).text();
     var selectedCorps = Session.set('selectedCorps', selectedCorps);
    return selectedCorps
   },


 });
