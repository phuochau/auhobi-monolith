import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Loader } from './loader';

const buttonVariants = cva(
  'relative group flex flex-row items-center justify-center rounded-2xl web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary web:hover:opacity-90 active:opacity-90',
        destructive: 'bg-destructive web:hover:opacity-90 active:opacity-90',
        outline:
          'border border-primary bg-transparent web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        secondary: 'bg-secondary web:hover:opacity-80 active:opacity-80',
        ghost: 'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        link: 'web:underline-offset-4 web:hover:underline web:focus:underline ',
        menu: 'justify-start'
      },
      size: {
        default: 'h-11 px-4 py-2 native:h-12 native:px-5 native:py-3',
        sm: 'h-10 rounded-xl px-3',
        lg: 'h-12 rounded-2xl px-8 native:h-14',
        icon: 'h-10 w-10',
        menu: 'py-5 rounded-none'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva(
  'web:whitespace-nowrap text-sm native:text-base font-semibold text-foreground web:transition-colors',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: 'group-active:text-accent-foreground text-primary',
        secondary: 'text-secondary-foreground group-active:text-secondary-foreground',
        ghost: 'group-active:text-accent-foreground',
        link: 'text-primary group-active:underline',
        menu: 'text-foreground'
      },
      size: {
        default: '',
        sm: '',
        lg: 'native:text-lg',
        icon: '',
        menu: ''
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonExtProps = {
  loading?: boolean,
  leftIcon?: React.ReactElement,
  leftIconContainerClassName?: string,
  rightIcon?: React.ReactElement,
  rightIconContainerClassName?: string,
}

type ButtonProps = React.ComponentPropsWithoutRef<typeof TouchableOpacity> &
  VariantProps<typeof buttonVariants> &
  ButtonExtProps;

const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
  ({
    className,
    variant,
    size,
    loading,
    children,
    leftIcon,
    leftIconContainerClassName,
    rightIcon,
    rightIconContainerClassName,
    ...props
  }, ref) => {
    return (
      <TextClassContext.Provider
        value={cn(
          props.disabled && 'web:pointer-events-none',
          buttonTextVariants({ variant, size })
        )}
      >
        <TouchableOpacity
          className={cn(
            props.disabled && 'opacity-50 web:pointer-events-none',
            (leftIcon || rightIcon) && 'px-16',
            buttonVariants({ variant, size, className }),
          )}
          ref={ref}
          role='button'
          activeOpacity={0.7}
          {...props}
        >
            {leftIcon && <View className={cn('absolute h-full flex items-center justify-center left-4', leftIconContainerClassName)}>{leftIcon}</View>}
            {loading ? <Loader /> : children}
            {rightIcon && <View className={cn('absolute h-full flex items-center justify-center right-4', rightIconContainerClassName)}>{rightIcon}</View>}
        </TouchableOpacity>
      </TextClassContext.Provider>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
