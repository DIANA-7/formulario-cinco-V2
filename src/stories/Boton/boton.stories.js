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
export const Grande = {
    args:{
        label: "Grande",
        next1: false,
        size: "grande"
    },
};
export const Medio = {
    args:{
        label: "Mediano",
        next1: true,
        size: "medio"
    },
};