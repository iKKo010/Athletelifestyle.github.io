  document.write('<script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-85310015-1"></script>');

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'UA-85310015-1');

/*-------------- GDPR設定 -----------------*/
window.addEventListener('DOMContentLoaded',  () => {
    console.log(getCookie('gdpr'));
	if ( getCookie('gdpr') === 'on') {
		setCookie('gdpr', 'on'); // extend expired at
		return;
	}else{
		document.getElementById('gdpr').style.display='block';
		const gdpr_button = document.querySelector('#gdpr button');
		gdpr_button.addEventListener('click', () => {
			document.getElementById('gdpr').style.display='none';
			setCookie('gdpr', 'on');
		});
        return;
	}
});

const getCookie = key => {
	const cookies = document.cookie.split('; ');
	for(let cookie of cookies){
		let pair = cookie.split('=');
		if( pair[0] === key){ return pair[1]; }
	}
	return null;
};

const setCookie = (key , value) => {
	let now = new Date();
	now.setHours( now.getHours() + 30*24);
	document.cookie = key + "=" + value + "; expires=" + now.toUTCString() +"; path=/"; 
};