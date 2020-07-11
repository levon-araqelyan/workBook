export const requiredFild = value => {
    if (value) return true;
    return "Field is required"
};

export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return `max length was ${maxLength}`;
    return undefined
};

 export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : true;


export const onlyLetters = value => {
    return value && !/^[a-zA-Z\s_]*$/.test(value) ?
        "Only letters" : true
};

export const dateFiled = value => {
    const  newDate = new Date().getFullYear();
    const myDate = new Date(value).getFullYear();
    if(newDate - myDate >= 18){
        return true
    }
    return "Age should be 18+"
};

export const passportField = (usersList) => value => {
    if (usersList.some(eachUser => eachUser.passport === value)){
        return `such passport already exists`
    }
    return true;
};

export const upper = value => value && value.toUpperCase();



export const dateValidation = () => {
   const data18 = new Date().getFullYear() - 18;
   const mount = new Date().getMonth() + 1;
   const day = new Date().getDate();
    return new Date(`${data18},${mount},${day}`).toISOString().slice(0,10)
};

