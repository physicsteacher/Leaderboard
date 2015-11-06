

Schemas = {};

Corps = new Mongo.Collection('corps');

Schemas.Corps = new SimpleSchema({
  corps: {
    type: String,
    max:20
  }
});

Corps.attachSchema(Schemas.Corps);

corpsNames = function(){
  cn =  Corps.find().map(function(cn){ return cn.corps });
  console.log(cn);
  return cn;
};


Divisions = new Mongo.Collection('division');

Schemas.Divisions = new SimpleSchema({
  name: {
    type: String,
    max: 20
  },

  score: {
    type: Number,

  },

  corps: {
    type: String,
    allowedValues: corpsNames()
  }

});

Divisions.attachSchema(Schemas.Divisions);
