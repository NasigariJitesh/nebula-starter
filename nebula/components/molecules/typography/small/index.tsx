import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const Small = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        className={cn(
          'text-foreground web:select-text text-sm font-medium leading-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Small.displayName = 'Small'

export default Small
