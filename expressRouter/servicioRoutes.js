var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Serv = require('../models/Servicio.js');

/* GET ALL Servicios Completos*/
router.get('/show/completos', function(req, res, next) {
  // @jrodarte - Se define la condicion de que el campo 'nombre_e' exista en el registro
  Serv.find({'nombre_e' : { $exists : true}},function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET ALL Servicios Pendientes*/
router.get('/show/pendientes', function(req, res, next) {
  // @jrodarte - Se define la condicion de que el campo 'nombre_e' no exista en el registro
  Serv.find({'nombre_e': {$exists : false}},function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET todas las rutas distintas de los servicios*/
router.get('/show/distRutas', function(req, res, next){
  Serv.distinct('ruta',function(err, products){
    if(err) return next(err);
    res.json(products);
  })
});

/*GET servicios By ruta*/
router.get('/show/serviciosByRuta/:ruta', function(req, res, next) {
  Serv.find({$and: [{'ruta' : req.params.ruta},{'nombre_e' : { $exists : true}}]},function(err, products){
    if(err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Servicio BY ID */
router.get('/:id', function(req, res, next) {
  Serv.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Servicio */
router.post('/add', function(req, res, next) {
  Serv.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Servicio */
router.put('/:id', function(req, res, next) {
  Serv.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Servicio */
router.delete('/:id', function(req, res, next) {
  Serv.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
