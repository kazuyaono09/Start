
//ドキュメント内の.humbergar-menuの配列を取得し、toggleBtnに代入。
const toggleBtn = document.querySelector(".humbergar-menu");
//ボタンをクリックしたら表示されるメニュー。== ドキュメント内の.header-navi-listsを取得し、変数naviListsに代入。
const naviLists = document.querySelector(".header-navi-lists");

//toggleBtnがクリックされたら実行してください。
toggleBtn.addEventListener("click", function() {
  //toggleBtnのクラスリストにアクティブクラスを付けたり外したりしてください。
  this.classList.toggle("active");
  naviLists.classList.toggle("open-lists");
});

//ドキュメント内の.hover-listを全て取得し、linksという定数に代入。
const links = document.querySelectorAll(".hover-list");

//リンクの配列を全て処理したら実行します。
links.forEach((link) => {
  link.addEventListener("click", toggleLink)
});

//toggleLinkのイベントハンドラを付与します。
//linksの配列一つ一つ処理をしたら実行します(=>) linkのclassリストからactiveクラスを外してください。
function toggleLink(event) {
  links.forEach((link) => link.classList.remove("active"));

  //イベントハンドラの要素を取得し、openLinkという定数に代入。
  //openLinkのクラスリストにactiveクラスを追加してください。
  const openLink = event.currentTarget;
  openLink.classList.add("active");
};




