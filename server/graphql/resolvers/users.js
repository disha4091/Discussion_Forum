const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const { SECRET_KEY } = require('../../config');
const {
  validateRegisterInput,
  validateLoginInput,
  validateUpdateInput
} = require('../../util/validators');

const User = require('../../models/User');


function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      bio: user.bio 
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}

module.exports = {
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    async register(
      _,
      {
        registerInput: { username, email, password, confirmPassword, bio }
      }
    ) {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword,
        bio
      );
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      // TODO: Make sure user doesnt already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is taken'
          }
        });
      }
      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        bio,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      };
    },
    async updateBio(_,{username,newBio}){
      const filter = { username: username };
      const update = { bio: newBio };
      const { errors, valid } = validateUpdateInput(username, newBio);
      const user = await User.findOne(filter);
      if(errors.username){
        throw new UserInputError('Username empty', { errors });
      }
      if(errors.newBio){
        throw new UserInputError('Bio empty', { errors });
      }
      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }
      let doc = await User.findOneAndUpdate(filter, update);
      doc.username;
      doc.bio; // undefined

      doc = await User.findOne(filter);
      doc.bio; 
     
      return {
        ...doc._doc,
        id: doc._id,
      };
    }
  }
};