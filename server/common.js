Meteor.publish('divisions', function(){
  return Divisions.find()
});

Meteor.publish('corps', function(){
  return Corps.find()
});


//Meteor Methods
Meteor.methods({
'givePoint': function(selectedDivision){
      Divisions.update(selectedDivision, {$inc: {score: 1}})

},

'takePoint': function(selectedDivision){

    Divisions.update(selectedDivision, {$inc: {score: -1}})

}
});
