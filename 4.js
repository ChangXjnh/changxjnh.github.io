(function(a) {
    var b = new Array
      , c = new Array
      , d = function() {}
      , e = 0;
    var f = {
        splashVPos: "35%",
        loaderVPos: "75%",
        splashID: "#jpreContent",
        showSplash: false,
        showPercentage: true,
        autoClose: false,
        closeBtnText: "",
        onetimeLoad: false,
        debugMode: false,
        splashFunction: function() {}
    };
    var g = function() {
        if (f.onetimeLoad) {
            var a = document.cookie.split("; ");
            for (var b = 0, c; c = a[b] && a[b].split("="); b++) {
                if (c.shift() === "jpreLoader") {
                    return c.join("=")
                }
            }
            return false
        } else {
            return false
        }
    };
    var h = function(a) {
        if (f.onetimeLoad) {
            var b = new Date;
            b.setDate(b.getDate() + a);
            var c = a == null ? "" : "expires=" + b.toUTCString();
            document.cookie = "jpreLoader=loaded; " + c
        }
    };
    var i = function() {
       
        


    };
    var j = function(c) {
        a(c).find("*:not(script)").each(function() {
            var c = "";
            if (a(this).css("background-image").indexOf("none") == -1 && a(this).css("background-image").indexOf("-gradient") == -1) {
                c = a(this).css("background-image");
                if (c.indexOf("url") != -1) {
                    var d = c.match(/url\((.*?)\)/);
                    c = d[1].replace(/\"/g, "")
                }
            } else if (a(this).get(0).nodeName.toLowerCase() == "img" && typeof a(this).attr("src") != "undefined") {
                c = a(this).attr("src")
            }
            if (c.length > 0) {
                b.push(c)
            }
        })
    };
    var k = function() {
        for (var a = 0; a < b.length; a++) {
            if (l(b[a]))
                ;
        }
    };
    var l = function(b) {
        var d = new Image;
        a(d).load(function() {
            m()
        }).error(function() {
            c.push(a(this).attr("src"));
            m()
        }).attr("src", b)
    };
    var m = function() {
        e++;
        var c = Math.round(e / b.length * 100);

        if (f.showPercentage) {
            $('#round').val(c + "%")
        }
        if (e >= b.length) {
            e = b.length;
            h();
            if (f.showPercentage) {
                $('#round').val("BẮT ĐẦU").removeClass('disabled');
                $('a.button0').removeClass('disabled'); 
                $('#mute').fadeIn();
            }
            if (f.debugMode) {
                var d = o()
            }
        }
    };
    var n = function() {
        a(jOverlay).fadeOut(800, function() {
            a(jOverlay).remove();
            d()
        })
    };
    var o = function() {
        if (c.length > 0) {
            var a = "ERROR - IMAGE FILES MISSING!!!\n\r";
            a += c.length + " image files cound not be found. \n\r";
            a += "Please check your image paths and filenames:\n\r";
            for (var b = 0; b < c.length; b++) {
                a += "- " + c[b] + "\n\r"
            }
            return true
        } else {
            return false
        }
    };
    a.fn.jpreLoader = function(b, c) {
        if (b) {
            a.extend(f, b)
        }
        if (typeof c == "function") {
            d = c
        }
        a("body").css({
            display: "block"
        });
        return this.each(function() {
            if (!g()) {
                i();
                j(this);
                k()
            } else {
                a(f.splashID).remove();
                d()
            }
        })
    }
})(jQuery)