import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {Route, ParamListBase} from '@react-navigation/routers';

export interface BasePageProps {
  route: Route<string>;
  navigation: NativeStackNavigationProp<ParamListBase>;
}

export interface BasePageState {
  title?: string;
  dataLoadState?: -1 | 0 | 1;
  isConnected?: boolean;
}

export interface PageOptions {
  multimes?: boolean;
}
