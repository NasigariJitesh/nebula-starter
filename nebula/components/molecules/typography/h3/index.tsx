import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const H3 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        role="heading"
        aria-level="3"
        className={cn(
          'web:scroll-m-20 text-foreground web:select-text text-2xl font-semibold tracking-tight',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

H3.displayName = 'H3'

export default H3
