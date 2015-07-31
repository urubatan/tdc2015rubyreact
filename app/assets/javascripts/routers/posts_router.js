var PostRouter = Backbone.Router.extend({
    initialize: function (options) {
        this.blog = options.blog;
        this.route("/posts", "showAll");
        this.route("/posts/:page", "showPost");
    },

    showAll: function () {
        var c = new Posts();
        var that = this;
        c.fetch({
            success: function(model){
                that.blog.setState({collection: c});
            }
        });
    },

    showPost: function (slug) {
        var p = new Post();
        var that = this;
        p.fetch({
            success: function(model){
                that.blog.viewModel(p);
            }
        });
    },


});