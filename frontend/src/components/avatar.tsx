import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarPrimitive,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { IAvatar } from "@/types/components";

export const Avatar: React.FC<IAvatar> = ({
  className,
  src = "https://github.com/shadcn.png",
  alt = "profile picture",
  ...props
}) => {
  return (
    <AvatarPrimitive className={cn(className)}>
      <AvatarImage src={src} alt={alt} {...props} />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarPrimitive>
  );
};
