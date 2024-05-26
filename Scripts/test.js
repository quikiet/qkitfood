window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('wrapper');
    this.setTimeout(function(){
        loading.classList.add('hidden');
        content.style.opacity = '1';
    },3000);
});



function open_menu(){
    document.getElementById('sidebar_container').style.display="block";
    document.getElementById('sidebar_container').style.opacity="1";
    document.getElementById('sidebar_container').style.height="100%";
    document.getElementById('menu_mn').style.visibility="hidden";
    document.getElementById('menu_cl').style.visibility="visible";
};

function open_close(){
    document.getElementById('sidebar_container').style.display="none";
    document.getElementById('sidebar_container').style.height="0%";
    document.getElementById('sidebar_container').style.opacity="0";
    document.getElementById('menu_mn').style.visibility="visible";
    document.getElementById('menu_cl').style.visibility="hidden";
};
    


$(document).ready(function(){
$('#sub--menu').click(function(){
    // var sub = $(this).next('.submenu');
    // if(sub.is(':visible')){
    //     sub.slideUp();
    // }
    // else
    //     sub.slideDown();
        $(this).next('.submenu').slideToggle();
        $(this).find('.bxs-down-arrow').toggleClass('rotate');
});
});


// slide show

const slideShow = document.querySelector('.list_images');
const slideShowImg = document.getElementsByClassName('slideshow_img');

const btnLeft = document.querySelector('.btn_left');
const btnRight = document.querySelector('.btn_right');

let current = 0;

const handleChangeSlide = () =>{
    
    if(current == slideShowImg.length - 1){
        current = 0;
        let widthImgs = slideShowImg[0].offsetWidth
        slideShow.style.transform = `translateX(${0}px)`;
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index_items-' + current).classList.add('active');
    }
    else{
        current++;
        let widthImgs = slideShowImg[0].offsetWidth;
        slideShow.style.transform = `translateX(${widthImgs * -1 * current}px)`;      
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index_items-' + current).classList.add('active');
   }    
}

let handleChange = setInterval(handleChangeSlide, 3000);

// click btn 
btnRight.addEventListener("click", function(){
    clearInterval(handleChange);
    handleChangeSlide();
    handleChange = setInterval(handleChangeSlide,3000);
})

btnLeft.addEventListener("click", function(){
    clearInterval(handleChange);
    if(current == 0){
        current = slideShowImg.length - 1;
        let widthImgs = slideShowImg[0].offsetWidth
        slideShow.style.transform = `translateX(${widthImgs * -1 * current}px)`
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index_items-' + current).classList.add('active');
    }
    else{
        current--
        let widthImgs = slideShowImg[0].offsetWidth
        slideShow.style.transform = `translateX(${widthImgs * -1 * current}px)`
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index_items-' + current).classList.add('active');
    }
})

function currentSlide(n){
    clearInterval(handleChange);
    console.log(n)
    let widthImgs = slideShowImg[0].offsetWidth;
    slideShow.style.transform = `translateX(${widthImgs * -1 * n}px)`;
    console.log(widthImgs * -1 * n);
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.index_items-' + n).classList.add('active');
    handleChange = setInterval(handleChangeSlide, 2000);
}

// see more

document.getElementById('seeMoreButton').addEventListener('click', function(){
    let seeMoreElement = document.querySelectorAll('.seemore');
    seeMoreElement.forEach(element => {
        if(element.style.display === 'none')
        {
            element.style.display = 'block';
            document.getElementById('seeMoreButton').textContent = 'Ẩn bớt';
        }
        else
        {
            element.style.display = 'none';
            document.getElementById('seeMoreButton').textContent = 'Xem thêm';
        }
    });

});

document.querySelectorAll('.like').forEach(function(e){
    e.addEventListener('click',function(){
        this.classList.toggle('heartRed');
        this.classList.toggle('heartWhite');
    });
});



let btn = document.getElementById('pushToTop');
    btn.addEventListener('click', function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        btn.style.display = 'block';
        btn.style.opacity = '1';
    }
    else{
        btn.style.opacity = '0';
        btn.style.display = 'none';
    }
}




document.getElementById('menu_btn').addEventListener('click',function(){
        document.getElementById('sidebar').classList.remove('hidden');
        document.getElementById('menu_btn').style.display = 'none';
        document.getElementById('menu_tablet').style.width = '0';
        document.getElementById('menu_tablet').style.height = '0';
        document.getElementById('menu_tablet').style.marginTop = '0';

})

document.getElementById('close_btn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.add('hidden');
    document.getElementById('sidebar').style.visibility = 'visible';
    document.getElementById('menu_btn').style.display = 'block';
    document.getElementById('menu_tablet').style.width = '100%';
    document.getElementById('menu_tablet').style.height = '41px';
    document.getElementById('menu_tablet').style.marginTop = '20px';
    setTimeout(function(){
        document.getElementById('menu_tablet').style.display = 'block'
    },600);
});
