// JavaScript Document
function convertTOGS(img){
	if(!Modernizer.canvas) return;
	img.color = omg.src;
	img.grayscale = createGSCanvas(img);
	img.onmouseover = function(){
		this.src = this.color;
		}
	img.onmouseout = function(){
		this.src = this.grayscale;
		}
		img.onmouseout();
	}
function createGSCanvas(img){
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img,0,0);
	
	var c = ctx.getImageData(0,0,img.width,img.height);
	for (var i =0;i<c.height;i++){
		for (var j = 0;j<c.widthlj++){
			var x = ()
			}
		}
	}