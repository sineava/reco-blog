module.exports = {
  "title": "sineava",
  "description": "Talk is cheap. Show me the code.",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },
  "theme": "reco",
  "themeConfig": {
    "subSidebar": "auto",
    "valineConfig": {
      "showComment": false,
      "appId": "bIaIoboPJMGaUxlTktaOb69H-gzGzoHsz",// your appId
      "appKey": '9vk2nQvT9GlKL35uTTt8ntCN', // your appKey
      "notify": false, 
      "verify": false, 
      "avatar": 'monsterid', 
      "meta": ['nick','mail'],
      "placeholder": '🎈' ,
      "recordIP": true
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Project",
        "icon": "reco-three",
        "items": [
          {
            "text": "vue管理系统",
            "link": "http://www.sineava.top",
            "icon": "reco-blog"
          },
          {
            "text": "仿美团外卖",
            "link": "http://hoa.sineava.top",
            "icon": "reco-blog"
          },
          {
            "text": "moc音乐",
            "link": "http://moc.sineava.top",
            "icon": "reco-blog"
          }
        ]
      },
      { 
        "text": "Message",
        "link": "/message/",
        "icon": "reco-suggestion"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/sineava",
        "icon": "reco-github"
      }],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": '午后南杂',
        "desc": 'Enjoy when you can, and endure when you must.',
        "email": 'recoluan@qq.com',
        "link": 'https://www.recoluan.com'
      },
      {
        "title": "大漠",
        "desc": "w3cplus创始人",
        "link": "https://www.w3cplus.com/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "sineava",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  }
}