const request = require("supertest");
const app = require("../../index");
const { sequelize } = require("../../models/User");

const bodyObject = {
  email: "tesst@test.com",
  password: "test",
  lastname: "test",
  firstname: "test",
};

async function createUser() {
  const res = await request(app)
    .post("/users")
    .set("Content-type", "application/json")
    .send(bodyObject);

  return res.body;
}

describe("Post Endpoints", () => {
  beforeEach(async () => {
    try {
      await sequelize.query('DELETE FROM "Users"');
    } catch (error) {
      if (error.message !== 'relation "Users" does not exist') throw error;
    }
  });
  afterAll(async () => {
    await sequelize.close();
  });
  it("should get users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it("should create users", async () => {
    const res = await request(app)
      .post("/users")
      .set("Content-type", "application/json")
      .send(bodyObject);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(expect.objectContaining(bodyObject));
  });

  it("should return one user", async () => {
    const user = await createUser();

    const res = await request(app).get(`/users/${user.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(user);
  });

  it("should update one user", async () => {
    const user = await createUser();

    const res = await request(app)
      .put(`/users/${user.id}`)
      .set("Content-type", "application/json")
      .send({
        firstname: "foo",
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        firstname: "foo",
      })
    );
  });

  it("should delete one user", async () => {
    const user = await createUser();

    const res = await request(app).delete(`/users/${user.id}`);
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
  });
});
