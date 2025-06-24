import * as React from 'react'

import { cn } from '../../../lib/utils'
import { Text, Pressable } from 'react-native'

const Label = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text> & {
    rootProps?: Omit<
      React.ComponentPropsWithoutRef<typeof Pressable>,
      'onPress'
    >
  }
>(({ className, onPress, rootProps, ...props }, ref) => (
  <Pressable
    onPress={onPress}
    className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 web:disabled:pointer-events-none rounded-md disabled:opacity-50"
    {...rootProps}
  >
    <Text
      ref={ref}
      className={cn(
        'native:text-lg text-foreground px-0.5 py-1.5 font-medium leading-none ',
        className,
      )}
      {...props}
    />
  </Pressable>
))

Label.displayName = 'Label'

export default Label
