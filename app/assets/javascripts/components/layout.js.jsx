var Layout = React.createClass({
    getInitialState: function(){
        var users = null;
        if (this.props.collection) {
            users = new Users(this.props.collection);
        } else {
            users = new Users();
            users.fetch({success:function(data){
                this.forceUpdate();
            }.bind(this)});
        }
        return {
            collection: users,
            model: new User()
        };
    },
    editModel:function(model){
        this.setState({
            model: model
        })
    },
    newModel:function(){
        this.setState({
            model: new User()
        })
    },
    render: function () {
        return (<div>
            <div id="list">
                <UserList collection={this.state.collection} editModel={this.editModel}/>
            </div>
            <div id="form">
                <UserForm collection={this.state.collection} model={this.state.model}/>
                <a onClick={this.newModel}>New User</a>
            </div>
        </div>);
    }
});