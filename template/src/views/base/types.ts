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
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
}

export interface PageOptions {
  /**
   * pageUrl
   */
  url?: string;
  /**
   * 是否允许多次打开。仅用于RN导航
   */
  multimes?: boolean;
  /**
   * 调用原生端能力打开
   */
  native?: boolean;
}
