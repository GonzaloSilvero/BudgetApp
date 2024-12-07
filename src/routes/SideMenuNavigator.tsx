import { createDrawerNavigator } from '@react-navigation/drawer';
import { GenericsScreen } from '../screens/GenericsScreen';
import { PriceScreen } from '../screens/PriceScreen';
import { SalariesScreen } from '../screens/SalariesScreen';
import { StackNavigator } from './StackNavigator';
import { globalColors } from '../theme/GlobalStyles';
import { LastBudgetsScreen } from '../screens/LastBudgetsScreen';
import { ThemeScreen } from '../screens/ThemeScreen';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: globalColors.white,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: globalColors.background },
        drawerStyle: { backgroundColor: globalColors.secondary },
        drawerInactiveTintColor: globalColors.white,
        drawerActiveTintColor: globalColors.white,
      }}
    >
    <Drawer.Screen 
      name="Categorias" 
      component={StackNavigator} 
      options={{headerShown: false}}
      />

    <Drawer.Screen name="Genericos" component={GenericsScreen} />
    <Drawer.Screen name="Precios" component={PriceScreen} /> 
    <Drawer.Screen name="Sueldos" component={SalariesScreen} /> 
    <Drawer.Screen name="Presupuestos anteriores" component={LastBudgetsScreen} /> 
    <Drawer.Screen name="Temas" component={ThemeScreen} /> 
    </Drawer.Navigator>
  );
}