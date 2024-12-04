import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/atoms"

export const useBalace = () =>{
    const value = useRecoilValue(balanceAtom);
    return value;
}
