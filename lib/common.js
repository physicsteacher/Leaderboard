corpsNames = function(){
  cn =  Corps.find().map(function(cn){ return cn.corps });
  console.log(cn)
  return cn;
};

AdminConfig = {
adminEmails: ['nlccmjmiller78@gmail.com'],
collections: {



    Divisions: {
      // collection options
      tableColumns: [
        { label: 'Name', name: 'name' },
        { label: 'Score', name: 'score' },
        { label: 'Corps', name: 'corps' }
      ],
    showEditColumn: true, // Set to false to hide the edit button. True by default.
    showDelColumn: true, // Set to false to hide the edit button. True by default.
    showWidget: true,
    color: 'red'

  },

  Corps: {
    // collection options
    tableColumns: [
      {label: 'Name', name: 'corps'}
    ],
  showEditColumn: true, // Set to false to hide the edit button. True by default.
  showDelColumn: true, // Set to false to hide the edit button. True by default.
  showWidget: true,
  color: 'green'

  },
},

userSchema: new SimpleSchema({
  'profile.corps':{
    type: String,
    allowedValues: corpsNames(),
    }
  })


};
