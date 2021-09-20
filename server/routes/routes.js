const PetController = require('../controllers/controller');

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pet/:id', PetController.findOneSinglePet);
    app.put('/api/pet/:id', PetController.updateExistingPet);
    app.post('/api/pet', PetController.createNewPet);
    app.delete('/api/pet/:id', PetController.deleteAnExistingPet);
}
