import { Request, Response } from "express";
import { getChatMemberById, getChatMembers, createChatMember } from "./service";

// GET ALL CHAT MEMBERS
export const getAllChatMembers = async (req: Request, res: Response) => {
  try {
    const chatMembers = await getChatMembers();
    
    res.status(200).json(chatMembers);
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// GET CHAT MEMBER BY ID
export const getChatMember = (req: Request, res: Response) => {
  const { id } = req.params;
  const query = req.query;

  try {
    const chatMember = getChatMemberById(id, query);
    if (!chatMember) {
      res.status(404).json({ message: "Chat Member not found" });
    } else {
      res.status(200).json(chatMember);
    }
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// CREATE CHAT MEMBER
export const createChatMembers = async (req: Request, res: Response) => {
  const value = req.body;
  try {
    const newChatMember = await createChatMember(value);

    res.status(201).json(newChatMember);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
}