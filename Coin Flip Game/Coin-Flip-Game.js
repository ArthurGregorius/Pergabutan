let head= 0;
let tails= 0;
let coin= document.querySelector(".coin");
let flipBtn= document.querySelector("#flip-button");
let resetBtn= document.querySelector("#reset-button");

flipBtn.addEventListener("click", ()=>{
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i)
    {
        setTimeout(function(){
            coin.style.animation = "spin-head 0.5s forwards";
        }, 100);
        head++
    }
    else
    {
        setTimeout(function(){
            coin.style.animation = "spin-tails 0.5s forwards";
        }, 100);
        tails++
    }
    setTimeout(updateStats, 300);
    dissableButton();
});

function updateStats()
{
    document.querySelector("#head-count").textContent = `Head : ${head}`;
    document.querySelector("#tails-count").textContent = `Tails : ${tails}`;
}

function dissableButton()
{
    flipBtn.disabled=true;
    setTimeout(function(){
        flipBtn.disabled=false;
    }, 3000);
}

resetBtn.addEventListener("click", ()=>{
    coin.style.animation="none";
    head=0;
    tails=0;
    updateStats();
})