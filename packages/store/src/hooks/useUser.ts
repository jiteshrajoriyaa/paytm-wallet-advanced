import { useSetRecoilState } from "recoil"
import { phoneAtom } from "../atoms/atoms"

export const usePhone = () =>{
    const value = useSetRecoilState(phoneAtom);
    return value;
}