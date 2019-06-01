
let inputProducts = document.getElementById('products_number');
let inputOrders = document.getElementById('monthly_orders');
let priceProducts = document.querySelector(".calculator-result").firstElementChild;
let priceOrders= document.querySelector(".calculator-result").children[1];

let productsSummary = 0;


inputProducts.addEventListener('keyup', function(){
    priceProducts.children[1].innerText = (+inputProducts.value) + ' * $0.5';
    priceProducts.children[2].innerText = "$" + (inputProducts.value*0.5);
    priceProducts.classList.remove("hidden");
    
    productsSummary = (inputProducts.value*0.5);
    
    if(inputProducts.value.length == 0) {
        priceProducts.classList.add("hidden");
        }
    totalResult();
})

let orderSummary = 0;

inputOrders.addEventListener('keyup', function() {
    priceOrders.children[1].innerText = (+inputOrders.value) + ' * $0.25';
    priceOrders.children[2].innerText = '$' + (inputOrders.value * 0.25);
    priceOrders.classList.remove('hidden');

    orderSummary = (inputOrders.value*0.25);

    if(inputOrders.value.length == 0) {
        priceOrders.classList.add('hidden');
    }
    totalResult();
})


let choose = document.querySelector(".calculator-form__shown");
let optionsList = document.querySelector(".calculator-form__hidden");

let packageSummary = 0;

choose.addEventListener("click",function(){
    optionsList.classList.toggle("hidden");
    if(choose.style.backgroundImage == 'url("./images/items/Arrow_Up.svg")') {
        choose.style.backgroundImage = 'url("./images/items/Arrow_Down.svg")';
    }else {
        choose.style.backgroundImage = 'url("./images/items/Arrow_Up.svg")';
    }
});

let chooseBtn = document.getElementById('choose_btn');
let basicOpt = document.querySelector('.calculator-form__hidden').firstElementChild;
let professionalOpt = document.querySelector('.calculator-form__hidden').children[1];
let premiumOpt = document.querySelector('.calculator-form__hidden').children[2];
let packagePrice = document.querySelector('.calculator-result').children[2];

basicOpt.addEventListener('click', function(){
    chooseBtn.innerText = 'Podstawowy';
    packagePrice.children[1].innerText = 'Podstawowy';
    packagePrice.children[2].innerText = '$0'
    packagePrice.classList.remove('hidden');
    packageSummary = 0;
    totalResult();
})

professionalOpt.addEventListener('click', function() {
    chooseBtn.innerText = 'Profesjnalny';
    packagePrice.children[1].innerText = 'Profesjonalny';
    packagePrice.children[2].innerText = '$25';
    packagePrice.classList.remove('hidden');
    packageSummary = 25;
    totalResult();
})

premiumOpt.addEventListener('click', function() {
    chooseBtn.innerText = 'Premium';
    packagePrice.children[1].innerText = 'Premium';
    packagePrice.children[2].innerText = '$65';
    packagePrice.classList.remove('hidden');
    packageSummary = 65;
    totalResult();
})

let accountCheck = document.querySelector('.calculator-form label:nth-of-type(3)').firstElementChild;
let terminalCheck = document.querySelector('.calculator-form label:nth-of-type(4)').firstElementChild;
let accountantPrice = document.querySelector('.calculator-result').children[3];
let terminalPrice = document.querySelector('.calculator-result').children[4];
let accountantChecked = false;
let terminalChecked = false;

let accountantSummary = 35;
let terminalSummary = 5;

accountCheck.addEventListener('click', function(){
    accountantPrice.classList.toggle('hidden');
    if(accountantChecked == false) {
        accountantChecked = true;
    }else {
        accountantChecked = false;
    }
    totalResult();
})

terminalCheck.addEventListener('click', function() {
    terminalPrice.classList.toggle('hidden');
    if(terminalChecked == false) {
        terminalChecked = true;
    }else {
        terminalChecked = false;
    }
    totalResult();
})


let totalResult = function() {
    summary = (productsSummary) + (orderSummary) + (packageSummary) + ((accountantSummary * accountantChecked)) + ((terminalSummary * terminalChecked));
    document.querySelector('#summary-total').innerText = '$' + summary;
};