const shell = require('shelljs');
const fs = require('fs');

function buildBundle(platform, appName) {
  const bundleName = `${appName}.bundle`;
  const platformOut = `out/${platform}/`;
  // 清理旧的构建文件
  shell.rm('-rf', platformOut);
  shell.mkdir('-p', platformOut);
  // 打RN Bundle
  const cmd = `react-native bundle --reset-cache --entry-file index.js --platform ${platform} --assets-dest ${platformOut}  --bundle-output ${platformOut}${bundleName} --dev false`;
  shell.echo(`😼️ 执行${platform}打包：===>\n${cmd}`);
  shell.exec(cmd);
  // 整合资源打压缩包
  shell.cp('-r', 'res/', platformOut);
  shell.cd(platformOut);
  shell.exec(`zip -q -r ${appName}.${platform}.zip .`);
  shell.mv('*.zip', '../');
  shell.cd('../../');
  shell.echo(`👍🏻 ${appName}.${platform}.zip 打包完成,请将其上传至发版平台`);
}

function main() {
  let appName = 'app';

  const appJson = 'app.json';

  if (!fs.existsSync(appJson)) {
    shell.echo('app.json 文件不存在,bundle文件将以默认 app.bundle 命名！');
  } else {
    try {
      const data = JSON.parse(fs.readFileSync(appJson, 'utf8'));
      if (data && data.name) {
        appName = data.name;
      }
    } catch (error) {
      console.warn(error.message);
      shell.exit(1);
    }
  }
  ['ios', 'android'].forEach(platform => {
    buildBundle(platform, appName);
  });
  shell.echo('打包完成,压缩包在out目录中... 👏🏻👏🏻👏🏻');
  shell.exec('open out/');
}

main();
