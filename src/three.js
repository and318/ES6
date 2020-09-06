import resultOne from "./one"
import resultTwo from "./two"

export default function three(){
    return{
        status: "ok",
        one: resultOne(),
        two: resultTwo(),
    }
}