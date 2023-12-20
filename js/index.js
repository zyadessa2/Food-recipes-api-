function closeAll(){
    $('#home').addClass('d-none')
    $('#details').addClass('d-none')
    $('#Search').addClass('d-none')
    $('#category').addClass('d-none')
    $('#categorymenu').addClass('d-none')
    $('#area').addClass('d-none')
    $('#ingrediens').addClass('d-none')
    $('#contactPage').addClass('d-none')
}

function closenavafter(){
    let boxWidth = $(".left-menu .nav-tab").outerWidth()
        $(".left-menu").animate({left: -boxWidth}, 500)
        $(".open-close-icon2").removeClass("d-none");
        $(".open-close-icon1").addClass("d-none");
}


//louding
$(document).ready(function(){
    $('.sk-cube-grid').fadeOut(1000 , function(){
        $('#louding').fadeOut()
    })
})

function loud(){
    $(document).ready(function(){
        $('.sk-cube-grid').fadeOut(1000 , function(){
            $('#louding').fadeOut()
        })
    })
}



//close & open nav
    $(".open-close-icon2").click(function(){
        $(".left-menu").animate({left: 0}, 500)
    $(".open-close-icon2").addClass("d-none");
    $(".open-close-icon1").removeClass("d-none");
    $(".links li").animate({top: 0}, 1000)
    $('.links ul').show(1000)
    })


    $(".open-close-icon1").click(function(){
        let boxWidth = $(".left-menu .nav-tab").outerWidth()
        $(".left-menu").animate({left: -boxWidth}, 500)
    
        $(".open-close-icon2").removeClass("d-none");
        $(".open-close-icon1").addClass("d-none");
        $('.links ul').hide(1000)
        $(".links li").animate({top: 200}, 500)
    })
    


//display home
let mainMenu = [];
async function getMainMenu() {
    let response =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let finallres = await response.json()
    mainMenu.push(finallres.meals)
    displayMenu(mainMenu[0])
}
getMainMenu()

function displayMenu(arr){
    let cartona = ``;
    for(let i = 0 ; i<arr.length ; i++){
        cartona +=`
        <div class="col-md-3 card-name p-2" onclick="details(${i}) " >
            <div class="img img-thumbnail position-relative">
                <h3 id="info" onclick="clearInput()"  class="overlay  position-absolute">${arr[i].strMeal}</h3>
                <img class="w-100" src="${arr[i].strMealThumb}" alt="">
            </div>
        </div>
    `
    }
    document.getElementById('mainMenurow').innerHTML = cartona;
}

//display details
function details(index){
    closeAll()
    closenavafter()
    $('#details').removeClass('d-none')
    
    let cartona = 
    `
    <div class="col-md-4">
                    <div class="img-details w-100">
                        <img class="w-100 img-thumbnail" src="${mainMenu[0][index].strMealThumb}" alt="">
                    </div>
                    <h3>${mainMenu[0][index].strMeal}</h3>
                </div>
                <div class="col-md-8">
                    <h4>Instruction</h4>
                    <p>${mainMenu[0][index].strInstructions}</p>
                    <h4>Area : ${mainMenu[0][index].strArea}</h4>
                    <h4>Category : ${mainMenu[0][index].strCategory}</h4>
                    <div class="recipe">
                        <h4>Recipes :</h4>
                        <ul class="d-flex flex-wrap">
                            <li class=" recipe-li p-0  m-2 p-0">${mainMenu[0][index].strMeasure1}${mainMenu[0][index].strIngredient1}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure2}${mainMenu[0][index].strIngredient2}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure3}${mainMenu[0][index].strIngredient3}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure4}${mainMenu[0][index].strIngredient4}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure5}${mainMenu[0][index].strIngredient5}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure6}${mainMenu[0][index].strIngredient6}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure7}${mainMenu[0][index].strIngredient7}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure8}${mainMenu[0][index].strIngredient8}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure9}${mainMenu[0][index].strIngredient9}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure10}${mainMenu[0][index].strIngredient10}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure11}${mainMenu[0][index].strIngredient11}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure12}${mainMenu[0][index].strIngredient12}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure13}${mainMenu[0][index].strIngredient13}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure14}${mainMenu[0][index].strIngredient14}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure15}${mainMenu[0][index].strIngredient15}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure16}${mainMenu[0][index].strIngredient16}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure17}${mainMenu[0][index].strIngredient17}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure18}${mainMenu[0][index].strIngredient18}</li>
                            <li class="  recipe-li p-0 m-2">${mainMenu[0][index].strMeasure19}${mainMenu[0][index].strIngredient19}</li>
                            <li class=" recipe-li p-0 m-2 p-0">${mainMenu[0][index].strMeasure20}${mainMenu[0][index].strIngredient20}</li>
                        </ul>
                    </div>
                    <h4>Tags: ${mainMenu[0][index].strTags}</h4>
                    <div class="more-info mt-4">
                        <button class="btn btn-warning"><a class="text-white" href="${mainMenu[0][index].strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a class="text-white" href="${mainMenu[0][index].strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
    `;
    document.getElementById('rowDetails').innerHTML = cartona;
}



//search by name
let searchbox = []
function turnSearch(){
    closeAll()
    closenavafter()
    $('#Search').removeClass('d-none')
}

async function getsearch(product){
    loud()
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${product}`)
    let finallres = await response.json() 
    searchbox = finallres.meals
    console.log(searchbox);
    displaySearch(searchbox)
}

//search by letter
async function searchFLetter(productL){
    loud()
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${productL}`)
    let finallres = await response.json() 
    searchbox = finallres.meals
    console.log(searchbox);
    displaySearch(searchbox)
}

function displaySearch(arr){
    let cartona = ``;
    for(let i = 0 ; i<arr.length ; i++){
        cartona +=`
        <div class="col-md-3 card-name p-2" onclick="detailSearch(${i})" >
            <div class="img img-thumbnail position-relative">
                <h3 id="info"  class="overlay  position-absolute">${arr[i].strMeal}</h3>
                <img class="w-100" src="${arr[i].strMealThumb}" alt="">
            </div>
        </div>
    `
    }
    document.getElementById('productSearch').innerHTML = cartona;
}

function detailSearch(indexsearch){
    closeAll()
    closenavafter()
    $('#details').removeClass('d-none')
    let cartona = 
    `
    <div class="col-md-4">
                    <div class="img-details w-100">
                        <img class="w-100 img-thumbnail" src="${searchbox[indexsearch].strMealThumb}" alt="">
                    </div>
                    <h3>${searchbox[indexsearch].strMeal}</h3>
                </div>
                <div class="col-md-8">
                    <h4>Instruction</h4>
                    <p>${searchbox[indexsearch].strInstructions}</p>
                    <h4>Area : ${searchbox[indexsearch].strArea}</h4>
                    <h4>Category : ${searchbox[indexsearch].strCategory}</h4>
                    <div class="recipe">
                        <h4>Recipes :</h4>
                        <ul class="d-flex flex-wrap">
                            <li class=" recipe-li p-0  m-2 p-0">${searchbox[indexsearch].strMeasure1}${searchbox[indexsearch].strIngredient1}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure2}${searchbox[indexsearch].strIngredient2}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure3}${searchbox[indexsearch].strIngredient3}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure4}${searchbox[indexsearch].strIngredient4}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure5}${searchbox[indexsearch].strIngredient5}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure6}${searchbox[indexsearch].strIngredient6}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure7}${searchbox[indexsearch].strIngredient7}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure8}${searchbox[indexsearch].strIngredient8}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure9}${searchbox[indexsearch].strIngredient9}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure10}${searchbox[indexsearch].strIngredient10}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure11}${searchbox[indexsearch].strIngredient11}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure12}${searchbox[indexsearch].strIngredient12}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure13}${searchbox[indexsearch].strIngredient13}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure14}${searchbox[indexsearch].strIngredient14}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure15}${searchbox[indexsearch].strIngredient15}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure16}${searchbox[indexsearch].strIngredient16}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure17}${searchbox[indexsearch].strIngredient17}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure18}${searchbox[indexsearch].strIngredient18}</li>
                            <li class="  recipe-li p-0 m-2">${searchbox[indexsearch].strMeasure19}${searchbox[indexsearch].strIngredient19}</li>
                            <li class=" recipe-li p-0 m-2 p-0">${searchbox[indexsearch].strMeasure20}${searchbox[indexsearch].strIngredient20}</li>
                        </ul>
                    </div>
                    <h4>Tags: ${searchbox[indexsearch].strTags}</h4>
                    <div class="more-info mt-4">
                        <button class="btn btn-warning"><a class="text-white" href="${searchbox[indexsearch].strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a class="text-white" href="${searchbox[indexsearch].strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
    `;
    document.getElementById('rowDetails').innerHTML = cartona;
}
//clear search
function clearInput() {
    document.getElementById("searchByName").value = "";
    document.getElementById("searchByFirstLetter").value = "";
}


// category sec
function turnCategory(){
    loud()
    closeAll()
    closenavafter()
    $('#category').removeClass('d-none')
    getcategory()
}

let categorybox = []
async function getcategory(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let finallres = await response.json()
    categorybox = finallres.categories
    // console.log(categorybox);
    displayCategory(categorybox)
}

function displayCategory(arr){
    let cartona = ``;
    for(let i = 0 ; i<arr.length ; i++){
        cartona +=`
        <div class="col-md-3 card-name  p-2 " onclick="getcategorymenu(${i})" >
                    <div class="img  position-relative">
                        <div class="overlay  position-absolute d-flex flex-column">
                            <h3 class="fs-2">${arr[i].strCategory}</h3>
                            <p class="fs-6 fw-lighter w-75 overflow-hidden text-center">${arr[i].strCategoryDescription}</p>
                        </div>
                        <img class="w-100" src="${arr[i].strCategoryThumb}" alt="">
                    </div>
                </div>
    `
    }
    document.getElementById('detailsCategory').innerHTML = cartona;
}

let categorymenu = []
async function getcategorymenu(categoryname){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorybox[categoryname].strCategory}`)
    let finallres = await response.json()
    categorymenu = finallres.meals
    // console.log(categorymenu);
    displaycategorymenu(categorymenu)
}

function displaycategorymenu(arr){
let cartona = ``;
    for(let i = 0 ; i<arr.length ; i++){
        cartona +=`
        <div class="col-md-3 card-name p-2" onclick="getcategoryid(${i})"  >
            <div class="img img-thumbnail position-relative">
                <h3 id="info" onclick="clearInput()"  class="overlay  position-absolute">${arr[i].strMeal}</h3>
                <img class="w-100" src="${arr[i].strMealThumb}" alt="">
            </div>
        </div>
    `
    }
    document.getElementById('detailsCategory').innerHTML = cartona;
}

let categorymenudetails = [] 
async function getcategoryid(det){
    // console.log(categorymenu[det].idMeal)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categorymenu[det].idMeal}`);
    let finallres = await response.json();
    categorymenudetails = finallres
    displaycategorydetails(categorymenudetails.meals[0])
}

function displaycategorydetails(indexsearch){
    closeAll()
    closenavafter()
    $('#details').removeClass('d-none')
    let cartona = 
    `
    <div class="col-md-4">
                    <div class="img-details w-100">
                        <img class="w-100 img-thumbnail" src="${indexsearch.strMealThumb}" alt="">
                    </div>
                    <h3>${indexsearch.strMeal}</h3>
                </div>
                <div class="col-md-8">
                    <h4>Instruction</h4>
                    <p>${indexsearch.strInstructions}</p>
                    <h4>Area : ${indexsearch.strArea}</h4>
                    <h4>Category : ${indexsearch.strCategory}</h4>
                    <div class="recipe">
                        <h4>Recipes :</h4>
                        <ul class="d-flex flex-wrap">
                            <li class=" recipe-li p-0  m-2 p-0">${indexsearch.strMeasure1}${indexsearch.strIngredient1}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure2}${indexsearch.strIngredient2}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure3}${indexsearch.strIngredient3}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure4}${indexsearch.strIngredient4}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure5}${indexsearch.strIngredient5}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure6}${indexsearch.strIngredient6}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure7}${indexsearch.strIngredient7}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure8}${indexsearch.strIngredient8}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure9}${indexsearch.strIngredient9}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure10}${indexsearch.strIngredient10}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure11}${indexsearch.strIngredient11}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure12}${indexsearch.strIngredient12}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure13}${indexsearch.strIngredient13}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure14}${indexsearch.strIngredient14}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure15}${indexsearch.strIngredient15}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure16}${indexsearch.strIngredient16}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure17}${indexsearch.strIngredient17}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure18}${indexsearch.strIngredient18}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure19}${indexsearch.strIngredient19}</li>
                            <li class=" recipe-li p-0 m-2 p-0">${indexsearch.strMeasure20}${indexsearch.strIngredient20}</li>
                        </ul>
                    </div>
                    <h4>Tags: ${indexsearch.strTags}</h4>
                    <div class="more-info mt-4">
                        <button class="btn btn-warning"><a class="text-white" href="${indexsearch.strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a class="text-white" href="${indexsearch.strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
    `;
    document.getElementById('rowDetails').innerHTML = cartona;
}


//area section
function turnarea(){
    loud()
    closeAll()
    closenavafter()
    $('#area').removeClass('d-none')
    getarea()
}

let areamenu =[]
async function getarea(){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let finallres = await response.json();
    areamenu = finallres
    // console.log(areamenu.meals);
    displayarea(areamenu.meals)
}

function displayarea(arr){
    let cartona = ``;
    for(let i = 0 ; i<arr.length ; i++){
        cartona +=`
        <div class="col-md-3 text-white pb-3 text-center" onclick="getareaproducts(${i})">
                    <i class="fa-solid fa-house pb-2 text-white"></i>
                    <h2 class="text-white">${arr[i].strArea}</h2>
                </div>
    `
    }
    document.getElementById('rowarea').innerHTML = cartona;
}

let areamenuproducts = []
async function getareaproducts(area){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areamenu.meals[area].strArea}`);
    let finallres = await response.json();
    areamenuproducts = finallres
    // console.log(areamenuproducts.meals);
    displayareaproducts(areamenuproducts.meals)
}

function displayareaproducts(arr){
    let cartona = ``;
    for(let i = 0 ; i<arr.length ; i++){
        cartona +=`
        <div class="col-md-3 card-name p-2" onclick="getareaid(${i})" >
            <div class="img img-thumbnail position-relative">
                <h3 id="info"  class="overlay-area  position-absolute">${arr[i].strMeal}</h3>
                <img class="w-100" src="${arr[i].strMealThumb}" alt="">
            </div>
        </div>
    `
    }
    // console.log(areamenuproducts.meals[0].idMeal)
    document.getElementById('rowarea').innerHTML = cartona;
}

let areamenudetails = []
async function getareaid(det){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${areamenuproducts.meals[det].idMeal}`);
    let finallres = await response.json();
    areamenudetails = finallres
    displayareadetails(areamenudetails.meals[0])
}

async function displayareadetails(indexsearch){
    closeAll()
    closenavafter()
    $('#details').removeClass('d-none')

    console.log(indexsearch);
    let cartona = 
    `
    <div class="col-md-4">
                    <div class="img-details w-100">
                        <img class="w-100 img-thumbnail" src="${indexsearch.strMealThumb}" alt="">
                    </div>
                    <h3>${indexsearch.strMeal}</h3>
                </div>
                <div class="col-md-8">
                    <h4>Instruction</h4>
                    <p>${indexsearch.strInstructions}</p>
                    <h4>Area : ${indexsearch.strArea}</h4>
                    <h4>Category : ${indexsearch.strCategory}</h4>
                    <div class="recipe">
                        <h4>Recipes :</h4>
                        <ul class="d-flex flex-wrap">
                            <li class=" recipe-li p-0  m-2 p-0">${indexsearch.strMeasure1}${indexsearch.strIngredient1}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure2}${indexsearch.strIngredient2}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure3}${indexsearch.strIngredient3}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure4}${indexsearch.strIngredient4}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure5}${indexsearch.strIngredient5}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure6}${indexsearch.strIngredient6}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure7}${indexsearch.strIngredient7}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure8}${indexsearch.strIngredient8}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure9}${indexsearch.strIngredient9}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure10}${indexsearch.strIngredient10}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure11}${indexsearch.strIngredient11}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure12}${indexsearch.strIngredient12}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure13}${indexsearch.strIngredient13}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure14}${indexsearch.strIngredient14}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure15}${indexsearch.strIngredient15}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure16}${indexsearch.strIngredient16}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure17}${indexsearch.strIngredient17}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure18}${indexsearch.strIngredient18}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure19}${indexsearch.strIngredient19}</li>
                            <li class=" recipe-li p-0 m-2 p-0">${indexsearch.strMeasure20}${indexsearch.strIngredient20}</li>
                        </ul>
                    </div>
                    <h4>Tags: ${indexsearch.strTags}</h4>
                    <div class="more-info mt-4">
                        <button class="btn btn-warning"><a class="text-white" href="${indexsearch.strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a class="text-white" href="${indexsearch.strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
    `;
    document.getElementById('rowDetails').innerHTML = cartona;
}

//ingrediens section
function turningrediens(){
    loud()
    closeAll()
    closenavafter()
    $('#ingrediens').removeClass('d-none')
    getingrediens()
}

let ingrediensmenu =[]
async function getingrediens(){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let finallres = await response.json();
    ingrediensmenu = finallres
    // console.log(ingrediensmenu.meals);
    displayingrediens(ingrediensmenu.meals)
}

function displayingrediens(arr){
    let cartona = ``;
    for(let i = 0 ; i<25 ; i++){
        cartona +=`
        <div class="col-md-3 text-white pb-3 overflow-hidden chikk text-center" onclick="getingrediensproducts(${i})">
        <i class="fa-solid fa-drumstick-bite pt-4 pb-2 text-white"></i>
        <h2 class="text-white">${arr[i].strIngredient}</h2>
        <p class="fs-6 text-white fw-lighter overflow-hidden text-center">${arr[i].strDescription}</p>
    </div>
    `
    }
    document.getElementById('rowingrediens').innerHTML = cartona;
}

let ingrediensmenuproducts = []
async function getingrediensproducts(area){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediensmenu.meals[area].strIngredient}`);
    let finallres = await response.json();
    ingrediensmenuproducts = finallres
    // console.log(ingrediensmenuproducts.meals);
    displayingrediensproducts(ingrediensmenuproducts.meals)
}

function displayingrediensproducts(arr){
    let cartona = ``;
    for(let i = 0 ; i<arr.length ; i++){
        cartona +=`
        <div class="col-md-3 card-name p-2" onclick="getingrediensid(${i})" >
            <div class="img img-thumbnail position-relative">
                <h3 id="info"  class="overlay-area  position-absolute">${arr[i].strMeal}</h3>
                <img class="w-100" src="${arr[i].strMealThumb}" alt="">
            </div>
        </div>
    `
    }
    document.getElementById('rowingrediens').innerHTML = cartona;
}

let ingrediensmenudetails = []
async function getingrediensid(det){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingrediensmenuproducts.meals[det].idMeal}`);
    let finallres = await response.json();
    ingrediensmenudetails = finallres
    displayingrediensdetails(ingrediensmenudetails.meals[0])
}

async function displayingrediensdetails(indexsearch){
    closeAll()
    closenavafter()
    $('#details').removeClass('d-none')
    let cartona = 
    `
    <div class="col-md-4">
                    <div class="img-details w-100">
                        <img class="w-100 img-thumbnail" src="${indexsearch.strMealThumb}" alt="">
                    </div>
                    <h3>${indexsearch.strMeal}</h3>
                </div>
                <div class="col-md-8">
                    <h4>Instruction</h4>
                    <p>${indexsearch.strInstructions}</p>
                    <h4>Area : ${indexsearch.strArea}</h4>
                    <h4>Category : ${indexsearch.strCategory}</h4>
                    <div class="recipe">
                        <h4>Recipes :</h4>
                        <ul class="d-flex flex-wrap">
                            <li class=" recipe-li p-0  m-2 p-0">${indexsearch.strMeasure1}${indexsearch.strIngredient1}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure2}${indexsearch.strIngredient2}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure3}${indexsearch.strIngredient3}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure4}${indexsearch.strIngredient4}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure5}${indexsearch.strIngredient5}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure6}${indexsearch.strIngredient6}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure7}${indexsearch.strIngredient7}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure8}${indexsearch.strIngredient8}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure9}${indexsearch.strIngredient9}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure10}${indexsearch.strIngredient10}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure11}${indexsearch.strIngredient11}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure12}${indexsearch.strIngredient12}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure13}${indexsearch.strIngredient13}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure14}${indexsearch.strIngredient14}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure15}${indexsearch.strIngredient15}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure16}${indexsearch.strIngredient16}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure17}${indexsearch.strIngredient17}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure18}${indexsearch.strIngredient18}</li>
                            <li class="  recipe-li p-0 m-2">${indexsearch.strMeasure19}${indexsearch.strIngredient19}</li>
                            <li class=" recipe-li p-0 m-2 p-0">${indexsearch.strMeasure20}${indexsearch.strIngredient20}</li>
                        </ul>
                    </div>
                    <h4>Tags: ${indexsearch.strTags}</h4>
                    <div class="more-info mt-4">
                        <button class="btn btn-warning"><a class="text-white" href="${indexsearch.strSource}" target="_blank">Source</a></button>
                        <button class="btn btn-danger"><a class="text-white" href="${indexsearch.strYoutube}" target="_blank">Youtube</a></button>
                    </div>
                </div>
    `;
    document.getElementById('rowDetails').innerHTML = cartona;
}



$('#contactBtn').click(function () {

    closeAll()
    closenavafter()
    $('#contactPage').removeClass('d-none') ;
    $('#contactPage').addClass('d-block') ;
    
})


function validate() {
    let ctrl =  document.getElementById('nameInput').value;
    let regex = /^[a-zA-Z ]{2,30}$/;
    if (regex.test(ctrl)==false) {
        $('#nameInput').css({borderColor:"red"});
        $('#nameAlert').removeClass('d-none');
        $('#nameAlert').addClass('d-block');
}else{
    $('#nameInput').css({borderColor:""});
    $('#nameAlert').removeClass('d-block');
    $('#nameAlert').addClass('d-none');
}
}
function emailvalidate() {
    let ctrl =  document.getElementById('emailInput').value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(ctrl)==false) {
        $('#emailInput').css({borderColor:"red"});
        $('#emailAlert').removeClass('d-none');
        $('#emailAlert').addClass('d-block');
        
}else{
    $('#emailInput').css({borderColor:""});
    $('#emailAlert').removeClass('d-block');
    $('#emailAlert').addClass('d-none');
}

}
function phonevalidate() {
    let ctrl =  document.getElementById('phoneInput').value;
    let regex = /^01[0125][0-9]{8}$/;
    if (regex.test(ctrl)==false) {
        $('#phoneInput').css({borderColor:"red"});
        $('#phoneAlert').removeClass('d-none');
        $('#phoneAlert').addClass('d-block');
        
}else{
    $('#phoneInput').css({borderColor:""});
    $('#phoneAlert').removeClass('d-block');
    $('#phoneAlert').addClass('d-none');
}

}
function agevalidate() {
    let ctrl =  document.getElementById('ageInput').value;
    let regex =/^[1-9]?[0-9]{1}$|^100$/;
    if (regex.test(ctrl)==false) {
        $('#ageInput').css({borderColor:"red"});
        $('#ageAlert').removeClass('d-none');
        $('#ageAlert').addClass('d-block');
        
}else{
    $('#ageInput').css({borderColor:""});
    $('#ageAlert').removeClass('d-block');
    $('#ageAlert').addClass('d-none');
}

}
function passvalidate() {
    let ctrl =  document.getElementById('passwordInput').value;
    let regex =/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
    if (regex.test(ctrl)==false) {
        $('#passwordInput').css({borderColor:"red"});
        $('#passwordAlert').removeClass('d-none');
        $('#passwordAlert').addClass('d-block');
        
}else{
    $('#passwordInput').css({borderColor:""});
    $('#passwordAlert').removeClass('d-block');
    $('#passwordAlert').addClass('d-none');
}
// 
}
function repassvalidate() {
    let ctrl =  document.getElementById('repasswordInput').value;
    let ctrl1= document.getElementById('passwordInput').value;
    if (ctrl!=ctrl1) {
        $('#repasswordInput').css({borderColor:"red"});
        $('#repasswordAlert').removeClass('d-none');
        $('#repasswordAlert').addClass('d-block');
        
}else{
    $('#repasswordInput').css({borderColor:""});
    $('#repasswordAlert').removeClass('d-block');
    $('#repasswordAlert').addClass('d-none');
}
// 
}