const shell = require('shelljs');
const fs = require('fs');

/**
 * 安装：git hoooks。饶过钩子：git commit -m "test" --no-verify
 */
function prepareGitHooks() {
  if (fs.existsSync('../template')) {
    shell.echo('请注意，你很可能在模板开发环境下，将跳过开发环境初始化...');
    shell.exit(0);
  }
  if (!fs.existsSync('../.git')) {
    shell.echo('仓库尚未完成Git初始化，将为你自动补救...');
    shell.exec('git init');
    shell.exec('git add .');
    shell.exec('git commit -m "Init Project By shelljs!"');
    if (!fs.existsSync('../.husky')) {
      shell.exec('yarn husky install');
      shell.exec('yarn husky add .husky/pre-commit "yarn run lint"');
    }
  }
}

prepareGitHooks();
