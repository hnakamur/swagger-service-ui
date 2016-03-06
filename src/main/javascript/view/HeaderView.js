'use strict';

SwaggerUi.Views.HeaderView = Backbone.View.extend({
  events: {
    'keyup #input_baseUrl'          : 'showCustomOnKeyup',
    'keyup #input_apiKey'           : 'showCustomOnKeyup'
  },

  initialize: function(){},

  update: function(url, apiKey, trigger){
    if (trigger === undefined) {
      trigger = false;
    }

    if (url) {
      var val = url.replace(/^http:\/\/api.swagger.goa.design:8080\/swagger\/spec\/github.com\//, '');
      $('#input_baseUrl').val(decodeURIComponent(val));

      if (trigger) {
        this.trigger('update-swagger-ui', {url:url});
      }
    }
  }
});
