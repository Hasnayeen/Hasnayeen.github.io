(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{232:function(e,t,n){},253:function(e,t,n){"use strict";var i=n(232);n.n(i).a},266:function(e,t,n){"use strict";n.r(t);n(98);var i=n(264),r=function(e){e.clear()},a=function(e){e.writeln(""),e.writeln("Usage: COMMAND"),e.writeln(""),e.writeln("Commands:"),e.writeln("clear\t Clear the screen"),e.writeln("contact\t Links for contacting me"),e.writeln("exit\t Exit the console"),e.writeln("list\t List all commands available"),e.writeln("theme\t Manage theme")},o=function(e){e.writeln(""),e.writeln("Contact Info:"),e.writeln(""),e.writeln("mail\t: searching.nehal@gmail.com"),e.writeln("github\t: https://github.com/Hasnayeen"),e.writeln("twitter\t: https://twitter.com/nhasnayeen"),e.writeln("dev.to\t: https://dev.to/hasnayeen")},l=function(e,t,n,i){switch(n){case"help":e.writeln(""),e.writeln("Usage: theme COMMAND"),e.writeln(""),e.writeln("Commands:"),e.writeln("list\t List all theme available"),e.writeln("set\t Set a theme");break;case"list":e.writeln(""),e.writeln("Available themes:"),e.writeln("light"),e.writeln("dark"),e.writeln("sepia"),e.writeln(""),e.writeln("To set a theme run: theme set `name`");break;case"set":window.__setPreferredTheme(i[0]),t.theme=i[0],e.writeln(""),e.writeln("Theme set to ".concat(i[0]));break;default:e.writeln(""),e.writeln("Usage: theme COMMAND"),e.writeln(""),e.writeln("Commands:"),e.writeln("list\t List all theme available"),e.writeln("set\t Set a theme")}};var s=n(251),c=n(252),m=new s.Terminal({cursorBlink:!0,screenReaderMode:!0,fontSize:18,fontWeight:600,theme:{background:"#1a1a1a",foreground:"green"}});m.loadAddon(new c.WebLinksAddon);var d={name:"Console",data:function(){return{command:""}},mounted:function(){m.open(document.getElementById("terminal")),this.runConsole()},methods:{runConsole:function(){var e=this;m._initialized||(this.initialize(),m.onKey((function(t){var n=!(t.domEvent.altKey||t.domEvent.altGraphKey||t.domEvent.ctrlKey||t.domEvent.metaKey);13===t.domEvent.keyCode?(e.processCommand(),m.writeln("\r\n[35m# guest@hasnayeen.dev:[32m"),m.write("\r$ ")):8===t.domEvent.keyCode?(e.command=e.command.slice(0,-1),m._core.buffer.x>2&&m.write("\b \b")):35===t.domEvent.keyCode||(38===t.domEvent.keyCode?m.write("[".concat(m.buffer.cursorY+1,";3H")):40===t.domEvent.keyCode?m.write("[".concat(m.buffer.cursorY+1,";").concat(e.command.length+3,"H")):37===t.domEvent.keyCode?m.buffer.cursorX>2&&m.write("[D"):39===t.domEvent.keyCode?m.buffer.cursorX<=e.command.length+1&&m.write("[C"):n&&(e.command+=t.key,m.write(t.key)))})))},initialize:function(){m._initialized=!0,m.focus(),m.writeln("Hello from hasnayeen.dev console!"),m.writeln("Use `list` command for available commands"),m.writeln("Use `COMMAND help` to get help info on the command"),m.writeln("\r\n[35m# guest@hasnayeen.dev:[32m"),m.write("\r$ ")},closeConsole:function(){m.clear(),this.initialize(),this.$emit("close")},processCommand:function(){m.writeln(""),"exit"===this.command&&this.closeConsole(),function(e,t,n){var s=n.split(" "),c=Object(i.a)(s),m=c[0],d=c[1],w=c.slice(2);switch(m){case"clear":return r(e);case"list":return a(e);case"theme":return l(e,t,d,w);case"contact":return o(e);default:e.writeln("command not found: ".concat(m))}}(m,this.state,this.command),this.command=""}}},w=(n(253),n(30)),h=Object(w.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"fixed z-10",attrs:{id:"terminal"}}),t("div",{staticClass:"fixed w-screen h-screen top-0 left-0 bg-gray-800 z-0 opacity-75",on:{click:this.closeConsole}})])}),[],!1,null,null,null);t.default=h.exports}}]);