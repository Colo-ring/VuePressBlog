const themeConfig = require('./config/theme/')

module.exports = {
 // base: "./",
  title: "Coloring",
  description: 'Sleep Hard When Life Is Hard.',
  dest: 'docs/.vuepress/dist',
  //dest: './',
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
  
  plugins: [
    [
      '@vuepress/medium-zoom', 'flowchart'
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['shizuku','haru2','miku'],
        clean: true,
        modelStyle: { left: '23px', bottom: '10px', opacity: '1.0' },
        btnStyle: { right: '30px', bottom: '70px' },
        messageStyle: { right: '8px', bottom: '210px' },
        message:{ 
          welcome: '欢迎来到我的站点！' ,
          home: '心里的花，我想要带你回家。', 
          theme: '好吧，希望你能喜欢我的其他小伙伴。', 
          close: '你知道我喜欢吃什么吗？痴痴地望着你。' 
        }
      }
    ]
  ]

} 

