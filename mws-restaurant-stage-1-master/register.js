console.log('test')
if(navigator.serviceWorker) {
navigator.serviceWorker.register('/sw.js').then(function() {
	console.log('registration successful'); 
}).catch(function(){
	console.log('registration failed');
});
}