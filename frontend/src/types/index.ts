export type IChatInputProps = {
  handleSend: () => void;
  input?: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export type IMessage = {
  type: string;
  content: string;
  senderId: string;
};
export type IChatMessage = {
  data: IMessage[];
  user: string | null;
};
