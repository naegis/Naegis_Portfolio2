var slideImg = document.getElementByID("slideImg");

        var images = new Array(
            "img1.jpg",
            "zhongli.png",
            "img3.jpg",
            "scara.png",
            "img5.jpg",
            "img8.jpg",
            "img9.jpg",
            "img7.jpg"

        );

        var len = images.length;
        var i = 0;

        function slider(){
         if(i > len-1){
            i = 0;
        }

        slideImg.src = images[i];
        i++;
        setTimeout('slider()',3000);
    }