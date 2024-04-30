// click submenu
document.getElementById("sub--menu").addEventListener("click", function(){
    var submenu_i = document.querySelector(".submenu_items");
    if(submenu_i){
        if(window.getComputedStyle(submenu_i).display === "none")
        {
            submenu_i.style.display = "block";
        }
        else
        {
            submenu_i.style.display = "none";
        }
    }
});

// slide show

//lấy phần tử DOM

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
