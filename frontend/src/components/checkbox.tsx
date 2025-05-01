'use client';

import { Checkbox as CheckboxPrimitive } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { ICheckBox } from '@/types/components';

import { Label } from './ui/label';

const Checkbox: React.FC<ICheckBox> = ({
    className = '',
    inputClassName = '',
    label = '',
    name = '',
    value = false,
    disabled = false,
    onChange = () => {},
}) => {
    return (
        <div className={cn(`flex items-center space-x-2`, className)}>
            <CheckboxPrimitive
                className={cn('cursor-pointer', inputClassName)}
                checked={value}
                onCheckedChange={onChange}
                disabled={disabled}
            />
            {label && <Label htmlFor={name}>{label}</Label>}
        </div>
    );
};

export default Checkbox;
