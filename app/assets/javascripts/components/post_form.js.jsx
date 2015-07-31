var PostForm = React.createClass({
    saveModel: function () {
        if (this.props.model.get("id")) {
            this.props.model.save();
        } else {
            this.props.collection.create(this.props.model);
        }
        this.props.viewModel(this.props.model)
    },
    render: function () {
        return (
            <div className="blog-post">
                <InputWithLabel model={this.props.model} label="Title" name="title" type="text"/>
                <InputWithLabel model={this.props.model} label="Body" name="content" type="textarea"/>

                <div className="form-field">
                    <button onClick={this.saveModel}>Save</button>
                </div>
            </div>
        );
    }
});