import './card-list.styles.css';

const CardList = ({monsters}) => {

    return (
        <div className='card-list'>
            {
                monsters.map((monster) => {
                    const {name, email, id} = monster;
                    return (
                        <div className='card-container' key={id}>
                            <img
                                alt={`monster ${name}`}
                                src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                            <h1 className='name'>{name}</h1>
                            <p>{email}</p>
                        </div>
                    )
                })
            }
        </div>
    )


}

export default CardList;