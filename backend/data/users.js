import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'isauravshing@gmail.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'user1',
    email: 'hisped.pug@gmail.com',
    password: bcrypt.hashSync('admin', 10),
  },
  {
    name: 'user2',
    email: '0126ec181020@oriental.ac.in',
    password: bcrypt.hashSync('admin', 10),
  },
]

export default users
