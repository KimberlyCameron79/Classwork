const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { veggie } = this.props

        return (
            <DefaultLayout title="edit a veggie" foodGroup="veggies">
                <h1>Edit Page</h1>
                <form action={`/veggies/${veggie._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={veggie.name} />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={veggie.color} />

                    

                    <input type="submit" value="Edit veggie"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;