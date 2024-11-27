import { Request, Response } from "express";
import { getUserById, getUsers } from "./service";

// GET ALL USERS
export const getAllUsers = (req: Request, res: Response) => {
  try {
    const users = getUsers();
    res.status(200).json(users);
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// GET USER BY ID
export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const query = req.query;

  try {
    const user = getUserById(id, query);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// // Create a new user
// export const createNewUser = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const userData = req.body;
//   try {
//     const newUser = await createUser(userData);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Update a user
// export const updateUserData = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { userId } = req.params;
//   const updateData = req.body;
//   try {
//     const updatedUser = await updateUser(userId, updateData);
//     if (!updatedUser) {
//       res.status(404).json({ message: "User not found" });
//     } else {
//       res.status(200).json(updatedUser);
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Delete a user
// export const deleteUserById = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { userId } = req.params;
//   try {
//     const isDeleted = await deleteUser(userId);
//     if (!isDeleted) {
//       res.status(404).json({ message: "User not found" });
//     } else {
//       res.status(204).send();
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
