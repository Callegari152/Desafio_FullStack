import User from "../models/User.js";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export async function registerUser({ name, email, password }) {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("E-mail já cadastrado", 409);
  }

  const user = await User.create({ name, email, password });

  // não retorna a senha, mesmo com select:false no schema,
  // por segurança explicitamos de novo aqui
  return {
    id: user._id,
    name: user.name,
    email: user.email
  };
}

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError("E-mail ou senha inválidos", 401);
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new AppError("E-mail ou senha inválidos", 401);
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  };
}