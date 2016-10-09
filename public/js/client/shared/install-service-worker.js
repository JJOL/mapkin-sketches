
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('Service Worker registration successful with scope: ', registration.scope);
    })
    .catch((err) => {
      console.log('Service Worker failed to register with error: ', err);
    });
}
