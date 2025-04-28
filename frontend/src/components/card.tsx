import * as React from 'react';

import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    Card as CardPrimitive,
    CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ICard } from '@/types/components';

const Card: React.FC<ICard> = ({
    footer,
    description,
    title,
    children,
    className,
}) => {
    return (
        <CardPrimitive className={cn(`w-full`, className)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="">{footer}</CardFooter>
        </CardPrimitive>
    );
};

export default Card;
