const appContainer = document.getElementById('appContainer');
const appTitle = document.getElementById('appTitle');

appContainer.onload = () => {
	appTitle.innerText = appContainer.contentDocument.title;
}

function openApp (path) {
	appContainer.src = path;
}