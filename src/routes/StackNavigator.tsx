import { createStackNavigator } from '@react-navigation/stack';
import { SelectJobScreen } from '../screens/Jobs/SelectJobScreen';
import { CalculateScreen } from '../screens/Jobs/CalculateScreen';
import { BudgetScreen } from '../screens/Jobs/BudgetScreen';
import { JobsScreen } from '../screens/Jobs/JobsScreen';
import { globalColors } from '../theme/GlobalStyles';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { StaffScreen } from '../screens/Jobs/StaffScreen';

export type RootStackParams = {
  Jobs: undefined,
  SelectJob: {id: number, name: string},
  Calculate: undefined,
  Staff: undefined,
  Budget: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{ 
        headerStyle: { backgroundColor: globalColors.background },
        headerTintColor: globalColors.white,
        headerTitleAlign: 'center',
        headerLeft: () => ( <HamburgerMenu />)
      }}
    >
      <Stack.Screen name="Jobs" component={JobsScreen} options={{title: 'CATEGORIAS'}}/>
      <Stack.Screen name="SelectJob" component={SelectJobScreen} />
      <Stack.Screen name="Calculate" component={CalculateScreen} options={{title: 'CALCULAR'}}/>
      <Stack.Screen name="Staff" component={StaffScreen} options={{title: 'PERSONAL'}}/>
      <Stack.Screen name="Budget" component={BudgetScreen} options={{title: 'Presupuesto'}}/>
    </Stack.Navigator>
  );
}