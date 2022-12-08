const myTesting = require("./sum")

test("test the sum",()=>{

    expect(myTesting(50 ,6)).toBe(56);
})