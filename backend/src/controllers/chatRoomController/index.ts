import { Request, Response } from "express";
import { getChatRoomById, getChatRooms, createChatRoom } from "./service";

// GET ALL USERS
export const getAllChatRooms = async (req: Request, res: Response) => {
  try {
    const chatRooms = await getChatRooms();
    
    res.status(200).json(chatRooms);
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// GET USER BY ID
export const getChatRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  const query = req.query;

  try {
    const user = getChatRoomById(id, query);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const createChatRooms = async (req: Request, res: Response) => {
  const value = req.body;
  try {
    const newChatRoom = await createChatRoom(value);

    res.status(201).json(newChatRoom);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
}