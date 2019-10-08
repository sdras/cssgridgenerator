import {groupRepeatedUnits} from "./repetition";

describe("Repetition", () => {
    it("groupRepeatedUnits", () => {
        const result = groupRepeatedUnits();
        
        expect(result).toEqual([["1fr"]]);
    })
});