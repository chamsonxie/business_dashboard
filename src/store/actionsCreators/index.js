// import SET_MAP_DATA from '../actionsTypes'
const SET_MAP_DATA = "SET_MAP_DATA"
export const setMapData=(mapdata)=>({
    type:SET_MAP_DATA,
    payload:{
        mapdata
    }
})
export const setStockData= (stockdata) => ({
    type:'SET_STOCK',
    payload:{
        stockdata
    }
})

export const setCSRC = (csrcdata) => ({
    type:'SET_CSRC',
    payload:{
        csrcdata
    }
})
export const setBar = (bardata) => {
    return {
        type:'SET_BAR',
        payload:{
            bardata
        }
    }
}

