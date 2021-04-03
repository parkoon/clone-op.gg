import { ReactNode } from 'react'

export type BaseAvatarProps = {
  /**
   * Avatar Title
   */
  title: string | ReactNode

  /**
   * Avatar Subtitle
   */
  subtitle?: string | ReactNode

  /**
   * Avatar Size
   * Default - md
   */
  size?: 'sm' | 'md' | 'lg'
}
