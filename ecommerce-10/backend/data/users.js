import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'natalie',
    email: 'natalie@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users