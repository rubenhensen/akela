db.auth('admin-user', 'admin-password');

// db = db.getSiblingDB('test-database');

db.createUser({
  user: process.env.API_USERNAME,
  pwd: process.env.API_PASSWORD,
  roles: [
    {
      role: 'root',
      db: 'akela',
    },
  ],
});