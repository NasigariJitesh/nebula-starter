import * as React from 'react'
import { Pressable } from 'react-native'
import { TextClassContext } from '../text'
import { cn } from '../../../lib/utils'
import { buttonTextVariants, buttonVariants } from './utils'
import { ButtonProps } from './types'

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <TextClassContext.Provider
      value={buttonTextVariants({
        variant,
        size,
        className: 'web:pointer-events-none',
      })}
    >
      <Pressable
        className={cn(
          props.disabled && 'web:pointer-events-none opacity-50',
          buttonVariants({ variant, size, className }),
        )}
        ref={ref}
        role="button"
        {...props}
      />
    </TextClassContext.Provider>
  )
})
Button.displayName = 'Button'

export default Button
