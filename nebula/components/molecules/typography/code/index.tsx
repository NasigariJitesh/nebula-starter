import * as Slot from '@rn-primitives/slot'
import { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Platform, Text as RNText } from 'react-native'
import { cn } from '../../../../lib/utils'

const Code = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Text : RNText
    return (
      <Component
        // @ts-ignore - role of code renders code element on the web
        role={Platform.OS === 'web' ? 'code' : undefined}
        className={cn(
          'bg-muted text-foreground web:select-text relative rounded-md px-[0.3rem] py-[0.2rem] text-sm font-semibold',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Code.displayName = 'Code'

export default Code
