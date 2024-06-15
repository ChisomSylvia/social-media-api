import UserService from '../services/user.service.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController {

  async signUp(req, res) {
    const userData = req.body;

    const salt = await bcrypt.genSalt(15);
    const encryptedPassword = await bcrypt.hash(userData.password, salt);

    const newUser = await UserService.createUser({
      _id: userData._id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      password: encryptedPassword
    });

    const token = jwt.sign({
      _id: newUser._id,
      name: newUser.name,
      username: newUser.username,
      email: newUser.email
    },
      'secret',
      {expiresIn: 7 * 24 * 60 * 60}
  );

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(201).send ({
      success: true,
      message: 'User successfully registered',
      newUser
    })
  }

  async login(req, res) {
    const userData = req.body;

    const user = await UserService.findUser({
      username: userData.username
    });

    if (!user) {
      return res.status(400).send({
        success: false,
        message: 'invalid username'
      });
    }

    const isValidPassword = await bcrypt.compare(userData.password, user.password);
    if (!isValidPassword) {
      return res.status(400).send({
        success: false,
        message: 'invalid password'
      })
    }
    
    const token = jwt.sign({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email
    },
      'secret',
      {expiresIn: 7 * 24 * 60 * 60}
  );

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).send({
      success: true,
      message: 'User successfully logged in',
      user
    })
  }

  async logout(req, res) {
    
    res.cookie('token', '', {
      httpOnly: true,
      maxAge: new Date(0)
    });

    return res.status(200).send({
      success: true,
      message: 'User successfully logged out',
    });
  }
}

export default new AuthController();