const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { name, color } = this.props.veggie

        return (
            <DefaultLayout title={`${name} details`} foodGroup="veggies">
                <h1>Show Page</h1>
                <p>
                    The {name} is {color}.
                </p>
                
                <nav>
                    <a href="/veggies">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;
