var fgimage = null;
var bgimage = null;

// for apply filter section 
var canvas = document.getElementById("can4");
var ctx = canvas.getContext("2d");
ctx.font = "15px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Input image will display here", canvas.width / 2, canvas.height / 2);

var canvas = document.getElementById("can5");
var ctx = canvas.getContext("2d");
ctx.font = "15px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Output image will display here", canvas.width / 2, canvas.height / 2);


function light() {
    var a = document.querySelector('body');
    a.className = "light";

}

function dark() {
    var a = document.querySelector('body');
    a.className = "black";

}

var outimage;
var grayimage;
var redimage;
var greenimage;
var blueimage;
var pinkimage;
var cyanimage;
var yellowimage, violetimage, indigoimage, ogangeimage;
var f1 = false, f2 = false, f3 = false, f4 = false, f5 = false, f6 = false, f7 = false, f8 = false, f9 = false, f10 = false;
var fgimage2 = null;
function upload() {
    var canvas = document.getElementById("can");
    var filename = document.getElementById("finput");
    //alert("you choose" + filename);
    fgimage = new SimpleImage(filename);
    fgimage.drawTo(canvas);
}
function upload2() {
    var canvas = document.getElementById("can2");
    var filename = document.getElementById("finput2");
    //alert("you choose" + filename);
    bgimage = new SimpleImage(filename);
    bgimage.drawTo(canvas);
}

function gsa() {
    var canvas = document.getElementById("can3");
    if (fgimage == null || !fgimage.complete()) {
        alert("foreground image not uploaded");
    }
    else if (bgimage == null || !bgimage.complete()) {
        alert("background image not uploaded");
    }
    else {
        var a = bgimage.getWidth();
        if (a > fgimage.getWidth()) {
            a = fgimage.getWidth();
        }
        var b = bgimage.getHeight();
        if (b > fgimage.getHeight()) {
            b = fgimage.getHeight();
        }
        outimage = new SimpleImage(a, b);
        for (var pixel of fgimage.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            if (x < bgimage.getWidth() && y < bgimage.getHeight()) {
                var pixel2 = bgimage.getPixel(x, y);
                if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
                    outimage.setPixel(x, y, pixel2);
                }
                else {
                    outimage.setPixel(x, y, pixel);
                }
            }
        }
    }
    outimage.drawTo(canvas);
}
function upload3() {
    var canvas = document.getElementById("can4");
    var filename = document.getElementById("finput3");
    //alert("you choose" + filename);
    f1 = false, f2 = false, f3 = false, f4 = false, f5 = false, f6 = false, f7 = false, f8 = false, f9 = false, f10 = false;
    fgimage2 = new SimpleImage(filename);
    greenimage = new SimpleImage(filename);
    blueimage = new SimpleImage(filename);
    grayimage = new SimpleImage(filename);
    redimage = new SimpleImage(filename);
    pinkimage = new SimpleImage(filename);
    yellowimage = new SimpleImage(filename);
    cyanimage = new SimpleImage(filename);
    orangeimage = new SimpleImage(filename);
    indigoimage = new SimpleImage(filename);
    violetimage = new SimpleImage(filename);
    fgimage2.drawTo(canvas);
}
function grayscale() {
    var canvas = document.getElementById("can5");
    if (f1 == true) {
        grayimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f1 = true;
            for (var pixel of grayimage.values()) {
                var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
                pixel.setRed(avg);
                pixel.setBlue(avg);
                pixel.setGreen(avg);
            }
            grayimage.drawTo(canvas);



            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a gray image filter.";
        }
    }
}
function bluescale() {
    var canvas = document.getElementById("can5");
    if (f2 == true) {
        blueimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            for (var pixel of blueimage.values()) {
                f2 = true;
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(0);
                    pixel.setGreen(0);
                    pixel.setBlue(2 * avg);
                }
                else {
                    pixel.setRed(2 * avg - 255);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(255);
                }
            }
            blueimage.drawTo(canvas);


            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a blue image filter.";
        }
    }
}
function greenscale() {
    var canvas = document.getElementById("can5");
    if (f3 == true) {
        greenimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f3 = true;
            for (var pixel of greenimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(0);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(0);
                }
                else {
                    pixel.setRed(2 * avg - 255);
                    pixel.setGreen(255);
                    pixel.setBlue(2 * avg - 255);
                }
            }
            greenimage.drawTo(canvas);


            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a green image filter.";
        }
    }

}
function redscale() {
    var canvas = document.getElementById("can5");
    if (f4 == true) {
        redimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f4 = true;
            for (var pixel of redimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(0);
                }
                else {
                    pixel.setRed(255);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(2 * avg - 255);
                }
            }
            redimage.drawTo(canvas);
            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a red image filter.";
        }
    }
}

function yellowscale() {
    var canvas = document.getElementById("can5");
    if (f5 == true) {
        yellowimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f5 = true;
            for (var pixel of yellowimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(0);
                }
                else {
                    pixel.setRed(255);
                    pixel.setGreen(255);
                    pixel.setBlue(2 * avg - 255);
                }
            }
            yellowimage.drawTo(canvas);

            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a yellow image filter.";
        }
    }
}

function orangescale() {
    var canvas = document.getElementById("can5");
    if (f6 == true) {
        orangeimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f6 = true;
            for (var pixel of orangeimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(0.8 * avg);
                    pixel.setBlue(0);
                }
                else {
                    pixel.setRed(255);
                    pixel.setGreen(1.2 * avg - 51);
                    pixel.setBlue(2 * avg - 255);
                }
            }
            orangeimage.drawTo(canvas);

            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a orange image filter.";
        }
    }
}

function cyanscale() {
    var canvas = document.getElementById("can5");
    if (f7 == true) {
        cyanimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f7 = true;
            for (var pixel of cyanimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(0);
                    pixel.setGreen(2 * avg);
                    pixel.setBlue(2 * avg);
                }
                else {
                    pixel.setRed(2 * avg - 255);
                    pixel.setGreen(255);
                    pixel.setBlue(255);
                }
            }
            cyanimage.drawTo(canvas);


            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a cyan image filter.";
        }
    }
}

function pinkscale() {
    var canvas = document.getElementById("can5");
    if (f8 == true) {
        pinkimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f8 = true;
            for (var pixel of pinkimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(2 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(2 * avg);
                }
                else {
                    pixel.setRed(255);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(255);
                }
            }
            pinkimage.drawTo(canvas);

            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a pink image filter.";
        }
    }
}

function indigoscale() {
    var canvas = document.getElementById("can5");
    if (f9 == true) {
        indigoimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f9 = true;
            for (var pixel of indigoimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(0.8 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(2 * avg);
                }
                else {
                    pixel.setRed(1.2 * avg - 51);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(255);
                }
            }
            indigoimage.drawTo(canvas);

            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a indigo image filter.";
        }
    }
}

function violetscale() {
    var canvas = document.getElementById("can5");
    if (f10 == true) {
        violetimage.drawTo(canvas);
    }
    else {
        if (fgimage2 == null || !fgimage2.complete()) {
            alert("original image not uploaded");
        }
        else {
            f10 = true;
            for (var pixel of violetimage.values()) {
                var avg = pixel.getRed() + pixel.getBlue() + pixel.getGreen();
                avg = avg / 3;
                if (avg < 128) {
                    pixel.setRed(1.6 * avg);
                    pixel.setGreen(0);
                    pixel.setBlue(1.6 * avg);
                }
                else {
                    pixel.setRed(0.4 * avg + 153);
                    pixel.setGreen(2 * avg - 255);
                    pixel.setBlue(0.4 * avg + 153);
                }
            }

            violetimage.drawTo(canvas);
            var x = document.querySelector('#comment');
            x.innerHTML = "Hey did you like it!,this is a violet image filter.";
        }
    }
}

function downloadCanvas() {
    // Get the data URI of the canvas
    var canvas = document.getElementById("can4");
    var dataURL = canvas.toDataURL("image/png");

    // Create a temporary link element
    var link = document.createElement("a");
    link.download = "canvas.png";
    link.href = dataURL;

    // Click the link to start the download
    link.click();
}