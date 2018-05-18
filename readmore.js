//<![CDATA[
posts_no_thumb_sum = 490;
posts_thumb_sum = 400;
img_thumb_height = 160;
img_thumb_width = 180;

function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}

function createSummaryAndThumb(post_id, post_url, post_title) {
    var post_content = document.getElementById(post_id);
    var imgtag = "";
    var img = post_content.getElementsByTagName("img");
    var summ = posts_no_thumb_sum;
    if(img.length >= 1) {
        imgtag = `<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="${post_url}" title="${post_title}"><img src="${img[0].src}" width="${img_thumb_width}px" height="${img_thumb_height}px" /></a></span>`;
        summ = posts_thumb_sum;
    }

    var summary = imgtag + '<div>' + removeHtmlTag(post_content.innerHTML, summ) + '</div>';
    post_content.innerHTML = summary;
}

//]]>
