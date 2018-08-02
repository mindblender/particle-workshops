(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(t,e,s){t.exports=s.p+"assets/img/badgetweet.c674d54e.png"},153:function(t,e,s){t.exports=s.p+"assets/img/iftttfinal.bb9a8cca.png"},154:function(t,e,s){t.exports=s.p+"assets/img/iftttreview.76780a22.png"},155:function(t,e,s){t.exports=s.p+"assets/img/twitteractionfields.81991bc2.png"},156:function(t,e,s){t.exports=s.p+"assets/img/twitteraction.4dd3d0a7.png"},157:function(t,e,s){t.exports=s.p+"assets/img/choosetwitter.8f0c7a21.png"},158:function(t,e,s){t.exports=s.p+"assets/img/thenthat.5c372b0e.png"},159:function(t,e,s){t.exports=s.p+"assets/img/completetrigger.c58203cd.png"},160:function(t,e,s){t.exports=s.p+"assets/img/choosetrigger.c8d13bc1.png"},161:function(t,e,s){t.exports=s.p+"assets/img/chooseparticle.55d9e5c6.png"},162:function(t,e,s){t.exports=s.p+"assets/img/chooseservice.824f7028.png"},163:function(t,e,s){t.exports=s.p+"assets/img/ifthis.97cb425e.png"},164:function(t,e,s){t.exports=s.p+"assets/img/newapplet.71f8dec8.png"},165:function(t,e,s){t.exports=s.p+"assets/img/ifttt.9d29f5a2.png"},166:function(t,e,s){t.exports=s.p+"assets/img/curlcall.3ab57029.gif"},167:function(t,e,s){t.exports=s.p+"assets/img/curllist.d0d65fc2.gif"},168:function(t,e,s){t.exports=s.p+"assets/img/blinkyblue.296fa049.gif"},169:function(t,e,s){t.exports=s.p+"assets/img/call.a52345b6.gif"},170:function(t,e,s){t.exports=s.p+"assets/img/temp.61c682e4.gif"},171:function(t,e,s){t.exports=s.p+"assets/img/particlelist.085a96a6.gif"},172:function(t,e,s){t.exports=s.p+"assets/img/particlelogin.14fc48ea.gif"},262:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"chapter-4-going-beyond-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chapter-4-going-beyond-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Chapter 4: Going Beyond Devices")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Project Goal")])]),s("th",[t._v('Connect your badge to 3rd party services and "backhaul" sensor data to the cloud.')])])]),s("tbody",[s("tr",[s("td",[s("strong",[t._v("What you’ll learn")])]),s("td",[t._v("How to work with the Particle CLI; Building integrations with IFTTT; Piping sensor data into the Azure IoT Hub.")])]),s("tr",[s("td",[s("strong",[t._v("Tools you’ll need")])]),s("td",[t._v("Particle Dev (Desktop IDE), a Particle Photon and #PartiBadge")])]),s("tr",[s("td",[s("strong",[t._v("Time needed to complete")])]),s("td",[t._v("30 minutes")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"exploring-the-particle-cli-and-cloud-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-particle-cli-and-cloud-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Exploring the Particle CLI and Cloud API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"the-particle-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-particle-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" The Particle CLI")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://particle.io/install-cli "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Type "),e("code",[this._v("particle login")]),this._v(" and enter your Particle account email and password when prompted.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(172),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Once you're logged in, type "),e("code",[this._v("particle list")]),this._v(" to see your list of online devices.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(171),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("The device we've been using for this workshop has 3 variables and two functions. Get the value of the "),e("code",[this._v("temp")]),this._v(" variable with the command "),e("code",[this._v("particle get temp")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(170),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("We can also call one of the two functions to light up the yellow or blue LED button. Type the command "),e("code",[this._v("particle call <your-device-name> toggleB")]),this._v(" in the terminal. Run the same command again to turn the light off.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(169),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(168),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"the-particle-device-cloud-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-particle-device-cloud-api","aria-hidden":"true"}},[this._v("#")]),this._v(" The Particle Device Cloud API")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("First, you'll need to obtain an access token from the CLI. Type "),s("code",[t._v("particle token list")]),t._v(" to view the tokens associated with your account. The first one listed is your "),s("code",[t._v("user")]),t._v(" token, and can be used to access the Device Cloud API. If no tokens are listed, generate a new one with "),s("code",[t._v("particle token new")]),t._v(".")])]),s("li",[s("p",[t._v("With your token and Device ID in hand, type the following cURL command into a terminal window, replacing the text below in "),s("code",[t._v("< >")]),t._v(" with your information.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" https://api.particle.io/v1/devices?access_token"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),e("span",{attrs:{class:"token operator"}},[this._v("<")]),this._v("your token"),e("span",{attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, the response will generate a wall of text in your terminal. If you have Python 2.6+ installed on your machine, you can pipe the output to the "),e("code",[this._v("json.tool")]),this._v(" and get pretty-printed JSON.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://api.particle.io/v1/devices\\?access_token\\"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("your token"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" python -m json.tool\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(167),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("For this next command, you need the Device ID of the Photon attached to your badge. You can find that in the console or via the "),s("code",[t._v("particle list")]),t._v(" CLI command.")])]),s("li",[s("p",[t._v("Let's call the "),s("code",[t._v("toggleB")]),t._v(" function using the Device Cloud API. Type the following, again replacing the text below in "),s("code",[t._v("< >")]),t._v(" with your information.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://api.particle.io/v1/devices/3"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("device id"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("/toggleB \\\n     -d access_token"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("your token"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(166),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"exploring-integrations-with-ifttt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exploring-integrations-with-ifttt","aria-hidden":"true"}},[this._v("#")]),this._v(" Exploring Integrations with IFTTT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(165),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v('After logging in, click "New Applet" in the top right of your dashboard.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(164),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v('Click the "+this" button.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(163),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v('In the "Search services" input, type "particle" and click on the Particle card.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(162),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(161),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v('Click on the "New event published" card.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(160),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("In the trigger fields, set the event name as "),e("code",[this._v("button-pressed")]),this._v(" the event contents to "),e("code",[this._v("red")]),this._v(' and the Device name to the name of your device. Click "create trigger"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(159),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"7"}},[e("li",[this._v("You've set up the trigger on the Particle end, now its time for the "),e("strong",[this._v("That")]),this._v(' portion of the setup. Click the "+that" button.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(158),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"8"}},[e("li",[this._v('Select the "Twitter" card.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(157),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"9"}},[e("li",[this._v('Click the "Post a tweet" action card. You may be prompted to connect your Twitter account to IFTTT at this point. Follow the instructions provided to do so.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(156),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"10"}},[e("li",[this._v('For the tweet text, copy the following, or customize as you wish. The text in double-brackets ({{}}) is replacement text based on the input event from Particle. You can click "Add ingredient" to see what other fields are available to use. Click "Create action" when you\'re done.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("My #PartiBadge is tweeting! {{DeviceName}} published {{EventName}}\nwith data {{EventContents}}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(155),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"11"}},[e("li",[this._v('Click "Finish"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(154),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"12"}},[e("li",[this._v("You're all set! Toggle the switch to turn your action on if it isn't by default.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(153),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"13"}},[e("li",[this._v("Now, we need to modify our badge firmware to publish an event when the red button is pressed. Add the following to the "),e("code",[this._v("loop")]),this._v(" function:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("redButtonADebouncer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("update")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("redButtonADebouncer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("read")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" HIGH"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("digitalWrite")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yellowLED"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HIGH"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("digitalWrite")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yellowLED"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LOW"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Particle"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("publish")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"button-pressed"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"red"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MY_DEVICES"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"14"}},[e("li",[e("p",[this._v("Flash the firmware to your badge and press the red button a few times.")])]),e("li",[e("p",[this._v("Head over to your Twitter account and see yout Particle-powered tweet! "),e("em",[this._v("Note: it may take a few minutes for IFTTT to pick up the event.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(152),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-device-data-into-azure-iot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-device-data-into-azure-iot","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Device Data into Azure IoT")])}],n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),s("ol",[s("li",[t._v("If you haven't already, "),s("a",{attrs:{href:"https://docs.particle.io/guide/tools-and-features/cli/photon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install the Particle CLI"),s("OutboundLink")],1),t._v(". Open a terminal window and type the following command:")])]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),s("p",[t._v("Behind the scenes, every interface that Particle provides to work with devices, from the console to, mobile apps, SDKs and the CLI talks through a RESTful Device Cloud API, which you can also call yourself, directly.")]),s("p",[s("em",[t._v("The next few steps assume you have cURL installed on your machine. If you don't have this command-line utility on your machine, you can download and install it "),s("a",{attrs:{href:"https://curl.haxx.se/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" or use a GUI-based tool like "),s("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),s("OutboundLink")],1),t._v(".")])]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),s("p",[t._v("With that, you've now explored all of the ways that you can interface with the Particle Device cloud and your connected devices! Now, let's go beyond the Particle ecosystem and explore some of the ways that you can integrate with other 3rd party services, and backhaul your data into other cloud services.")]),t._m(23),s("p",[t._v("IFTTT (If This, Then That) is a web-based services that allows you to create integrations via simple conditional statements, called applets. There are hundreds of pre-build services you can leverage, and first-class support for Particle devices. In this section, we're going to create an IFTTT integration that posts a tweet when you press a button on your badge.")]),s("ol",[s("li",[t._v("Start by heading over to "),s("a",{attrs:{href:"https://ifttt.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("IFTTT"),s("OutboundLink")],1),t._v(" and either login, or create a new account.")])]),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),t._m(52),t._m(53)])},a,!1,null,null,null);e.default=r.exports}}]);