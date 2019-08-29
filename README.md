## Introduction

This is a hexo tag plugin which allows you to render fun time in you blog.

It is just for fun.

## Installation

To install, run the following command in the root directory of hexo:
```
npm install hexo-fun-time --save
```

## Usage
#### simple Usage

	{% funTime %}

#### disable render
If you want to disable this function, you can setting in `_config.yml`
```yaml
fun_time:
  disable: true
```
#### change default style
If you want to change default style, you can setting style in `_config.yml`, 
you can set three part: body, title, content

For example:
```yaml
fun_time:
  style: 
    body:
      margin: "10px 10px 10px auto" # body align right side
    title:
      font-size: 50px # change font size
    content:
      font-size: 30px # change font size
      
```
The default style is:
```yaml
fun_time:
  style: 
    body:
      width: "400px",
      padding: "10px",
      margin: "10px auto",
      border: "#000 2px dotted; border-radius: 10px"
    title:
      font-size: "24px",
      font-style: "italic",
      text-shadow: "0 0 0.2em #8F7, 0 0 0.2em #8F7"
    content:
```

#### custom data resource
You can custom your own data resource by add `content_api` and `content_field` in `_config.yml`.
```yaml
fun_time:
  content_api: "http://api.avatardata.cn/Joke/NewstJoke?key={yourAppKey}&rows=10"
  content_field: "result.[].content"

```
The `content_api` is api where your jokes get from. 

The `content_field` is the string that define the content location in response of your api.
It is few of word join by '.'. If word is not '[]', it represent a property of object, if word is '[]', it represent this property is array.

For Example, the `content_field` of follow code is `result.[].content`.
```json5
{ 
  result: 
   [ { content: '楼主大四女生，这几天和同一宿舍的女生一起去找工作，在火车站，碰到一个大姐，带着一个四五岁的小男孩侯车，小男孩总是粘着我，要坐我腿上，同宿舍的女生很是羡慕我有人缘，我得意的问小男孩：“你为什么老是喜欢坐姐姐腿上？” 小男孩用稚嫩的口气回答：“姐姐腿上肉多，坐着舒服” 我：“尼玛，这是谁家小哔崽子，快点领走！”',
       hashId: '8d914207de87e464bc99055a02160d27',
       unixtime: '1554778627',
       updatetime: '2019-04-09 10:57:07' },
     { content: '女：“我购物车里的那些水果牛奶饮料零食你赶紧给我买！” 男：“着什么急呀？” 女：“天越来越热了，会放坏的。”',
       hashId: '7236a1fe92605a8b5540c4279bd8f973',
       unixtime: '1554778627',
       updatetime: '2019-04-09 10:57:07' }],
  error_code: 0,
  reason: 'Succes',
} 
```
More example show in [here](/test/objectUtilsTest.js).

## Credits
Thanks the [RollToolsApi](https://github.com/MZCretin/RollToolsApi) project for default joke resource!