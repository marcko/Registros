/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:'string',
      index:true,
      required:true
    },
    lastname:{
      type:'string',
      index:true,
      required:true
    },
    mail:{
      type:'string',
      index:true,
      required:true,
      unique:true
    },
    location:{
      type:'string',
      index:true,
      required:true
    },
    telephone:{
      type:'float',
      index:true,
      required:true
    }
  }
};

