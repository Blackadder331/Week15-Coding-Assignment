import React, { useState } from "react";
import { updateHouses } from './House'

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('Invalid input');
        }
    };

    return(
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input
                    className="inputCustom"
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className="inputCustom"
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit' className="btn btn-success">Add Room</button>
            </form>
        </div>
    )

};