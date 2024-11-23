// GET ALL USERS
export const getUsers = () => {
  // Implement logic to fetch all users
  return [
    {
      id: "1",
      name: "John Doe",
    },
    {
      id: "2",
      name: "Jane Doe",
    },
  ];
};

// GET USER BY ID
export const getUserById = (
  userId: string,
  query?: {
    sort?: string;
    filter?: string;
  }
) => {
  // Implement logic to fetch user by ID

  return {
    id: userId,
    name: "John Doe",
    query,
  };
};

// export const createUser = async (userData: Partial<User>): Promise<User> => {
//   // Implement logic to create a new user
//   const user = new User(userData);
//   return await user.save();
// };

// export const updateUser = async (
//   userId: string,
//   updateData: Partial<User>
// ): Promise<User | null> => {
//   // Implement logic to update user by ID
//   return await User.findByIdAndUpdate(userId, updateData, { new: true }).exec();
// };

// export const deleteUser = async (userId: string): Promise<boolean> => {
//   // Implement logic to delete user by ID
//   const result = await User.findByIdAndDelete(userId).exec();
//   return result !== null;
// };
