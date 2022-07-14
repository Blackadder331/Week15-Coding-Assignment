import React from "react";
import { NewRoomForm } from './NewRoomForm';
import HousesList from './HousesList';
import { housesApi } from "../rest/HousesApi";


export const House = (props) => {
    const { house, updateHouse, updateState } = props; 

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});
    
    const rooms = () => (
        <ul>
          {house.rooms.map((room, index) => (
            <li key ={index}>
                <label> {`${room.name} Area: ${room.area}`} </label>
                <button className="btn btn-sm btn-outline-dark" onClick={(e) => deleteRoom(room._id)}>Delete</button>
            </li>
          ))}  
        </ul>
    );


    function deleteSomething() {
        housesApi.del(house)
        console.log('delete')
        updateState();
    }



    return (
        <div>
            <div className="container">
                    <div className="col-md">
                        <div className="card card-body">
                        <h1>{house.name}</h1>
                        <button className="house-delete" onClick={deleteSomething}>Delete House</button>
                        {
                            rooms({ rooms, houseId: house._id, deleteRoom})
                        }
                        <NewRoomForm addNewRoom={addNewRoom} />
                        
                        </div>
                    </div>
                    <br />
            </div>
        </div>
    );

};