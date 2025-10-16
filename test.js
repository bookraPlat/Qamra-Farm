function tapToView (tapToViewURL){
    
    const tapToViewOverlay = document.querySelector('.image-display-overlay');
    tapToViewOverlay.classList.add('image-display-overlay-toggled')

    const viewedHolder = document.querySelector('.viewed-image-holder');

    viewedHolder.style.backgroundImage = `url(${tapToViewURL})`;

};



const defaultGalleryCategory = document.querySelector('.gallery-category1');
const defaultGalleryContainer = document.querySelector('.category1-items-container')
const category1PortraitVersion = document.querySelector('.category1-portrait')
category1PortraitVersion.classList.add('category-toggled-version');

if (defaultGalleryCategory){
defaultGalleryCategory.classList.add('gallery-category-active')};
if (defaultGalleryContainer){
defaultGalleryContainer.classList.add('category-items-container-toggled')} ;
rect = document.querySelector('.gallery-category1').getBoundingClientRect();
const xCoordinate = rect.x;
console.log(xCoordinate);
console.log(window.innerWidth);
const style = window.getComputedStyle(document.querySelector('.gallery-category1'));
const width = style.width;
const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
console.log(`${containerXCoordinates}px are left of container`);
console.log(xCoordinate - containerXCoordinates + 'is the final result')

const toggleUnderline = document.querySelector('.toggle-underline');
toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
toggleUnderline.style.width = width;




function galleryCategoryToggle(categoryClicked , itsContainer){
    if(document.querySelector('.gallery-category-active')){
        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        document.querySelector('.category-items-container-toggled')? document.querySelector('.category-items-container-toggled').classList.remove('category-items-container-toggled') : console.log('There is no toggled container');
        itsContainer.classList.add('category-items-container-toggled');
        console.log(itsContainer);        
        categoryClicked.classList.add('gallery-category-active');
        rect = categoryClicked.getBoundingClientRect();
        const xCoordinate = rect.x;
        console.log(xCoordinate);
        console.log(window.innerWidth);
        const style = window.getComputedStyle(categoryClicked);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        console.log(`${containerXCoordinates}px are left of container`);
        console.log(xCoordinate - containerXCoordinates + 'is the final result')

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
        toggleUnderline.style.width = width;


        
    }else{
        categoryClicked.classList.add('gallery-category-active');
        document.querySelector('.category-items-container-toggled')? document.querySelector('.category-items-container-toggled').classList.remove('category-items-container-toggled') : console.log('There is no toggled container');
        console.log(itsContainer)
        itsContainer.classList.add('category-items-container-toggled');
        rect = categoryClicked.getBoundingClientRect();
        const xCoordinate = rect.x;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;

        const style = window.getComputedStyle(categoryClicked);
        const width = style.width;
        console.log(width);

        console.log(xCoordinate);
        console.log(window.innerWidth);
        console.log(xCoordinate - (window.innerWidth * 0.0674418605));
        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
        toggleUnderline.style.width = width;



    }

    const portrait = itsContainer.querySelector('.portrait-mode');
    console.log(portrait)
    const landscape = itsContainer.querySelector('.landscape-mode');    
    console.log(landscape)

   
        portrait.classList.add('category-toggled-version');
        landscape.classList.remove('category-toggled-version'); 

        const galleryModeSwitchToggle = document.querySelector('.gallery-toggle-bar');
        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle');





};

function galleryModeSwitch(){
    const toggledCategoryContainer = document.querySelector('.category-items-container-toggled');
    console.log(toggledCategoryContainer);
    const portrait = toggledCategoryContainer.querySelector('.portrait-mode');
    console.log(portrait)
    const landscape = toggledCategoryContainer.querySelector('.landscape-mode');    
    console.log(landscape)
    const galleryModeSwitchToggle = document.querySelector('.gallery-toggle-bar');


    
    
    
    if(portrait.classList.contains('category-toggled-version')){
        portrait.classList.remove('category-toggled-version');


        landscape.classList.add('category-toggled-version');

        galleryModeSwitchToggle.classList.remove('p-toggle');
        galleryModeSwitchToggle.classList.add('l-toggle');




        document.querySelector('.landscape-title').style.fontWeight = 'bold';
        document.querySelector('.portrait-title').style.fontWeight = '300';


    }else if (landscape.classList.contains('category-toggled-version')){

        portrait.classList.add('category-toggled-version');



        landscape.classList.remove('category-toggled-version'); 

        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle')



        document.querySelector('.landscape-title').style.fontWeight = '300';
        document.querySelector('.portrait-title').style.fontWeight = 'bold';


    }else{
        portrait.classList.add('category-toggled-version');

        landscape.classList.remove('category-toggled-version'); 


        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle')


        document.querySelector('.landscape-title').style.fontWeight = '300';
        document.querySelector('.portrait-title').style.fontWeight = 'bold';



    }
}




