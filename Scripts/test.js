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
        $(this).next('.submenu').slideToggle(1000);
        $(this).find('.bxs-down-arrow').toggleClass('rotate');
});
});


// slide show

const slideShow = document.querySelector('.list_images');
const slideShowImg = document.getElementsByClassName('slideshow_img');

const btnLeft = document.querySelector('.btn_left');
const btnRight = document.querySelector('.btn_right');
// lấy pos
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