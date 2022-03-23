$('nav ul li a').click(function(){
    let thisSection = $(this).attr('href');
    let thisLink = $(this);
    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top - 200
    }, 400, 'easeOutCirc', function(){
        $('nav ul li a').removeAttr('class');
        $(thisLink).addClass('selected');
    })
})

$(window).on('load', function(){
    let allLinks = $('nav ul li a');
    let posts = $('section');
    let pageTop;
    let counter = 0;
    let prevCounter = 0;
    let doneResizing;
    let postTops = [];

    resetPosition();

    $(window).scroll(function(){
        pageTop = $(window).scrollTop() + 210;
        if(pageTop > postTops[counter + 1]){
            counter++;
        }else if(counter > 0 && pageTop < postTops[counter]){
            counter--;
        }
        if(counter != prevCounter){
            $(allLinks).removeAttr('class');
            $('nav ul li a').eq(counter).addClass('selected');
            prevCounter = counter;
        }
    });

    $(window).on('resize', function(){
        clearTimeout(doneResizing);
        doneResizing = setTimeout(function(){
            resetPosition();
        }, 800);
    });
    
    function resetPosition(){
        postTops = [];
        posts.each(function(){
            postTops.push(Math.floor($(this).offset().top));
        });
    
        let pagePosition = $(window).scrollTop() + 210;
        counter = 0;
    
        for(let i = 0; i < postTops.length; i++){
            if(pagePosition > postTops[i]){counter++;}
        }
        counter--;
    
        $(allLinks).removeAttr('class');
        $('nav ul li a').eq(counter).addClass('selected');
    }
})

