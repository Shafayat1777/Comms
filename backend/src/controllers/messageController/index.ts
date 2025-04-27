import { Request, Response } from "express";
import { getAllMessages, getMessage, insertMessage } from "@/models/messageModel";

// * GET ALL MESSAGES
export const getAllMessagesController = async (req: Request, res: Response) => {
  try {
    const messages = await getAllMessages();
    
    res.status(200).json(messages);
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// GET MESSAGE BY ID
export const getSingleMessageController = (req: Request, res: Response) => {
  const { id } = req.params;
  const query = req.query;

  try {
    const message = getMessage(id, query);
    if (!message) {
      res.status(404).json({ message: "Message not found" });
    } else {
      res.status(200).json(message);
    }
  } catch (error: unknown) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const createMessageController = async (req: Request, res: Response) => {
  const value = req.body;
  try {
    const newMessage = await insertMessage(value);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
}