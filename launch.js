'use strict';
window.chrome.app.runtime.onLaunched.addListener(function(launchData) {
    window.console.log(launchData);
    window.chrome.app.window.create('index.html', {
            id: 'blink1',
            innerBounds: {
                width: 420,
                height: 200
            },
            resizable: false
        },
        function(e) {
            console.log(e);
        });
});