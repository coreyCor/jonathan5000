//<p class="j316">Stay Tuned For More . . .
//<img src="img/johnbro.jpg" class="thumbnail" style="height: 200px">Coming Soon . . .</p>
for(var i = 0; i < pics.length; ++i){
  $("#pic-area").append("<a href= "+pics[i].url+" ><div class='col-md-4 col-xs-6'>\
	<img src="+ pics[i].pic +" class='thumbnail'></div></a>")};
