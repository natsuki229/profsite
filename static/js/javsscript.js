var btn=document.getElementById("btn")
var hyou=document.getElementById("contents")
btn.addEventListener("click" ,function(){
    hyou.style.display="block";
    btn.style.display="none";
});

//ローディング画面
window.onload = function() {
    const spinner = document.getElementById('loading');
    //"loaded"というCSSクラスをspinner要素に追加します。このクラスの追加により、"loaded"クラスに関連付けられたCSSルールが適用され、要素にビジュアルスタイリングやエフェクトが適用されることが想定されています。
    spinner.classList.add('loaded');
  }

//HTMLドキュメント内のid属性が「news3」である要素を取得し、それを変数「newsbtn」に代入します。news3はクリック前の方のid。
var newsbtn=document.getElementById("news3")
//news22はクリック後に表示される方のid。
var news=document.getElementById("news22")
//クリックしたらnewsbtnが非表示になり、newsが表示になる。
newsbtn.addEventListener("click",function(){
    news.style.display="block";
    newsbtn.style.display="none";
});

var menubtn=document.getElementById("menu3")
var menu=document.getElementById("menu22")
menubtn.addEventListener("click",function(){
    menu.style.display="block";
    menubtn.style.display="none";
});

//pagetopに戻るボタン
//functionとhtmlの方にあるonclickでできてるパターン
function sc() {
    //pagetopの一番上の要素がheaderなので、その要素のトップの座標をgetBounding...で取得する
    const Top = document.getElementById("header").getBoundingClientRect().top;
    const Left = document.getElementById("header").getBoundingClientRect().left;
    window.scrollTo({
        //変数TopとLeftに座標入っているから座標をそれにする
       left:Left,
        top:Top,
        //pagetopに戻るときの動き方はスムーズにスッといく
       behavior:'smooth'
    });
};


//menuのtopに移動する
//htmlには何も書かず、javascriptにclickとfunctionがあるパターン
const m =document.getElementById("menu3");
//addEventListenerは便利で、何をしたら（click)何がおこる(function)で多様できる
  m.addEventListener("click",function(){
    const topLeft = document.getElementById("menu22").getBoundingClientRect().left;
    const topTop = document.getElementById("menu22").getBoundingClientRect().top;
    window.scrollTo({
      left: topLeft,
      top: topTop,
      behavior: 'smooth'
    });
  })

//newsのtopに移動する
const m2 =document.getElementById("news3");
  m2.addEventListener("click",function(){
    const toPLeft = document.getElementById("news22").getBoundingClientRect().left;
    const toPTop = document.getElementById("news22").getBoundingClientRect().top;
    window.scrollTo({
      left: toPLeft,
      top: toPTop,
      behavior: 'smooth'
    });
  })




//スライドショー
const pics_src = ["../static/img/IMG-1385.jpg","../static/img/IMG-1386.jpg","../static/img/IMG-1387.jpg"];
let num = -1;
 
function slideshow_timer(){
    if (num === 2){
      num = 0;
    } 
    else {
      num ++;
    }
    document.getElementById("mypic").src = pics_src[num];
  }
   
  setInterval(slideshow_timer, 1000);
//function slideshow_timer(){
 
 // num = Math.floor(Math.random()*pics_src.length);
 
 // document.getElementById("mypic").src = pics_src[num];
 
//}
 
setInterval(slideshow_timer,1000); 

//

const scrolld = document.getElementById("scrolld_btn");

window.addEventListener('DOMContentLoaded', function(){
  scrolld.style.opacity = 0;
});

  window.addEventListener('scroll', function(){
    if( 200 < window.scrollY ) {
      scrolld.style.opacity=1;
    } 
    
    if(200>window.scrollY){
     scrolld.style.opacity=0;
    }
  });