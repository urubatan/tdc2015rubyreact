var PostView = React.createClass({
    editModel: function () {
        this.props.editModel(this.props.model);
    },
    render: function () {
        var innerLines = null;
        if(this.props.model.get("content")) {
            innerLines=_.map(this.props.model.get("content").split("\n"), function (txt, idx) {
                return <p key={idx}>{txt}</p>
            });
        }
        return (
            <div className="blog-post">
                <h1><a href={this.props.model.get("slug")}>{this.props.model.get("title")}</a></h1>

                <div className="post-body">
                    {innerLines}
                </div>
                <hr/>
                <a href="#" onClick={this.editModel}>Edit post</a>
            </div>
        );
    }
});