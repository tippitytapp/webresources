import HomePageHeader from "./HomePageHeader";
import {shallow} from "enzyme";

describe("tests HomePageHeader", ()=>{
    it("renders", ()=>{
        const tree = shallow(<HomePageHeader/>)
        expect(tree).toMatchSnapshot()
    })
})