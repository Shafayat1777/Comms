import { getAllUsers, getUser } from "../../models/userModel";

// GET ALL USERS
export const getUsers = async () => {
  const users = await getAllUsers();
  
  return users;
};

// GET USER BY ID
export const getUserById = async (
  email: string,
  query?: {
    sort?: string;
    filter?: string;
  }
) => {
  const users = await getUser(email);

  return users;
};