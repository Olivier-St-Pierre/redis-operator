(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{377:function(e,s,a){"use strict";a.r(s);var t=a(45),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"failover-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failover-testing"}},[e._v("#")]),e._v(" Failover Testing")]),e._v(" "),a("p",[e._v("Before failover testing, we have to write some dummy data inside the Redis cluster, we can write the dummy data using the "),a("code",[e._v("redis-cli")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis-leader-0 -n redis-operator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -- redis-cli -a Opstree@1234 -c "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" tony stark\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nDefaulting container name to redis-leader.\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl describe pod/redis-leader-0 -n redis-operator'")]),e._v(" to see all of the containers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" this pod.\nWarning: Using a password with "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-a'")]),e._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-u'")]),e._v(" option on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" line interface may not be safe.\nOK\n")])])]),a("p",[e._v("Verify the key has been inserted properly by fetching its value.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis-leader-0 -n redis-operator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -- redis-cli -a Opstree@1234 -c get tony\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl describe pod/redis-leader-0 -n redis-operator'")]),e._v(" to see all of the containers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" this pod.\nWarning: Using a password with "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-a'")]),e._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-u'")]),e._v(" option on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" line interface may not be safe.\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"stark"')]),e._v("\n")])])]),a("p",[e._v("Let’s restart the pod name "),a("code",[e._v("redis-leader-0")]),e._v(" and see the redis node behavior.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl delete pod redis-leader-0 -n redis-operator\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\npod "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"redis-leader-0"')]),e._v(" deleted\n")])])]),a("p",[e._v("Now we can again try to list redis cluster nodes from "),a("code",[e._v("redis-leader-0")]),e._v(" pod and from some other pod as well like:- "),a("code",[e._v("redis-follower-2")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis-leader-0 -n redis-operator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -- redis-cli -a Opstree@1234 cluster nodes\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nDefaulting container name to redis-leader.\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl describe pod/redis-leader-0 -n redis-operator'")]),e._v(" to see all of the containers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" this pod.\nWarning: Using a password with "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-a'")]),e._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-u'")]),e._v(" option on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" line interface may not be safe.\neef84b7dada737051c32d592bd66652b9af0cb35 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".2.184:6379@16379 slave 0a36dc5064b0a61afa8bd850e93ff0a1c2267704 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619958171517")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" connected\na7c424b5ec0e696aa7be15a691846c8820e48cd1 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".1.181:6379@16379 master - "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619958172520")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("-5460\n118dbe4f49fa224b7d48fbe71990d054c7e9e853 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".0.228:6379@16379 slave 85747fe5cabf96e00fd0365737996a93e05cf947 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619958173523")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" connected\n50c3f58a1e2911a68b614f6a1a766cc4a7063e95 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".0.229:6379@16379 myself,slave a7c424b5ec0e696aa7be15a691846c8820e48cd1 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619958172000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" connected\n0a36dc5064b0a61afa8bd850e93ff0a1c2267704 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".1.183:6379@16379 master - "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619958173000")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10923")]),e._v("-16383\n85747fe5cabf96e00fd0365737996a93e05cf947 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.42")]),e._v(".2.182:6379@16379 master - "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1619958173523")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" connected "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5461")]),e._v("-10922\n")])])]),a("p",[e._v("So if you notice the output of cluster nodes command, the node IP is updated and it’s connected as a leader.")]),e._v(" "),a("p",[e._v("Let's try to get value of key from some other pod")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis-follower-1 -n redis-operator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -- redis-cli -a Opstree@1234 -c get tony\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nDefaulting container name to redis-follower.\nUse "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl describe pod/redis-follower-1 -n redis-operator'")]),e._v(" to see all of the containers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" this pod.\nWarning: Using a password with "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-a'")]),e._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'-u'")]),e._v(" option on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("command")]),e._v(" line interface may not be safe.\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"stark"')]),e._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);