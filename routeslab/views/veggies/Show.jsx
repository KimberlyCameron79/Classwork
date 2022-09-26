const React = require('react')

//extends is inheriting from parent class
//class component
class Show extends React.Component {
    
    render() {
        console.log(this.props)

        //Object destructuring
        const {name, color, readyToEat} = this.props.veggies

        return (
            <div>
            <h1>Show Page testing</h1>
            <p>
                The {name} is {color}.
            </p>
            <p>
                {readyToEat ? "It is ready to eat!" : "It is NOT ready to eat"}
            </p>
            <nav>
                <a href="veggies/"></a>
            </nav>


            </div>
            
        )
    }

}

module.exports = Show;