module.exports = (ctx) => {
  const regExp = /\/_\/_\/node_modules/
  ctx.modifyBuildAssets(({ assets }) => {
    Object.keys(assets).forEach((srcKey) => {
      if (!regExp.test(srcKey)) {
        return
      }
      assets[srcKey.replace(regExp, '')] = assets[srcKey]
      Reflect.deleteProperty(assets, srcKey)
    })
  })
}
