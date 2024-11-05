import * as React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { cn } from '@/lib/utils';
import { Mail } from '@/lib/icons/Mail';
import { Lock } from '@/lib/icons/Lock';
import { Eye } from '@/lib/icons/Eye';
import { EyeOff } from '@/lib/icons/EyeOff';

export type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {
  icon?: React.ReactElement
}


const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  InputProps
>(({ icon, className, placeholderClassName, secureTextEntry, ...props }, ref) => {
  const [shownPassword, setShownPassword] = React.useState(false)

  let rightIcon = null

  if (props.keyboardType === 'email-address') {
    icon = <Mail className="text-muted-foreground" size={20} />
  }

  if (secureTextEntry) {
    icon = <Lock className="text-muted-foreground" size={20} />
    
    rightIcon = shownPassword ? <EyeOff className="text-muted-foreground" size={20} /> : <Eye className="text-muted-foreground" size={20} />
  }



  return (
    <View className='relative'>
      <TextInput
        ref={ref}
        className={cn(
          'web:flex h-12 native:h-14 web:w-full rounded-2xl border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
          props.editable === false && 'opacity-50 web:cursor-not-allowed',
          icon && 'pl-12',
          secureTextEntry && 'pr-12',
          className
        )}
        placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
        {...props}
        secureTextEntry={secureTextEntry && !shownPassword}
      />
      {icon && <View className='absolute h-full flex items-center justify-center left-4'>{icon}</View>}

      {secureTextEntry && rightIcon &&
        <TouchableOpacity
          onPress={() => setShownPassword(!shownPassword)}
          className='absolute h-full flex items-center justify-center right-4'>
            {rightIcon}
        </TouchableOpacity>
      }
    </View>
  );
});

Input.displayName = 'Input';

export { Input };
