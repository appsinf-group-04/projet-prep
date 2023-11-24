const mongoose = require('mongoose');

const Incident = require('../src/models/incident');
const User = require('../src/models/user');
const database = require('../src/database');

describe("Compte utilisateur", () => {
  beforeAll(async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/projet-prep")
      .catch((err) => console.log(err));
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  test("Si le nom d'utilisateur n'existe pas, alors l'utilisateur peut être créé", async () => {
    let name = "John Doe";
    let exists = await database.accountExists(name);

    expect(exists).toBe(false);

    if (!exists) {
      await database.createAccount(name, "password", name, "email");
    }
  });

  test('Si le nom d\'utilisateur existe déjà, alors l\'utilisateur ne peut pas être créé', async () => {
    let name = "John Doe";
    await database.createAccount(name, "password", name, "email");

    const exists = await database.accountExists(name);
    expect(exists).toBe(true);
  });
});

describe("Incidents", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/projet-prep")
      .catch((err) => console.log(err));
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  beforeEach(async () => {
    await Incident.deleteMany({});
  });

  test("Si on ajoute un incident, alors il est ajouté dans la base de données", async () => {
    let incidents = await database.getIncidents();

    expect(incidents.length).toBe(0);

    await database.createIncident("Titre", "Description", "Adresse", "John Doe")

    incidents = await database.getIncidents();

    expect(incidents.length).toBe(1);
  });

  test("Si on cherche un élément qui existe, on le trouve", async () => {
    await database.createIncident("Titre", "Description", "Adresse", "John Doe")

    let found = await database.searchIncident("Titre");
    expect(found).not.toBe(null);

    found = await database.searchIncident("Description");
    expect(found).not.toBe(null);

    found = await database.searchIncident("Adresse");
    expect(found).not.toBe(null);

    found = await database.searchIncident("John Doe");
    expect(found).not.toBe(null);
  });

  test("Si on cherche un élément qui n'existe pas, on ne le trouve pas", async () => {
    let found = await database.searchIncident("Titre");

    // found should be []
    expect(found).toStrictEqual([]);

  });
});
