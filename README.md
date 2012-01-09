AlreadyHN
=========

AlreandyHN is a bookmarklet written in JavaScript that checks the current page's address against ![hnsearch.com](http://www.hnsearch.com) to see if it was already posted on Hacker News.
Depending on the result it let's you view the comments or redirects you to the new submission page.


Installation
--------

Installation is very simply. Just drag the following link to your web browsers bookmark bar.

![DRAG ME!](javascript:(function()%7Bfunction%20c()%7Bfunction%20b()%7Bif(confirm(%22Not%20on%20Hacker%20News.%5CnDo%20you%20want%20to%20create%20a%20new%20post%3F%22))postUrl%3D%22http%3A%2F%2Fnews.ycombinator.com%2Fsubmitlink%3Fu%3D%22%2BencodeURIComponent(document.location)%2Cwindow.location%3DpostUrl%7Dvar%20c%3Dwindow.location.href%2Ce%3BjQuery.ajax(%7Burl%3A%22http%3A%2F%2Fapi.thriftdb.com%2Fapi.hnsearch.com%2Fitems%2F_search%3Ffilter%255Bfields%255D%255Btype%255D%3Dsubmission%26q%3D%22%2Bc%2CdataType%3A%22jsonp%22%2Cjsonp%3A%22callback%22%2CjsonpCallback%3A%22callback%22%2Csuccess%3Afunction(d)%7Bvar%20d%3Dd.results%2Cf%3Ba%26%26%24(a).remove()%3Bif(!d.length)return%20b()%3B%0Afor(var%20g%3Dd.length-1%3B0%3C%3Dg%3Bg--)%7Bvar%20h%3Dd%5Bg%5D%3Bif(h.item.url%3D%3D%3Dc)%7Bf%3Dh.item%3Bbreak%7D%7Dif(f)%7Bif(confirm(%22Already%20on%20Hacker%20News.%5CnDo%20you%20want%20to%20see%20the%20comments%3F%22))e%3D%22http%3A%2F%2Fnews.ycombinator.com%2Fitem%3Fid%3D%22%2Bf.id%2Cwindow.location%3De%7Delse%20b()%7D%7D)%7Dvar%20a%3Ddocument.createElement(%22div%22)%3Ba.style.position%3D%22fixed%22%3Ba.style.padding%3D%2210px%22%3Ba.style.background%3D%22%23ff6600%22%3Ba.style.top%3D%2210px%22%3Ba.style.left%3D%2210px%22%3Ba.style.fontFamily%3D%22Helvetica%2C%20Arial%2C%20sans-serif%22%3Ba.innerHTML%3D%22Searching%20Hacker%20News...%22%3Bdocument.body.appendChild(a)%3B%0Aif(void%200%3D%3D%3Dwindow.jQuery%7C%7C%221.3.2%22%3Ewindow.jQuery.fn.jquery)%7Bvar%20e%3D!1%2Cb%3Ddocument.createElement(%22script%22)%3Bb.src%3D%22http%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.3.2%2Fjquery.min.js%22%3Bb.onload%3Db.onreadystatechange%3Dfunction()%7Bif(!e%26%26(!this.readyState%7C%7C%22loaded%22%3D%3Dthis.readyState%7C%7C%22complete%22%3D%3Dthis.readyState))e%3D!0%2Cc()%7D%3Bdocument.getElementsByTagName(%22head%22)%5B0%5D.appendChild(b)%7Delse%20c()%7D)()%3B)


Usage
-----

1. Go to any website
2. Click on bookmarklet