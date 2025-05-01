import {
    PopoverContent,
    Popover as PopoverPrimitive,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { IPopover } from '@/types/components';

const PopoverDemo: React.FC<IPopover> = ({ className, button, children }) => {
    return (
        <PopoverPrimitive>
            <PopoverTrigger asChild>{button}</PopoverTrigger>
            <PopoverContent className={cn(`w-80 rounded`, className)}>
                {children}
            </PopoverContent>
        </PopoverPrimitive>
    );
};

export default PopoverDemo;
