const NOTESDIV=document.querySelector('#Notes');

Redvoilet=()=>{
    fetch('../DATA/Cake.txt')

    .then(res =>res.text())

    .then((result) => {
        NOTESDIV.innerHTML=result;
    }).catch((err) => {
        console.log(err)
    });
}

//BANANA CAKES

BananaCake=()=>{
    fetch('../DATA/BananaCake.txt')

    .then(res =>res.text())

    .then((result) => {
        NOTESDIV.innerHTML=`
        <p>${result}</p>
        `;
    }).catch((err) => {
        console.log(err)
    }); 
}