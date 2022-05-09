# 安装：git hoooks。饶过钩子：git commit -m "test" --no-verify
prepareGitHooks() {
    gitDir='../.git'
    huskyDir='../.husky'
    if [ -d "$gitDir" -a ! -d "$huskyDir" ]; then
        yarn husky install
        yarn husky add .husky/pre-commit "yarn run lint"
    fi  
}

prepareGitHooks


