import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Platform, Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const BlockQuote = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        // @ts-ignore - role of blockquote renders blockquote element on the web
        role={Platform.OS === 'web' ? 'blockquote' : undefined}
        className={cn(
          'native:mt-4 border-border native:pl-3 text-foreground web:select-text mt-6 border-l-2 pl-6 text-base italic',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

BlockQuote.displayName = 'BlockQuote'

export default BlockQuote
