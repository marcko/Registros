/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add:function(req, res){
    User.create(req.body,function(err, data){
      if(err) return console.log(err);
      console.log(data);
      return res.location('/crearusuario');
    });
  },
  show:function(req, res){
    User.find().exec(function(err,data){
      if(err) console.log(err);
      return res.view('mostrarusuario',{data:data});
    });
  }
};

