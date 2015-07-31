var UserForm = React.createClass({
    submitUser: function () {
        if(!this.props.model.get("id")){
            this.props.collection.create(this.props.model)
        }else{
            this.props.model.save();
        }
    },
    render: function () {
        var label = this.props.model.get("id") ? "Update" : "Create";
        return (
            <div className="user-form">
                <InputWithLabel model={this.props.model} label="Name" name="name" type="text"/>
                <InputWithLabel model={this.props.model} label="Email" name="email" type="text"/>
                <InputWithLabel model={this.props.model} label="Password" name="password" type="password"/>
                <div className="form-field">
                    <button onClick={this.submitUser}>{label}</button>
                </div>
            </div>
        );
    }
});