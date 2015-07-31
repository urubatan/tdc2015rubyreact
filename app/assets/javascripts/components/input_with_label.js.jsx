var InputWithLabel = React.createClass({
    handleChange: function (event) {
        this.props.model.set(this.props.name, event.target.value);
        return true;
    },
    render: function () {
        if (this.props.type == 'textarea') {
            return (<div className="form-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <textarea id={this.props.name} name={this.props.name} ref="input"
                          onChange={this.handleChange} defaultValue={this.props.model.get(this.props.name)}/>
            </div>);
        } else {
            return (<div className="form-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input id={this.props.name} type={this.props.type} name={this.props.name} ref="input"
                       onChange={this.handleChange} defaultValue={this.props.model.get(this.props.name)}/>
            </div>);
        }
    }
});