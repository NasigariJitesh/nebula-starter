import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const P = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        className={cn('text-foreground web:select-text text-base', className)}
        ref={ref}
        {...props}
      />
    )
  },
)
P.displayName = 'P'

export default P
