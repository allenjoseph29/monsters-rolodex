import './App.css';
import {Component} from "react";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                    return {monsters: users};
                },
                () => {
                    console.log(this.state);
                }
            ));
    }

    onSearchChanged = (event) => {
        console.log(event.target.value);
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField}
        });
    };

    render() {

        const {monsters, searchField} = this.state;
        const {onSearchChanged} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        })

        return (
            <div className="App">
                <input className='search-box' type='search' placeholder='search monsters'
                       onChange={onSearchChanged}/>
                {
                    filteredMonsters.map((monster) => {
                        return <div><h1>{monster.name}</h1></div>
                    })
                }
            </div>
        );
    }
}

export default App;
