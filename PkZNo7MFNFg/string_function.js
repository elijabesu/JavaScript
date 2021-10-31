export const capitalizeString = str => str.toUpperCase();
// or
const capitalizeStringTwo = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {capitalizeStringTwo};

// variables:
export const foo = "bar";