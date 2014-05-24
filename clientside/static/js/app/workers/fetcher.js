console.log('NOW RUNNING :: worker/fetcher.js');

// Explicitly not using Requirejs: Require js (2.1.1) 'secretly' uses importScripts while being called from a Web Worker.
// To simulate this effect, we can easily use it ourselves and maintain full control.

// Container in global scope
var previousDataset;
var intervalCheck;

// SKOV FetcherWorker
var SKOV = SKOV || {};
SKOV.fetcherWorker = {
    messageEventHandler: function(e){
        switch(e.data){
            case 'dataCheck':
                console.log('WORKER :: Message received and understood: data check executing.');
                SKOV.fetcherWorker.dataCheck();
            break;
            default:
                console.log('WORKER :: Message NOT understood.')
        }
    },

    // Simplified XMLHttpRequest load-function. Shamelessly copied from 
    // source: http://techslides.com/html5-web-workers-for-ajax-requests/
    // editted for better implementation and use.
    load: function(url, callback) {
        var xhr;
         
        if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
        else {
            var versions = ["MSXML2.XmlHttp.5.0", 
                            "MSXML2.XmlHttp.4.0",
                            "MSXML2.XmlHttp.3.0", 
                            "MSXML2.XmlHttp.2.0",
                            "Microsoft.XmlHttp"]

             for(var i = 0, len = versions.length; i < len; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                }
                catch(e){}
             } // end for
        }
        xhr.onreadystatechange = ensureReadiness;
        
        function ensureReadiness() {
            if(xhr.readyState < 4) {
                return;
            }
            if(xhr.readyState === 4) {
                callback(xhr);
            }           
        }
        xhr.open('GET', url, true);
        xhr.send('');
    },

    // Do datacheck request
    dataCheck: function(){
        // Log event
        console.log('WORKER :: Datacheck :: Started.');
        console.time('WORKER :: Datacheck :: Timer');
        SKOV.fetcherWorker.load('//dannydewit.nl/cmda/srp/serverside/fetcher.php', function(data){
            if(data !== previousDataset){
                if(data.readyState === 4 || data.status === 200){
                    console.log('WORKER :: Datacheck :: New dataset retrieved!');
                    try{
                        previousDataset = data;
                        self.postMessage(data.response);
                    }
                    catch(e){
                        console.log('EXCEPTION :: Caught: ',e);
                    }
                }
                else{
                    console.error('WORKER :: Datacheck :: New dataset found, but an error in the readystate and/or status occured. Aborting.');
                }

                
            }
            else{
                console.log('WORKER :: Datacheck :: No new dataset found.');
            }
        });
    },
};

// LISTEN TO WORKER COMMANDS FROM PARENT
self.addEventListener('message', SKOV.fetcherWorker.messageEventHandler, false);