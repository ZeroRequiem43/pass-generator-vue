module.exports = {
   publicPath: process.env.NODE_ENV === 'production'
      ? '/pass-generator/'
      : '/',
   chainWebpack: config => {
      config
         .plugin("html")
         .tap(args => {
            args[0].template = './public/index.html',
               args[0].title = 'Generate Password App'
            return args
         })
   }
}