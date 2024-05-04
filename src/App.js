import './App.css';
import {useEffect, useState} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


const App = () => {
    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    console.log('render app');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
        console.log('effect fetch');
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        })
        setFilteredMonsters(newFilteredMonsters);
        console.log('effect filter');
    }, [monsters, searchField]);

    const onSearchChanged = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };


    return (
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox onChangeHandler={onSearchChanged} placeholder='search monsters' className='search-box'/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;


/*
class App1 extends Component {
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
                }
            ));
    }

    onSearchChanged = (event) => {
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
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox onChangeHandler={onSearchChanged} placeholder='search monsters' className='search-box'/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}*/
