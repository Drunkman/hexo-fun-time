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

## Credits
Thanks the [RollToolsApi](https://github.com/MZCretin/RollToolsApi) project for default joke resource!