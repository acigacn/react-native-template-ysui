const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

function buildBundle(platform, appName) {
  const bundleName = `${appName}-${platform}.bundle`;
  shell.exec(`react-native bundle --reset-cache --platform ${platform} --dev false --entry-file index.js --bundle-output ${bundleName}`);
  shell.exec(`zip -q -r ${appName}-${platform}.zip ${bundleName} asstes/`);
  shell.rm(bundleName);
  shell.mv(`${appName}-${platform}.zip`, 'out/');
}

function main() {
  let appName = 'app';

  const appJson = path.join(__dirname, '../app.json');

  if (!fs.existsSync(appJson)) {
    shell.echo('app.json 文件不存在，bundle文件将以默认 app.bundle 命名！');
  } else {
    try {
      const data = JSON.parse(fs.readFileSync(appJson, 'utf8'));
      if (data && data.name) {
        appName = data.name;
      }
    } catch (error) {
      console.warn(error.message);
    }
  }
  ['ios', 'android'].forEach(platform => {
    buildBundle(platform, appName);
  });
}

main();
