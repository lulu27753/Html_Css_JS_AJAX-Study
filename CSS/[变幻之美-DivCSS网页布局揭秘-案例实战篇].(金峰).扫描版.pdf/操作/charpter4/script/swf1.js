function swf(file,w,h){
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+" height="'+h+">');
	document.write('<param name="movie" value="'+file+'">');

}