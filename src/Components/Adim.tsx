import { LeadGrid } from "./GirdFormation";
import { HeaderTabsColored } from "./Header";
import { NavbarSimpleColored } from "./NavBar";
import './Admin.css';

export function Admin(){
    return (
        <div className="Container">
           <div>
             <HeaderTabsColored user={{
                 name: "Admin",
                 image: ""
                }} tabs={[]}/>
            </div>
            {/* <div>
            <LeadGrid/>
            </div> */}
            <div style={{marginTop:-120}}>
            <NavbarSimpleColored/>
            </div>
            <div style={{marginTop:-680,marginLeft:85}}>
                <LeadGrid/>
            </div>
        </div>
    )

}