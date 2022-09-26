const React = require('react')

class Index extends React.Component {

    render() {

        // Object Destructuring
        const { meats } = this.props

        // const meats = this.props.meats

        // map method
        /*
            - loops over data
            - manipulates data at each index
            - returns new array with new data
        */

        /*
            [
                { name: 'chicken' ... },
                { name: 'fish' ... },
                { name: 'turkey' ...}
            ]
        */ 
            // After we map over it

        /*
            [element, element, element]
        */

        return (
            <div>
            
                <h1>Meats Index Page</h1>
                <ul>
                    {meats.map((meats, i) => {
                        return (
                            <li key={i}>
                             <a href={`/meats/${i}`}>
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