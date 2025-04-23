import { Input as InputPrimitive } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { IInput } from '@/types/components';

export const Input: React.FC<IInput> = ({
  className = '',
  inputClassName = '',
  label = '',
  placeholder = '',
  type = 'text',
  name = '',
  icon: Icon,
}) => {
  return (
    <div className={cn(`w-full`, className)}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-muted-foreground pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <InputPrimitive
          type={type}
          name={name}
          placeholder={placeholder}
          className={cn(`w-full`, Icon && 'pl-10', inputClassName)}
        />
      </div>
    </div>
  );
};
