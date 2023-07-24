import { Boton } from "./boton";

export default {
    component:Boton,
};

//stories
export const Back = {
    args:{
        label: "Back",
        next1: true,
    },
};
export const Next = {
    args:{
        label: "Next",
        next1: false,
    },
};