import type {NativeStackNavigationProp, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import type {Route, ParamListBase} from '@react-navigation/routers';

export interface BasePageProps {
  back?: {
    title: string;
  };
  options: NativeStackNavigationOptions;
  route: Route<string>;
  navigation: NativeStackNavigationProp<ParamListBase>;
  url?: string;
}

export interface BasePageState {
  title?: string;
  dataLoadState?: -1 | 0 | 1;
  isConnected?: boolean;
}
