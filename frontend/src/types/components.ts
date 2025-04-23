import { LucideIcon } from 'lucide-react';

export type IAvatar = {
  className?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type IInput = {
  className?: string;
  inputClassName?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  icon?: LucideIcon;
};
