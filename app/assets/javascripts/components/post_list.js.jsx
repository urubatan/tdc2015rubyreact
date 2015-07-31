var PostList = React.createClass({
    componentDidMount: function () {
        this.props.collection.on("change", function () {
            this.forceUpdate()
        }, this);
        this.props.collection.on("reset", function () {
            this.forceUpdate()
        }, this);
    },
    componentWillUnmount: function () {
        this.props.collection.off(null, null, this);
    },
    render: function () {
        var users = this.props.collection.map(function (model) {
            var viewModel = function () {
                this.props.viewModel(model);
            };
            return (
                <tr key={model.get("id")}>
                    <td><a href="#" onClick={viewModel.bind(this)}>{model.get("title")}</a></td>
                    <td>{new Date(model.get("created_at")).toDateString()}</td>
                </tr>
            );
        }.bind(this));
        return (
            <div>
                <table className="post-list">
                    <thead>
                    <tr>
                        <th>Post</th>
                        <th>Published</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users}
                    </tbody>
                </table>
                <hr/>
                <a href="#" onClick={this.props.newModel}>Create post</a>
            </div>

        );
    }
});