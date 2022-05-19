function redirectToDownload() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	console.log({ userAgent })
	if (/android/i.test(userAgent)) {
		window.location.href = "https://play.google.com/store/apps/details?id=godream.vn.vinet";
		return;
	}
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		window.location.href = "https://apps.apple.com/vn/app/viref/id1604803348";
		return;
	}
}