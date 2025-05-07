import path from 'path'

export const projRoot = path.resolve(__dirname, '..', '..', '..', '..')
export const pkgRoot = path.resolve(projRoot, 'packages')
export const compRoot = path.resolve(pkgRoot, 'components')
export const themeRoot = path.resolve(pkgRoot, 'theme-chalk')
export const hookRoot = path.resolve(pkgRoot, 'hooks')
export const localeRoot = path.resolve(pkgRoot, 'locale')
export const directiveRoot = path.resolve(pkgRoot, 'directives')
export const epRoot = path.resolve(pkgRoot, 'quicktvui')
export const utilRoot = path.resolve(pkgRoot, 'utils')
export const buildRoot = path.resolve(projRoot, 'internal', 'build')

// Docs
export const docsDirName = 'docs'
export const docRoot = path.resolve(projRoot, docsDirName)
export const vpRoot = path.resolve(docRoot, '.vitepress')

/** `/dist` */
export const buildOutput = path.resolve(projRoot, 'dist')
/** `/dist/element-plus` */
export const epOutput = path.resolve(buildOutput, 'quicktvui')

export const projPackage = path.resolve(projRoot, 'package.json')
export const compPackage = path.resolve(compRoot, 'package.json')
export const themePackage = path.resolve(themeRoot, 'package.json')
export const hookPackage = path.resolve(hookRoot, 'package.json')
export const localePackage = path.resolve(localeRoot, 'package.json')
export const directivePackage = path.resolve(directiveRoot, 'package.json')
export const epPackage = path.resolve(epRoot, 'package.json')
export const utilPackage = path.resolve(utilRoot, 'package.json')
export const docPackage = path.resolve(docRoot, 'package.json')
