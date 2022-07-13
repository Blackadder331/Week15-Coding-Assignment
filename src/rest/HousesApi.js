// ASYNC AWAIT method

const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi {
    //GET REQUEST
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const  data = await resp.json();
            return data;
        } catch (e) {
            console.log('Oops, fetchHouses had an issue.', e);
        }
    }

    //UPDATE REQUEST
    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, updating houses had an issue.', e);
        }
    }
}

export const housesApi = new HousesApi();

