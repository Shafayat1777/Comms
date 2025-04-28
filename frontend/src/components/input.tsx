import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { Input as InputPrimitive } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { IInput } from '@/types/components';

export const Input: React.FC<IInput> = ({
    className = '',
    inputClassName = '',
    label = '',
    showPassword = false,
    icon: Icon,
    ...props
}) => {
    const [show, setShow] = useState(false);
    return (
        <div className={cn(`w-full flex flex-col gap-2`, className)}>
            {label && <Label htmlFor={props.name}>{label}</Label>}
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 left-3 flex items-center text-muted-foreground pointer-events-none">
                        <Icon className="w-4 h-4" />
                    </div>
                )}
                <InputPrimitive
                    className={cn(`w-full`, Icon && 'pl-10', inputClassName)}
                    {...props}
                    type={show ? 'text' : props.type}
                />
                {showPassword && (
                    <div
                        onClick={() => setShow(!show)}
                        className="absolute inset-y-0 right-0 flex items-center text-muted-foreground cursor-pointer hover:bg-muted-foreground/25 rounded px-2"
                    >
                        {show ? (
                            <Eye className="w-4 h-4" />
                        ) : (
                            <EyeOff className="w-4 h-4" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
