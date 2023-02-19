import { createContext, ComponentType, useContext } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import DefaultLinearGradientImplementation from './defaultGradient'

export type LinearGradientPoint = Record<'x' | 'y', number>
export type LinearGradientProps = {
  colors: string[]
  style: StyleProp<ViewStyle>
  start: LinearGradientPoint
  end: LinearGradientPoint
}
export type LinearGradientImplementation = ComponentType<LinearGradientProps>

const LinearGradientContext = createContext(DefaultLinearGradientImplementation)

export const useLinearGradient = () => {
  const context = useContext(LinearGradientContext)
  if (!context) {
    throw new Error(
      'You need to install "expo-linear-gradient" or inject LinearGradientImplementation via "MotiLinearGradientProvider"'
    )
  }

  return context
}

export type LinearGradientProviderProps = React.PropsWithChildren<{
  value: LinearGradientImplementation
}>

export const MotiLinearGradientProvider: React.FC<LinearGradientProviderProps> =
  LinearGradientContext.Provider

MotiLinearGradientProvider.displayName = 'MotiLinearGradientProvider'
