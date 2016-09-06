'use strict';

SwaggerUi.Views.ProjectManagerView = Backbone.View.extend({

  initialize: function (opts) {
    this.options = opts || {};
    this.router = this.options.router;
  },

  render: function () {
    $(this.el).html(Handlebars.templates.project_manager(this.model));
    return this;
  }

});
