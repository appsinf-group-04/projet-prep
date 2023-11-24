const Incident = require('./models/incident');
const User = require('./models/user');

/**
  * @param {string} title
  * @param {string} description
  * @param {string} address
  * @param {string} username
  *
  * @returns {Promise<void>}
*/
async function createIncident(title, description, address, username) {
  const incident = new Incident({
    title: title,
    description: description,
    address: address,
    name: username
  })

  await incident.save()
}

/**
  * @returns {Promise<Incident[]>}
*/
async function getIncidents() {
  const incidents = await Incident.find({})
    .sort({ date: -1 })
    .limit(20);

  return incidents;
}

/**
  * @param {string} query
  *
  * @returns {Promise<Incident[]>}
*/
async function searchIncident(query) {
  const incidents = await Incident.find({
    $or: [
      { title: query },
      { description: query },
      { address: query },
      { name: query },
    ]
  })
    .sort({ date: -1 })
    .limit(20);

  return incidents;
}

/**
  * @param {string} username
  *
  * @returns {Promise<boolean>}
*/
async function accountExists(username) {
  const user = await User.findOne({ username: username });

  return user ? true : false;
}

/**
  * @param {string} username
  * @param {string} password
  * @param {string} name
  * @param {string} email
*/
async function createAccount(username, password, name, email) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  const user = new User({
    username: username,
    password: hashedPassword,
    name: name,
    email: email,
  });

  await user.save();
}

module.exports = {
  createIncident,
  getIncidents,
  searchIncident,
  accountExists,
  createAccount,
}
