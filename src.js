(function() {
    // --- Set up a little search indicator
    var searchView              = document.createElement("div");
    searchView.style.position   = "fixed";
    searchView.style.padding    = "10px";
    searchView.style.background = "#ff6600";
    searchView.style.top        = "10px";
    searchView.style.left       = "10px";
    searchView.style.fontFamily = "Helvetica, Arial, sans-serif";
    searchView.innerHTML        = "Searching Hacker News...";
    document.body.appendChild(searchView);

    // --- The minimum version of jQuery we want
    var v = "1.3.2";

    // check prior inclusion and version
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                init();
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        init();
    }
    
    // --- The actual bookmarklet
    function init() {
        var url = window.location.href;
        var commentsUrl;
        
        // --- Fire up the search request
        jQuery.ajax({
            url:"http://api.thriftdb.com/api.hnsearch.com/items/_search?filter%5Bfields%5D%5Btype%5D=submission&q=" + url,
            dataType:"jsonp",
            jsonp:"callback",
            jsonpCallback:"callback",
            success:checkResults
        });

        function checkResults(object) {
            var results = object.results;
            var foundItem;
            
            // --- Remove the search indicator
            searchView && $(searchView).remove();
            
            // --- Give "not found" response if there are no results
            if (!results.length) {
                return notFound();
            }
            
            // --- Crawl results
            var ii = results.length - 1;
            
            for (var i = ii; i >= 0; i--) {
                var result = results[i];
        
                if (result.item.url !== url) {
                    continue;
                }
        
                foundItem = result.item;
                break;
            }

            // --- Give response in an alert
            if (foundItem) {
                found(foundItem);
            }
            else {
                notFound();
            }    
        }

        function notFound() {
            var dialog = confirm("Not on Hacker News.\nDo you want to create a new post?");
            
            if (dialog) {
                postUrl = "http://news.ycombinator.com/submitlink?u=" + encodeURIComponent(document.location);
                window.location = postUrl;
            }
        }

        function found(item) {
            var dialog = confirm("Already on Hacker News.\nDo you want to see the comments?");
            
            if (dialog) {
                commentsUrl = "http://news.ycombinator.com/item?id=" + item.id;
                window.location = commentsUrl;
            }
        }
    }
})();