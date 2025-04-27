import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwtUtils";
import { insertUser, getUser } from "../../models/userModel";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
 
  const user = { name, email, password: hashedPassword };

  const result = await insertUser(user);

  return { message: "User registered successfully", result };
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await getUser(email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateToken({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  return { token, name: user.name, email: user.email };
};
