define([    "vendor/backbone",  "app/App",  "appViews/VisualisationView",    "appModels/NumbersModel",  "vendor/worker!appWorkers/fetcher"  ],
function(   Backbone,           App,        VisualisationView,               NumbersModel,              worker                              ){
    console.log('NOW RUNNING :: appCollections/NumbersCollection.js');

    var NumbersCollection = Backbone.Collection.extend({
        // Specifiy model for this collection
        model: NumbersModel,
        
        // Initialize collection
        initialize: function () {
            if(this.storageSupport()){
                this.fetchFromStorage();
            }
            else{
                this.fetchWithWorker();
            }
        },

        store: function(){
            // Check for storage support
            try{
                storageKey      = this.getFormattedDate();
                stringifiedData = JSON.stringify(data);

                console.log("COLLECTION :: Storing data", stringifiedData, " with key: ", storageKey);

                localStorage.setItem(storageKey, stringifiedData);
            }
            catch(e){
                console.log("COLLECTION :: Store exception: ",e);
            }
        },

        fetchFromStorage: function(){
            // Today
            var today           = this.getFormattedDate();
            var stringifiedData = localStorage.getItem(today);

            if(stringifiedData !== null){
                console.log("COLLECTION :: Found dataset in storage.");
                this.handleNewData(JSON.parse(stringifiedData));
            }
            else{
                console.log("COLLECTION :: No dataset in storage found. Fetching with worker.");
                this.fetchWithWorker();
            }
        },

        fetchWithWorker: function(){
            var self = this;
            worker.addEventListener('message', function(e) {
                try{
                    // Handle fetched
                    data = JSON.parse(e.data);
                    data = $.map(data, function(value, index) {    return [value]; });
                    console.log('WORKER PARENT :: RECEIVED :: ', data);
                    self.store(data);
                    self.handleNewData(data);
                }
                catch(e){
                    console.log('EXCEPTION :: Caught: ',e);
                }
            }, false);
            worker.postMessage('dataCheck'); // Send data to our worker.
        },

        handleNewData: function(data){ 
            console.log(data);

            // Make the temporary dataset the real dataset.
            SKOV.data = data;

            // Update collection to reflect changes.
            if(typeof SKOV.view === 'undefined'){
                console.log('COLLECTION :: Done before view could be initialised. Retrying in 250ms...');
                var that = this;
                setTimeout(function(){that.handleNewData(data)},250);
                return false;
            }

            SKOV.view.collection.reset(SKOV.data);
        },

        storageSupport: function(){
            return (typeof(Storage)!=="undefined");
        },

        getFormattedDate: function(){
            var d = new Date();
            var curr_date   = d.getDate()       < 10 ? "0"+d.getDate()      : d.getDate();
            var curr_month  = d.getMonth()+1    < 10 ? "0"+(d.getMonth()+1) : d.getMonth()+1;
            var curr_year   = d.getFullYear();
            return (curr_date + "-" + curr_month + "-" + curr_year);
        },
    });

    return NumbersCollection;
}); 