const themeConfig = require('./config/theme/')

module.exports = {
  base: "/VuePressBlog/",
  title: "Coloring",
  description: 'Sleep Hard When Life Is Hard.',
  dest: 'docs/.vuepress/dist',
  theme: 'reco',
  head: [
    ['link', { rel: 'icon', href: '/head.png' }],
    //['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  //theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  

