import  {
    SET_BAR,
    SET_CSRC,
    SET_MAP_DATA,
    SET_STOCK,
    TOGGLE_FS
} from '../actionTypes'

export const toggleFullscreen=()=>({
    type:TOGGLE_FS
})
export const setMapData=(mapdata)=>({
    type:SET_MAP_DATA,
    payload:{
        mapdata
    }
})
export const setStockData= (stockdata) => ({
    type:SET_STOCK,
    payload:{
        stockdata
    }
})

export const setCSRC = (csrcdata) => ({
    type:SET_CSRC,
    payload:{
        csrcdata
    }
})
export const setBar = (bardata) => {
    return {
        type:SET_BAR,
        payload:{
            bardata
        }
    }
}

