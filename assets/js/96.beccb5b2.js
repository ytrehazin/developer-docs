(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{464:function(t,a,e){"use strict";e.r(a);var s=e(49),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"generating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating"}},[t._v("#")]),t._v(" Generating")]),t._v(" "),e("p",[t._v("The following RPC calls interact with the "),e("code",[t._v("komodod")]),t._v(" software, and are made available through the "),e("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),e("h2",{attrs:{id:"generate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[t._v("#")]),t._v(" generate")]),t._v(" "),e("p",[e("strong",[t._v("generate numblocks")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This function can only be used in the "),e("b",[t._v("regtest")]),t._v(" mode (for testing purposes).")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("generate")]),t._v(" method instructs the coin daemon to immediately mine the indicated number of blocks.")]),t._v(" "),e("h3",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("numblocks")]),t._v(" "),e("td",[t._v("(numeric)")]),t._v(" "),e("td",[t._v("the desired number of blocks to generate")])])])]),t._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("blockhashes")]),t._v(" "),e("td",[t._v("(array)")]),t._v(" "),e("td",[t._v("hashes of blocks generated")])])])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli generate "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0475316d63fe48bb9d58373595cb334fc2553f65496edfb2fb17b9ed06f4c480"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00d29a2b7dec52baa9ab8e4264363f32b4989eef7dbb0a9932fbc11274195b5a"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"getgenerate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getgenerate"}},[t._v("#")]),t._v(" getgenerate")]),t._v(" "),e("p",[e("strong",[t._v("getgenerate")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("getgenerate")]),t._v(" method returns a boolean value indicating the server's mining status.")]),t._v(" "),e("p",[t._v("The default value is false.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("See also "),e("b",[t._v("gen")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"arguments-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td",[t._v("(none)")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("true/false")]),t._v(" "),e("td",[t._v("(boolean)")]),t._v(" "),e("td",[t._v("indicates whether the server is set to generate coins")])])])]),t._v(" "),e("h4",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli getgenerate\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])])]),t._v(" "),e("p",[t._v("You can find your "),e("code",[t._v("rpcuser")]),t._v(", "),e("code",[t._v("rpcpassword")]),t._v(", and "),e("code",[t._v("rpcport")]),t._v(" in the coin's "),e("code",[t._v(".conf")]),t._v(" file.")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpassword")]),t._v(" --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "getgenerate", "params": [] }\'')]),t._v(" -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcport")]),t._v("/\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curltest"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"setgenerate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setgenerate"}},[t._v("#")]),t._v(" setgenerate")]),t._v(" "),e("p",[e("strong",[t._v("setgenerate generate ( genproclimit )")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("setgenerate")]),t._v(" method allows the user to set the "),e("code",[t._v("generate")]),t._v(" property in the coin daemon to "),e("code",[t._v("true")]),t._v(" or "),e("code",[t._v("false")]),t._v(", thus turning generation (mining/staking) on or off.")]),t._v(" "),e("p",[t._v("Generation is limited to "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#genproclimit"}},[t._v("genproclimit")]),t._v(" processors. Set "),e("code",[t._v("genproclimit")]),t._v(" to "),e("code",[t._v("-1")]),t._v(" to use maximum available processors.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("See also the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#getgenerate"}},[t._v("getgenerate")]),t._v(" method to query the current setting, and "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#genproclimit"}},[t._v("genproclimit")]),t._v(" for setting the default number of processors the daemon uses through the "),e("code",[t._v(".conf")]),t._v(" file.")],1)]),t._v(" "),e("h3",{attrs:{id:"arguments-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("generate")]),t._v(" "),e("td",[t._v("(boolean, required)")]),t._v(" "),e("td",[t._v("set to true to turn on generation; set to off to turn off generation")])]),t._v(" "),e("tr",[e("td",[t._v("genproclimit")]),t._v(" "),e("td",[t._v("(numeric, optional)")]),t._v(" "),e("td",[t._v('set the processor limit for when generation is on; use value "-1" for unlimited')])])])]),t._v(" "),e("h3",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td",[t._v("(none)")]),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("h5",{attrs:{id:"activate-mining-with-maximum-available-processors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activate-mining-with-maximum-available-processors"}},[t._v("#")]),t._v(" Activate mining with maximum available processors")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli setgenerate "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" -1\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h5",{attrs:{id:"activate-staking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activate-staking"}},[t._v("#")]),t._v(" Activate staking")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli setgenerate "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h5",{attrs:{id:"activate-mining-with-4-threads"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activate-mining-with-4-threads"}},[t._v("#")]),t._v(" Activate mining with 4 threads")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli setgenerate "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h5",{attrs:{id:"check-the-setting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-the-setting"}},[t._v("#")]),t._v(" Check the setting")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli getgenerate\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])]),t._v(" "),e("h5",{attrs:{id:"turn-off-generation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#turn-off-generation"}},[t._v("#")]),t._v(" Turn off generation")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli setgenerate "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h5",{attrs:{id:"turning-the-setting-on-via-json-rpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#turning-the-setting-on-via-json-rpc"}},[t._v("#")]),t._v(" Turning the setting on via json RPC")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpassword")]),t._v(" --data-binary "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "setgenerate", "params": [true, 1] }\'')]),t._v(" -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcport")]),t._v("/\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curltest"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);