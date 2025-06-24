import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const H1 = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        role="heading"
        aria-level="1"
        className={cn(
          'web:scroll-m-20 text-foreground web:select-text text-4xl font-extrabold tracking-tight lg:text-5xl',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

H1.displayName = 'H1'

export default H1
