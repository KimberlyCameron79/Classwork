const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />

                </head>
                <body>
                    Default layouts
                    {this.props.children}
                    <nav>
                        <a href={`/${this.props.foodGroup}`}>{this.props.foodGroup}</a>
                    </nav>
                    
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;