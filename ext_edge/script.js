//document.title = "(dl loaded)" + document.title;

var regex_url= /var disqus_url = 'https:\/\/osu\.ppy\.sh\/s\/([0-9]+)';/;
var mapset_n = "";
for (var i = 0; i < document.scripts.length; i++) {
    var matches = regex_url.exec(document.scripts[i].outerHTML);
    if (matches != null) {
        mapset_n = matches[1];
        break;
    }
}

var msky_url = "http://osu.mengsky.net/api/download/" + mapset_n;
var bcat_url = "http://bloodcat.com/osu/s/" + mapset_n;
var inso_url = "http://inso.link/yukiho/?m=" + mapset_n;

var dl_btn = document.getElementsByClassName('beatmapDownloadButton')[0];
var dl_list = document.createElement("ul");
dl_list.innerHTML = "<li><a href=\"" + msky_url + "\">Mengsky</a></li><li><a href=\"" + bcat_url + "\">Bloodcat</a></li><li><a href=\"" + inso_url + "\" target=\"_blank\">Inso</a></li>";
dl_btn.appendChild(dl_list);
