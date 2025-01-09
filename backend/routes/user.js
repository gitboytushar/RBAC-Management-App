const router = require('express').Router()
const User = require('../models/user')
// solved error of above line; dont use { User } like this and the path should corrent to the user.js of Models
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// SignIn API
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

    // ------ if all of above conditions passed, create new user -------

    // getting the pasword and bcrypt it for security
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    // create new user with the data
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })
    await newUser.save()
    return res.status(200).json({ message: 'Sign-In Successful 🎉' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Internal Server Error!' })
  }
})

// Login Api
router.get('/log-in', async (req, res) => {
  const { username, password } = req.body
  const existingUser = await User.findOne({ username: username })

  // when user trying to login without having an account
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: 'username OR password is Incorrect' })
  }

  // comparing previously-stored and currently-input passwords, Note: how to generate web token
  bcrypt.compare(password, existingUser.password, (err, data) => {
    if (data) {
      const authClaims = [
        { name: username },
        { jti: jwt.sign({}, 'tusharvermaTM') }
      ]
      const token = jwt.sign({ authClaims }, 'tusharvermaTM', {
        expiresIn: '2d'
      })
      return res.status(200).json({ id: existingUser._id, token: token })
    } else {
      return res.status(400).json({ message: 'Invalid Credentials' })
    }
  })
})

module.exports = router
