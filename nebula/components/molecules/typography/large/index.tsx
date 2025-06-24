import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const Large = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        className={cn(
          'text-foreground web:select-text text-xl font-semibold',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Large.displayName = 'Large'

export default Large
