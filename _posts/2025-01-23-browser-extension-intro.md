---
title: 'Intro to Browser Extension Development'
tags: 
  - javascript
  - front-end
  - html
---
## Intro

Making your own extensions for the web browser is something I think is very cool and is not that difficult. If you have a basic understanding of javascript you are almost there already.

Here is a small list of things you could do with your own extension that I think is cool:

* Inject javascript or css into a page  
* Add items to browser menus  
* Create a sidepanel with html  
* Display notifications  
* Redirect the user to another page  
* Connect keybinds to your code  
* Store data in the browser storage

## Chrome vs Firefox

I have tried making extensions for both Firefox and Chrome. I have noticed that they are very similar because they follow mostly the same API. If you make your extension for one of them, it will most likely work for the other. There might be small differences that you will have to adjust for though.

## File structure

When making a extension there is one mandatory file and many optional files. The mandatory file is called "manifest.json" and is what defines your extension. Here you will configure and define things about your extension. 

There are also optional files depending on what your extension will do, here are they(their names are not important, can be named anything):

* **popup.html** \- This is what will display when someone clicks on the extension icon. Can also include CSS and Javascript.  
* **icon.png** \- You might want images for things in your extension like the icon  
* **content.js** \- this is what is called a content script which is code that you can inject into a page with some other code.  
* **background.js \-** This is what is called a service worker. Here is where most of the code that controls your extension

## Hello world

I will show you the code for a very simple hello world example, you can see a more detailed explanation in the link below.

manifest.json:
```js
{
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  }
}
```
hello.html:
```html
<html>
  <body>
    <h1>Hello Extensions</h1>
<script>
console.log("This is a popup!")
</script>
  </body>
</html>
```
For this you would want manifest.json, hello.html, and hello\_extensions.png in the same folder. With this extension you should have an icon in your extension bar that you can click on.

You could easily create a separate javascript file and link to it from your hello.html like you would normally.

Read the section below "Testing your Extension" to see if this works for you.

## Permissions

Since your extension will run on the users page it might have access to sensitive data. Therefore you have to explicitly state what permissions your extension needs. The user will then get warned about this when they install your extension. You declare these in your manifest.json.

Here is a list of some common permissions:

* activeTab  
* storage  
* scripting  
* browsingData  
* cookies  
* notifications  
* tabs

## Testing your extension

### Chrome

Go to chrome://extensions/ and in the top right corner turn on developer mode. After that click on "Load unpacked" on the left side. Now choose the folder that contains your extension.

### Firefox

Go to about:debugging and click on "This Firefox". Then click on "Load Temporary Add-on" and choose the folder that contains your extension.

## Extra reading

[Guide: Hello World chrome extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world)

[A List of everything you can do with your extension](https://developer.chrome.com/docs/extensions/develop)

[About Service Workers](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers)

[About Content Scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)

[List of Extension examples with code](https://developer.chrome.com/docs/extensions/samples)

