webpackJsonp([11],{140:function(e,n,r){function o(e){r(199)}var t=r(17)(null,r(175),o,null,null);e.exports=t.exports},175:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",[r("nuxt-link",{staticClass:"button--grey",attrs:{to:"/"}},[e._v("Home")]),r("span",{staticClass:"title-header"},[e._v("\n      Identify Tree by Leaf\n    ")]),r("span",{staticClass:"subtitle-header"},[e._v("\n      by EricOP\n    ")]),e._m(0)],1),r("nuxt")],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("a",{attrs:{href:"https://github.com/ericop/identify-tree-by-leaf"}},[r("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"}})])}]}},187:function(e,n,r){n=e.exports=r(25)(!0),n.push([e.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px;margin:.5rem}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px;margin:.5rem}.button--grey:hover{color:#fff;background-color:#35495e}.title-header{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:300;font-size:2rem;color:#35495e;letter-spacing:1px}.subtitle-header{font-weight:300;font-size:1.5rem;color:#526488;word-spacing:5px;padding-bottom:15px}","",{version:3,sources:["E:/src/experiments/identify-tree-by-leaf/layouts/default.vue"],names:[],mappings:"AACA,KACE,6GAA2H,AAC3H,eAAgB,AAChB,iBAAkB,AAClB,0BAA2B,AAC3B,8BAA+B,AAC/B,kCAAmC,AACnC,kCAAoC,CAGrC,AACD,sBAHE,8BAA+B,AACvB,qBAAuB,CAQhC,AAND,iBAKE,QAAU,CACX,AACD,eACE,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,kBAAmB,AACnB,YAAc,CACf,AACD,qBACE,WAAY,AACZ,wBAA0B,CAC3B,AACD,cACE,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,kBAAmB,AACnB,iBAAkB,AAClB,YAAc,CACf,AACD,oBACE,WAAY,AACZ,wBAA0B,CAC3B,AACD,cACE,uHAAwI,AACxI,gBAAiB,AACjB,eAAgB,AAChB,cAAe,AACf,kBAAoB,CACrB,AACD,iBACE,gBAAiB,AACjB,iBAAkB,AAClB,cAAe,AACf,iBAAkB,AAClB,mBAAqB,CACtB",file:"default.vue",sourcesContent:['\nhtml {\r\n  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\r\n  font-size: 16px;\r\n  word-spacing: 1px;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\n}\n*,\r\n*:before,\r\n*:after {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  margin: 0;\n}\n.button--green {\r\n  display: inline-block;\r\n  border-radius: 4px;\r\n  border: 1px solid #3b8070;\r\n  color: #3b8070;\r\n  text-decoration: none;\r\n  padding: 10px 30px;\r\n  margin: .5rem;\n}\n.button--green:hover {\r\n  color: #fff;\r\n  background-color: #3b8070;\n}\n.button--grey {\r\n  display: inline-block;\r\n  border-radius: 4px;\r\n  border: 1px solid #35495e;\r\n  color: #35495e;\r\n  text-decoration: none;\r\n  padding: 10px 30px;\r\n  margin-left: 15px;\r\n  margin: .5rem;\n}\n.button--grey:hover {\r\n  color: #fff;\r\n  background-color: #35495e;\n}\n.title-header {\r\n  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\r\n  font-weight: 300;\r\n  font-size: 2rem;\r\n  color: #35495e;\r\n  letter-spacing: 1px;\n}\n.subtitle-header {\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n  color: #526488;\r\n  word-spacing: 5px;\r\n  padding-bottom: 15px;\n}\r\n'],sourceRoot:""}])},199:function(e,n,r){var o=r(187);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(26)("1e517cc2",o,!0)}});