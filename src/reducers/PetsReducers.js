
const petsActionsType = {
    ADD_CAT: 'ADD_CAT',
    ADD_DOG: 'ADD_DOG',
    DELETE_CAT: 'DELETE_CAT',
    DELETE_DOG: 'DELETE_DOG'
}
const petsActions = {
    ADD_CAT: (item) => ({type: petsActionsType.ADD_CAT, payload: item}),
    ADD_DOG: (item) => ({type: petsActionsType.ADD_DOG, payload: item}),
    DELETE_CAT: (id) => ({type: petsActionsType.DELETE_CAT, payload: id}),
    DELETE_DOG: (id) => ({type: petsActionsType.DELETE_DOG, payload: id})
}
const initPets=()=>[...[{cats:[],dogs:[]}]]

const myPetReducer = (state, action) => {

    switch (action.type) {
        case petsActionsType.ADD_CAT:
            const [slice_cat] = state.cats.slice(-1);
            const pet_id=slice_cat?slice_cat.id+1:0

            return {...state,cats:[...state.cats,{id:pet_id,kind:'Cat', ...action.payload}]}

        case petsActionsType.ADD_DOG:
            const [slice_dog] = state.dogs.slice(-1)
            const dog_id=slice_dog?slice_dog.id+1:0
            return {...state,dogs:[...state.dogs,{id:dog_id,kind:'Dog', ...action.payload}]}
        case petsActionsType.DELETE_CAT:
            const index = state.cats.findIndex(cat => cat.id === action.payload)
            state.cats.splice(index, 1)
            return {...state}
        case petsActionsType.DELETE_DOG:
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload)
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}
    }
}
export {
    petsActions,
    initPets,
    myPetReducer
}
