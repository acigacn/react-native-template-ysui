import {createNavigationContainerRef, StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function canGoBack(): boolean {
  if (navigationRef.isReady()) {
    return navigationRef.canGoBack();
  }
  return false;
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function navigate(name: string, params: object | undefined) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
}

export function push(name: string, params: object | undefined) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function replace(name: string, params: object | undefined) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function pop(count?: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}
