//wrap all of our afterword code so we keep the global namespace clean.  All 'global' variables
//will be exposed in the Barista object
(function (){

    //set the user_key from a local file called barista_config if it is present
    //at either /public or /
    if (!Barista.setUserKey('/public/barista_config.json')){
      Barista.setUserKey('/barista_config.json');
    };

    //find all of the barista_target div elements on the page
    var all_divs = $('div');
    var barista_targets = [];
    Barista.generatedViews = {};
    all_divs.each(function () {
        var data_attrs = $(this).data();
        if (_.keys(data_attrs).indexOf('baristaView') !== -1){
            barista_targets.push(this);
        }
    });

    //for each barista target element, instantiate the view and attempt to call the
    //fetch method of its model. For some views this will not work, but many will.
    //The idea is that we want to populate the views with data when we can on page load
    //since the user is not instantiating the view via javascript.  For each target
    //Element we will also try to bind it to any views that it asks to be bound to. The
    //binding is assumed to be a binding between the any events coming out of the source view.
    //the event's 'val' attribute is fed to the view's model.fetch method
    barista_targets.forEach(function(target){
        //grab the view type and make sure it has a unique view name
        var view_num = 0;
        var view_type = $(target).data().baristaView;
        var view_name;
        if ($(target).attr('id')){
            view_name = $(target).attr('id');
        }else{
            view_name = view_type;
        }
        while (_.keys(Barista.generatedViews).indexOf(view_name) !== -1){
            view_num += 1;
            view_name = view_type + view_num;
        }

        //    instantiate the view and register it to the generatedViews object in
        //    Barista
        var view_params = _.extend({el: target},$(target).data());
        Barista.generatedViews[view_name] = new Barista.Views[view_type](view_params);

        //    try to call the view's fetch method and ignore errors that come up since
        //    we expect them for views that don't have models supporting a fetch
        //    operation
        try {
            Barista.generatedViews[view_name].model.fetch('');
        }catch(err){
        }

        //    try to bind views that are specified
        if (_.keys($(target).data()).indexOf('bind') !== -1){
            var bind_target = $(target).data().bind;
            Barista.generatedViews[view_name].listenTo(Barista.generatedViews[bind_target],'all',function(event_name, e){
                Barista.generatedViews[view_name].model.fetch(e.val);
            });
        }
    });
}());
