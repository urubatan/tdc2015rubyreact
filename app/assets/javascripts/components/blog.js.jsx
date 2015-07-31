var Blog = React.createClass({
    getInitialState: function(){
        var posts = null;
        var post = null;
        if (this.props.collection) {
            posts = new Posts(this.props.collection);
        } else {
            posts = new Posts();
            posts.fetch({success:function(data){
                this.forceUpdate();
            }.bind(this)});
        }
        if (this.props.item) {
            post = new Post(this.props.item);
        } else {
            post = new Post();
        }
        return {
            collection: posts,
            model: post,
            editing: false
        };
    },
    componentDidMount:function(){
      this.router = new PostRouter({blog: this});
        Backbone.history.start({pushState: true, root: "/"});
    },
    editModel:function(model){
        this.setState({
            model: model,
            editing: true
        })
    },
    viewModel:function(model){
        this.setState({
            model: model,
            editing: false
        });
        this.router.navigate("/posts/" + model.get("slug"), {trigger: true});
    },
    newModel:function(){
        this.setState({
            model: new Post(),
            editing: true
        })
    },
    render: function () {
        if(this.state.editing) {
            return (<div>
                <div id="blogList">
                    <PostList collection={this.state.collection} viewModel={this.viewModel} newModel={this.newModel}/>
                </div>
                <div id="blogPost">
                    <PostForm collection={this.state.collection} model={this.state.model} viewModel={this.viewModel}/>
                </div>
            </div>);
        }else{
            return (<div>
                <div id="blogList">
                    <PostList collection={this.state.collection} viewModel={this.viewModel} newModel={this.newModel}/>
                </div>
                <div id="blogPost">
                    <PostView model={this.state.model} editModel={this.editModel}/>
                </div>
            </div>);
        }
    }
});