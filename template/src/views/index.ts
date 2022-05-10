import HomePage from './home';
import SettingsPage from './settings';

// 演示页面，可以删掉也可以拿来做尝试 :)
import ListViewDemo from './examples/ListView';
import ListDetailDemo from './examples/ListDetail';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const demoPages = {
  ListViewDemo,
  ListDetailDemo,
};

export const rootPage = 'HomePage';

export default {
  // ...demoPages,
  HomePage,
  SettingsPage,
};
