import { Label } from '@/components/ui/label';
import { Textarea as TextareaPrimitive } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { ITextArea } from '@/types/components';

export const TextArea: React.FC<ITextArea> = ({
  className = '',
  inputClassName = '',
  label = '',
  icon: Icon,
  ...props // Spread the props here
}) => {
  return (
    <div className={cn(`w-full`, className)}>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-muted-foreground pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <TextareaPrimitive
          className={cn(`w-full`, Icon && 'pl-10', inputClassName)}
          {...props}
        />
      </div>
    </div>
  );
};
