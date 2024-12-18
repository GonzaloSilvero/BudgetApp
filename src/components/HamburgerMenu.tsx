import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { globalColors } from '../theme/GlobalStyles'

export const HamburgerMenu = () => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <FontAwesomeIcon icon={faBars} size={24} color={ globalColors.white } style={{marginLeft: 8}}/>
    </Pressable>
  )
}
