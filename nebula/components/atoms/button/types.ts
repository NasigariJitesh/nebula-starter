import { VariantProps } from 'class-variance-authority'
import { Pressable } from 'react-native'
import { buttonVariants } from './utils'

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>
