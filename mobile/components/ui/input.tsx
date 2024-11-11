import * as React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { cn } from '@/lib/utils';
import { Mail } from '@/lib/icons/Mail';
import { Lock } from '@/lib/icons/Lock';
import { Eye } from '@/lib/icons/Eye';
import { EyeOff } from '@/lib/icons/EyeOff';
import { Link } from '@/lib/icons/Link';
import numeral from 'numeral'

export type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {
  icon?: React.ReactElement,
  containerClassName?: string
}


const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  InputProps
>(({
  icon,
  className,
  containerClassName,
  placeholderClassName,
  secureTextEntry,
  value,
  onChangeText,
  ...props
}, ref) => {
  const [shownPassword, setShownPassword] = React.useState(false)
  const isNumericInput = props.keyboardType === 'numeric'
  const isEmailInput = props.keyboardType === 'email-address'
  const isUrlInput = props.keyboardType === 'url'

  let rightIcon = null

  if (isEmailInput) {
    icon = <Mail className="text-muted-foreground" size={20} />
  }

  if (secureTextEntry) {
    icon = <Lock className="text-muted-foreground" size={20} />
    
    rightIcon = shownPassword ? <EyeOff className="text-muted-foreground" size={20} /> : <Eye className="text-muted-foreground" size={20} />
  }

  if (isUrlInput) {
    icon = <Link className="text-muted-foreground" size={20} />
  }


  function onUpdateText(text: string): void {
    if (onChangeText) {
      if (isNumericInput) {
        const numValue = numeral(text).value()
        onChangeText(numValue ? `${numValue}` : '')
      } else {
        onChangeText(text)
      }
    }
  }

  let maskedValue = value

  if (isNumericInput) {
    maskedValue = numeral(value || '').format('0,0')
  }

  return (
    <View className={cn('relative', containerClassName)}>
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
        value={maskedValue}
        onChangeText={text => onUpdateText(text)}
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
