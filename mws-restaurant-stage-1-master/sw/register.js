

if(!navigator.serviceWorker) return;
navigator.serviceWorker.register('/sw.js').then(function() {
	console.log('registration successful'); 
}).catch(function(){
	console.log('registration failed');
});