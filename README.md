##Webarch for Meteor
-----
High quality theme for **meteor**. 


**Please support the author by buying the theme from
[theme forest](http://themeforest.net/item/webarch-responsive-admin-dashboard-template/6157416)**

##Instalation
1. Install with meteorite or pull the repo

        $ mrt add theme-webarch

2. To see the html source to add to your templates please download the **full theme** from **[here](http://adf.ly/ighUY)**

    **By default** the css and js is just from the `barebone/index.html`


3. To enable more js and css from the theme:

    Go to your **package directory** and seach for `theme-webarch` directory
    Open `package.js` and uncomment the files that you need.

        <script src="assets/js/core.js" type="text/javascript"></script> 
    
    **to**

        var assetJs = [
            ...
            assetPath + 'assets/js/core.js',
            ...
        ];

    Same as with css. **DON'T FORGET TO add/remove comma from the array**


4. In order to **jQuery** to work we need to uncomment the same files, but with **camelCase name** from `views/main-webarch.js`

        Template.webarch.rendered = function(){
            ...
            Template.webarch.core();
            ...
        }
        

5. Add this to your template layout for jquery effects to work

        <template name="hello">
            {{>webarch}}
        </template>
        
6. copy the `webarch/HTML/assets` folder to your project's `public` folder

##Todo
+ Create template for login 404 500

###Trouble
If you run into some problems please remove bootstrap package, I already included it

###Extra
I also included `js_css_parser.rb` a ruby script to get all all the links to js/css file from html files **recursively**. It's a bit modified for this template, but if you know some ruby you will get run in no time for any html

`css_parser.rb` changes the path of img/fonts in css files. **don't** run it inside this the folder, use it in other non meteor templates.

Use it as you will