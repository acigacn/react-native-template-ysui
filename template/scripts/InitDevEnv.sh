# 安装：git hoooks。饶过钩子：git commit -m "test" --no-verify
prepareGitHooks() {
    if [ ! -d '.git' -a ! -d '.husky' ]; then
        yarn husky install
        yarn husky add .husky/pre-commit "yarn run lint --fix"
    fi  
}

prepareGitHooks


