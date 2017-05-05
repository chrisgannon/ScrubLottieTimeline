window.ScrubBodymovinTimeline = function(tl) {

    var onLoaded = function() {

        var box = document.createElement('div'),
            mouseX, mouseY, gGreen = '#53A018',
            mousePercentX;

        box.style.width = "48px";
        box.style.height = "auto";
        box.style.borderRadius = "10px";
        box.style.position = "absolute";
        box.style.color = gGreen;
        box.style.textAlign = "center";
        box.style.userSelect = "none";
        box.style.fontSize = "12px";
        box.style.lineHeight = "1.8";
        box.style.backgroundColor = '#262626';
        box.style.fontFamily = 'Helvetica, Arial, sans-serif';


        document.body.appendChild(box);
        document.body.onmousemove = mouseMove;
        document.body.onmouseover = mouseOver;
        document.body.onmouseout = mouseOut;
        document.body.ondblclick = function(e) {
            if (!document.body.onmousemove) {
                box.style.color = gGreen;
                document.body.onmousemove = mouseMove;
                document.body.onmouseover = mouseOver;
                document.body.onmouseout = mouseOut;
                return;
            }

            box.style.color = '#A31632';
            document.body.onmousemove = null;
            document.body.onmouseover = null;
            document.body.onmouseout = null;

        }

        function mouseMove(e) {
            box.innerHTML = parseFloat(tl.currentFrame).toFixed(2);
            mouseX = e.pageX, mouseY = e.pageY, mousePercentX = (mouseX / window.innerWidth) * tl.totalFrames;

            tl.goToAndStop(mousePercentX, true);
            box.style.left = (mouseX >= (window.innerWidth - 48)) ? mouseX - 48 + 'px' : mouseX + 'px'
            box.style.top = (mouseY <= 20) ? mouseY + 20 + 'px' : mouseY - 20 + 'px'


        }

        function mouseOver(e) {
            tl.stop();
            tl.play(0);
            box.style.display = "block";
        }

        function mouseOut(e) {
            tl.goToAndPlay(e.pageX / (window.innerWidth) * tl.totalFrames, true);
            box.style.display = "none";
        }


    }
    if (tl.isLoaded) {

        onLoaded();
    } else {

        tl.addEventListener('DOMLoaded', onLoaded)
    }





}
