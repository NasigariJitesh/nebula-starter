import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const H2 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        role="heading"
        aria-level="2"
        className={cn(
          'web:scroll-m-20 border-border text-foreground web:select-text border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

H2.displayName = 'H2'

export default H2
