
  db.auth('root', 'example');

  db = db.getSiblingDB('akela');

  db.createUser({
    user: 'api-user',
    pwd: 'api-password',
    roles: [ { role: 'root', db: 'admin', } ]});
