window.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".l-nav");
	const menuButton = document.querySelector(".l-nav__menuTrigger");

	// メニューの開閉
	menuButton.addEventListener("click", function () {
		if (menuButton.classList.contains("active") === true) {
			menuButton.classList.toggle("active");
			nav.style.right = "-80vw";
		} else {
			menuButton.classList.toggle("active");
			nav.style.right = "0";
		}
	});

	window.addEventListener("click", function (e) {
		console.log(e.target.classList.value);
		// console.log(e);
		if (
			// 表示時の設定（メニューボタンを押すとfalse）
			e.target.classList.value !== "l-nav__menuTrigger" &&
			e.target.classList.value !== "l-nav__menuTrigger active" &&
			e.target.classList.value !== "l-nav__menuElement" &&
			// activeが含まれており、かつナビゲーション以外を押した場合、true
			menuButton.classList.contains("active") &&
			e.target.classList.value !== "l-nav"
		) {
			menuButton.classList.remove("active");
			nav.style.right = "-80vw";
		}
	});
});
