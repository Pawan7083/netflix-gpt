import { LANDING_IMG, LOGO_IMG } from "../utils/constraint";

const Header = ()=>{

    return (
        <div className="absolute z-50">
            <img src={LOGO_IMG} alt="logo image not found" className="w-40 -mt-8 "></img>
        </div>
    )
}
export default Header;