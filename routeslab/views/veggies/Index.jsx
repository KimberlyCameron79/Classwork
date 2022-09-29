const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { veggies } = this.props

        return (
            <DefaultLayout title="All Fruit" foodGroup="veggies">
                    <h1>Veggies Index Page</h1>
                    <ul id="veggies-index">
                        {veggies.map((veggie) => {
                            return (
                                <li key={veggie._id}>
                                    The <a href={`/veggies/${veggie._id}`}>{veggie.name}</a> is {veggie.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/veggies/new">Create a new a veggies</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;























