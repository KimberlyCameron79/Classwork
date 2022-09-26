const React = require('react')

class Index extends React.Component {

    render() {

        // Object Destructuring
        const { veggies } = this.props

        // const veggies = this.props.fruits

        // map method
        /*
            - loops over data
            - manipulates data at each index
            - returns new array with new data
        */

        /*
            [
                { name: 'greens' ... },
                { name: 'carrots' ... },
                { name: 'celery' ...}
            ]
        */ 
            // After we map over it

        /*
            [element, element, element]
        */

        return (
            <div>
            
                <h1>Veggies Index Page</h1>
                <ul>
                    {veggies.map((veggies, i) => {
                        return (
                            <li key={i}>
                             <a href={`/veggies/${i}`}>
                            </a>
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index;