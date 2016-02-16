console.log("Public audiences must be enabled before passing segments to your tools.");
if(typeof window.jstag !== 'object'){
    // if jstag object doesnt exist we are loading sync
    // set master variable so we can block the outlio load
    window.liosetup = window.liosetup || {};
    window.liosetup.sync = true;

    // continue loading the main collection tag
    window.jstag = function() {
        var t = {
                _q: [],
                _c: {},
                ts: (new Date()).getTime()
            },
            l = false,
            w = window,
            d = document,
            src = "/static/io",
            ext = ".min.js",
            as = Array.prototype.slice,
            js = "//c.lytics.io",
            url = "//c.lytics.io",
            tag = "io";
        t.init = function(c) {
            url = c.url || url;
            ext = c.min === false ? ".js" : ext;
            tag = c.tag || tag;
            t._c = c;
            return this;
        };
        t.load = function() {
            var jsel, scriptEl = d.getElementsByTagName("script")[0];
            l = true;
            if (d.getElementById(src)) return this;
            jsel = d.createElement("script");
            src = js + "/static/" + tag + ext;
            jsel.id = src;
            jsel.src = src;
            scriptEl.parentNode.insertBefore(jsel, scriptEl);
            return this;
        };
        t.bind = function(e) {
            if (!l) this.load();
            this._q.push([e, as.call(arguments, 1)]);
        };
        t.ready = function() {
            if (!l) this.load();
            this._q.push(["ready", as.call(arguments)]);
        };
        t.send = function() {
            if (!l) this.load();
            this._q.push(["ready", "send", as.call(arguments)]);
            return this;
        };
        return t;
    }();

    window.jstag.init({ cid: "80fba4e2e8129c35be050ecf9b737bb7", url:'//c.lytics.io', min:false });
}

window.jstag.ready(function(){
  if(typeof window.liosetup !== 'undefined' && window.liosetup.stream !== undefined){
      window.jstag.config.stream = window.liosetup.stream;
  }

  window.jstag.send();
})


