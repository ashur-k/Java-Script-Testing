//I want to test a calculator
    //I am going to test the addition function  
        //I want to get the result of 42
            //I except tje result of 20 + 22 to be 42

describe ("Calculator", function(){

    //Creating new instance of Calculator
    var calc = new Calculator;

    describe ("Addition function", function(){
        //befor each is function provided by Jasemine where we can effectively create fresh instance of the object for every test we run
        beforeEach(function(){
            calc = new Calculator;
        });

        it ("should return 42", function(){
            //Now we are taking one number in calc.js so we have to add 2 numbers
            calc.add(20);
            calc.add(22);
            //Refactoring code so have to change below line to new entered line
            //expect(addition(20, 22)).toBe(42);
            expect(calc.value).toBe(42);
        });
        it ("should return 26", function(){
             //Doing same as above to second test:
             calc.add(7);
             calc.add(19);
             //Refactoring so doing same as above
            //expect(addition(7, 19)).toBe(26);
            expect(calc.value).toBe(26);

        });
        it("Should return an error if we dont supply two numbers", function(){
           // change 1 adding spyOn: expect(addition("Hitchhikers", "Guide")).toBe("Error!"); changing code with Jasemine spyalert funcion
           spyOn(window, "alert");
          //change two refactoring code // 
          //addition("Hitchhikers", "Guide")
          calc.add("Hitchhikers");
           expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
