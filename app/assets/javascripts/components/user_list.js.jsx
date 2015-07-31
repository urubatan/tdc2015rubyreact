var UserList = React.createClass({
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
            var editModel = function () {
                this.props.editModel(model);
            };
            return (
                <tr key={model.get("id")}>
                    <td><a href="#" onClick={editModel.bind(this)}>{model.get("name")}</a></td>
                    <td>{model.get("email")}</td>
                    <td><a href="#" onClick={model.destroy}>X</a></td>
                </tr>
            );
        }.bind(this));
        return (
            <table className="user-list">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {users}
                </tbody>
            </table>
        );
    }
});