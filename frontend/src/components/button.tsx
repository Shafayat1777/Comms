import { Loader } from 'lucide-react';

import { Button as ButtonPrimitive } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IButton } from '@/types/components';

const Button: React.FC<IButton> = ({
    children,
    className,
    loading,
    ...props
}) => {
    return (
        <ButtonPrimitive className={cn(`rounded`, className)} {...props}>
            {props.icon && <props.icon className="w-4 h-4 mr-2" />}
            {children}
            <Loader
                className={cn(`w-4 h-4 ml-2 animate-spin`, !loading && 'hidden')}
            />
        </ButtonPrimitive>
    );
};

export default Button;
