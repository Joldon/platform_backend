// const User = require('../models/User');

// const getUsers = async (req, res, next) => {
//   try {
//     const users = await User.find();

//     res.json({
//       success: true,
//       msg: 'show some users',
//       data: users
//     })  
//   } catch(err) {
//     next(err)
//   }

// }

// const getUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;
    
//     const user = await User.findById(id);
//     res.json({
//       success: true,
//       msg: 'show selected user',
//       data: user
//     })
//   } catch(err) {
//     next(err)
//   }

// }

// const createUser = async (req, res, next) => {
//   try {
//       const { name, surname, age } = req.body;
//       const user = await User.create({ name, surname, age })

//       res.json({
//         success: true,
//         msg: 'new user created',
//         data: user
//       })
//     } catch(err) {
//       next(err)
//     }
  
// }

// const updateUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { name, surname, age } = req.body;

//     const user = await User.findByIdAndUpdate(id, { name, surname, age }, { new: true })

//     res.json({
//       success: true,
//       msg: `user with id ${id} updated`,
//       data: user
//     })
//   } catch(err) {
//     next(err)
//   }
// }
// // curl -d '{"name": "Magi", "surname": "Karp", "age": 5}' -H "Content-Type: application/json" -X PUT http://localhost:5000/users/  -> plus id of object

// const deleteUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndDelete(id);
//     res.json({
//       success: true,
//       msg: `user with id ${id} deleted`,
//       data: user
//     });
//   } catch(err) {
//     next(err)
//   }
// }
// // curl -X DELETE http://localhost:5000/users/ -> plus id

// module.exports = {
//   getUser,
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser
// }