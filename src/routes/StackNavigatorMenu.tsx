import { createStackNavigator } from '@react-navigation/stack';
import { globalColors } from '../theme/GlobalStyles';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { SalariesScreen } from '../screens/SalariesScreen';
import { PriceScreen } from '../screens/PriceScreen';
import { LastBudgetsScreen } from '../screens/LastBudgetsScreen';
import { ThemeScreen } from '../screens/ThemeScreen';
import { SideMenuNavigator } from './SideMenuNavigator';
import { MenuScreen } from '../screens/MenuScreen';

export type RootStackParams = {
  Menu: undefined,
  Sueldos: undefined,
  Precios: undefined,
  PresupuestosAnteriores: undefined,
  Temas: undefined,
}

const Stack = createStackNavigator();

export const StackNavigatorMenu = () => {

    return (
        <Stack.Navigator
            screenOptions={{ 
                headerStyle: { backgroundColor: globalColors.background },
                headerTintColor: globalColors.white,
                headerTitleAlign: 'center',
                headerLeft: () => ( <HamburgerMenu />)
            }}
        >
            <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
            <Stack.Screen name="JobsStack" component={SideMenuNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Sueldos" component={SalariesScreen} options={{title: 'SUELDOS'}}/>
            <Stack.Screen name="Precios" component={PriceScreen} options={{title: 'PRECIOS'}}/>
            <Stack.Screen name="PresupuestosAnteriores" component={LastBudgetsScreen} options={{title: 'PRESUPUESTOS ANTERIORES'}}/>
            <Stack.Screen name="Temas" component={ThemeScreen} options={{title: 'TEMAS'}}/>
        </Stack.Navigator>
    );
}