// Aim:To create a new user using POST request

const router = require('express').Router();
//Import User Model here

//Create User
router.post('/', async (req, res) => {
  try {
    // Require username,email,password,age using body & save it in DB using save()
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
