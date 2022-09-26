const React = require('react')

//extends is inheriting from parent class
//class component
class Show extends React.Component {
    
    render() {

        //Object destructuring
        const {name, color, readyToEat} = this.props.fruit

        return (
            <div>
            <h1>Show Page testing</h1>
            <p>
                The {fruit.name} is {fruit.color}.
            </p>
            <p>
                {fruit.readyToEat ? "It is ready to eat! : "It is NOT ready to eat"}
            </p>
            <nav>
                <a href="fruits/"
            </nav>


            </div>
            
        )
    }

}

module.exports = Show;

