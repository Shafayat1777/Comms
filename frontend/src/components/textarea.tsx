import { Label } from '@/components/ui/label';
import { Textarea as TextareaPrimitive } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { IInput } from '@/types/components';

export const TextArea: React.FC<IInput> = ({
  className = '',
  inputClassName = '',
  label = '',
  placeholder = '',
  name = '',
  icon: Icon,
  value = '',
  onChange = () => {},
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
        <TextareaPrimitive
          name={name}
          placeholder={placeholder}
          className={cn(`w-full`, Icon && 'pl-10', inputClassName)}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
