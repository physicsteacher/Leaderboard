
Schemas = {};

Corps = new Mongo.Collection('corps');

Schemas.Corps = new SimpleSchema({
  corps: {
    type: String,
    max:20
  }
});

Corps.attachSchema(Schemas.Corps);



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
    
  }

});

Divisions.attachSchema(Schemas.Divisions);
