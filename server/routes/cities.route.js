const router = require('express').Router();
const { City } = require('../db/models');

router.route('/')
  .get((req, res) => {
    City.findAll()
      .then((allCities) => res.json(allCities))
      .catch((error) => res.status(500).json(error));
  })
  .post((req, res) => {
    City.create(req.body)
      .then((newDog) => res.status(201).json(newDog))
      .catch((error) => res.status(500).json(error));
  });

router.route('/:id')
  .put((req, res) => {
    const { id } = req.params;

    City.update(req.body, { where: { id }, returning: true })
      .then((updatedCity) => res.json(updatedCity))
      .catch((error) => res.status(500).json(error));
  })
  .delete((req, res) => {
    const { id } = req.params;
    City.destroy({ where: { id } })
      .then((deletedCity) => (deletedCity ? res.json(id) : res.status(404).json(deletedCity)))
      .catch((error) => res.status(500).json(error));
  });

module.exports = router;
