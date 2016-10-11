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

var dl_btn_parent = document.getElementsByClassName('beatmapDownloadButton')[0].parentNode;
var dl_table = "<div class=\"beatmapDownloadButton scenery-ext-div\">"+
                "  <table style=\"height: 139px;\">"+
                "  	<tbody>"+
                "      <tr><td><a class=\"button button-primary button-longshadow-right scenery-ext-a\" href=\"" + msky_url + "\">Mengsky</a></td></tr>"+
                "      <tr><td><a class=\"button button-caution button-longshadow-right scenery-ext-a\" href=\"" + bcat_url + "\">Bloodcat</a></td></tr>"+
                "      <tr><td><a class=\"button button-royal button-longshadow-right scenery-ext-a\" href=\"" + inso_url + "\" target=\"_blank\">Inso</a></td></tr>"+
                "    </tbody>"+
                "  </table>"+
                "</div>";

dl_btn_parent.innerHTML = dl_table + dl_btn_parent.innerHTML;
