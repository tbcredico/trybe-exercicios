const { createToken } = require('../auth/authfunctions');
const { UserService } = require('../services');

const getUsers = async (_req, res) => {
  try {
    const users = await UserService.getUsers();

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserService.createUser({ username, password });

    if (!user) throw Error;

    const { password: _password, ...userWithoutPassword } = user.dataValues;

    const payload = { data: userWithoutPassword };

    const token = createToken(payload);
    res
      .status(201)
      .json({ message: 'Novo usuário criado com sucesso', token });
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao salvar o usuário no banco',
      error: err.message,
    });
  }
};

module.exports = { getUsers, createUser };
