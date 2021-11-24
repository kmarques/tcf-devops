const UserController = require("./user");
const User = require("../models/User");

const findAllResult = [{}];
const findResult = {};

jest.mock("../models/User", () => ({
  findAll: jest.fn().mockResolvedValue(findAllResult),
  findByPk: jest.fn().mockResolvedValue(findResult),
  create: jest.fn().mockResolvedValue(findResult),
  destroy: jest.fn().mockResolvedValue(),
  update: jest.fn().mockResolvedValue([undefined, [findResult]]),
}));

describe("user test", () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
      sendStatus: jest.fn(),
    };
    req = {
      params: {
        id: 1,
      },
      body: {},
      query: {},
    };
  });

  it("should return users", async () => {
    await UserController.getUsers(req, res);

    expect(User.findAll).toHaveBeenCalledWith({ where: req.query });
    expect(res.json).toHaveBeenCalledWith(findAllResult);
  });

  it("should return a user", async () => {
    await UserController.getUser(req, res);

    expect(User.findByPk).toHaveBeenCalledWith(req.params.id);
    expect(res.json).toHaveBeenCalledWith(findResult);
  });

  it("should delete a user", async () => {
    await UserController.delete(req, res);

    expect(User.destroy).toHaveBeenCalledWith({ where: { id: req.params.id } });
    expect(res.sendStatus).toHaveBeenCalledWith(204);
  });

  it("should create a user", async () => {
    await UserController.post(req, res);

    expect(User.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.status(201).json).toHaveBeenCalledWith(findResult);
  });

  it("should update a user", async () => {
    await UserController.put(req, res);

    expect(User.update).toHaveBeenCalledWith(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    expect(res.json).toHaveBeenCalledWith(findResult);
  });
});
