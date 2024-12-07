const router = require('express').Router()
const User = require('../models/user')
// solved error of above line; dont use { User } like this and the path should corrent to the user.js of Models

// SIGN IN API
router.post('/sign-in', async (req, res) => {
  try {
    const { username } = req.body
    const { email } = req.body
    const existingUser = await User.findOne({ username: username })
    const existingEmail = await User.findOne({ email: email })

    // new user account conditions to pass
    if (existingUser) {
      return res.status(400).json({ message: 'username already exists!' })
    } else if (username.length < 4) {
      return res
        .status(400)
        .json({ message: 'username should have atleast 4 characters' })
    }

    if (existingEmail) {
      return res.status(400).json({ message: 'email already exists!' })
    }

    // if all of above conditions passed, create new user!
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    await newUser.save()
    return res.status(200).json({ message: 'Sign-In Successful 🎉' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Internal Server Error!' })
  }
})

module.exports = router
