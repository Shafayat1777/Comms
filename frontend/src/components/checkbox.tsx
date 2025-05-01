'use client';

import { Checkbox as CheckboxPrimitive } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { ICheckBox } from '@/types/components';

import { Label } from './ui/label';

const Checkbox: React.FC<ICheckBox> = ({
    className = '',
    inputClassName = '',
    label = '',
    ...props
}) => {
    return (
        <div className={cn(`flex items-center space-x-2`, className)}>
            <CheckboxPrimitive className={cn('cursor-pointer',inputClassName)} {...props} />
            {label && <Label htmlFor={props.name}>{label}</Label>}
        </div>
    );
};

export default Checkbox;
