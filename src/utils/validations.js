export const requiredField = (value) =>{
    if(value) return undefined;
    return 'field is required';
}
export const maxLengthCreator = (maxLength) =>(value) => {
    if(value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}

export const required = (v) => {
    if(!v || v === ''){
        return 'field is required'
    }return undefined
}