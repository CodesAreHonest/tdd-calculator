'use strict';

describe('Test case for Calculator', function () {

    beforeEach(angular.mock.module('calcApp'));

    var $controller;


    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('Test Case for Clear button', function () {
        it('clear() should return all values to default', function () {

            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.currentNumber = 18;
            $scope.result = 18;
            $scope.operator = "+";
            $scope.currentDisplay = "18000024234";

            $scope.clear();

            expect($scope.currentNumber).toEqual(0);
            expect($scope.result).toEqual(0);
            expect($scope.operator).toBe("");
            expect($scope.currentDisplay).toBe("0");
        });
    });

    describe('Test Case for Calculator Display', function () {
        it('numberClicked() should display values correctly when user pressed numbers 1-9', function () {

            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(1);
            $scope.numberClicked(2);

            expect($scope.currentDisplay).toBe("12");
        });

        it('numberClicked() should not display number when user pressed number 0 at first input', function () {

            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.currentDisplay = "";

            $scope.numberClicked(0);
            expect($scope.currentDisplay).toEqual("0");
        });
    });

    describe('Test Case for separation of operand by operator', function () {
        it('entry of first number is terminated when "+" operator is entered', function () {

            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});
            // test for "+" operator
            $scope.numberClicked(8);
            $scope.operatorEntered("+");

            expect($scope.currentNumber).toEqual(0);
            expect($scope.storedNumber).toBe(8);
            expect($scope.operator).toBe("+");
        });

        it('entry of first number is terminated when "-" operator is entered', function () {

            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});
            // test for "-" operator
            $scope.numberClicked(8);
            $scope.operatorEntered("-");

            expect($scope.currentNumber).toEqual(0);
            expect($scope.storedNumber).toBe(8);
            expect($scope.operator).toBe("-");
        });

        it('entry of first number is terminated when "*" operator is entered', function () {

            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});
            // test for "*" operator
            $scope.numberClicked(8);
            $scope.operatorEntered("*");

            expect($scope.currentNumber).toEqual(0);
            expect($scope.storedNumber).toBe(8);
            expect($scope.operator).toBe("*");
        });

        it('entry of first number is terminated when "+" operator is entered', function () {

            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});
            // test for "/" operator
            $scope.numberClicked(8);
            $scope.operatorEntered("/");

            expect($scope.currentNumber).toEqual(0);
            expect($scope.storedNumber).toBe(8);
            expect($scope.operator).toBe("/");
        });
    });

    describe('Test Case for the correctness of the second number after arithmetic operator', function () {
        it('the number entered the after arithmetic operator must be counted as second number', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(8);
            $scope.operatorEntered("+");
            $scope.numberClicked(2);

            expect($scope.currentNumber).toEqual(2);
            expect($scope.storedNumber).toBe(8);
            expect($scope.operator).toBe("+");

        });
    });

    describe('Test Case for the correctness of arithmetic operator display', function () {
        it('the arithmetic operator must be displayed on the screen', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(8);
            $scope.operatorEntered("+");

            expect($scope.currentDisplay).toEqual("+");

        });
    });

    describe('Test Case for the correct50ness of arithmetic operation result', function () {
        it('the addition operation must add the two operands correctly', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(8);
            $scope.operatorEntered("+");
            $scope.numberClicked(2);
            $scope.calculate();

            expect($scope.result).toEqual(10);

        });

        it('the subtraction operation must correctly subtract the second operand from the first operand', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(8);
            $scope.operatorEntered("-");
            $scope.numberClicked(2);
            $scope.calculate();

            expect($scope.result).toEqual(6);

        });

        it('the multiplication operation must correctly multiply the two operands', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(8);
            $scope.operatorEntered("*");
            $scope.numberClicked(2);
            $scope.calculate();

            expect($scope.result).toEqual(16);

        });

        it('the Division operation must correctly divide the first operand over the second operand', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(8);
            $scope.operatorEntered("/");
            $scope.numberClicked(2);
            $scope.calculate();

            expect($scope.result).toEqual(4);

        });
    });

    describe('Test Case for negative sign', function () {
        it('Pressing on negative sign should negate the currently entered number', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(2);
            $scope.numberClicked(5);
            $scope.setNegative();
            $scope.operatorEntered("/");
            $scope.numberClicked(2);

            expect($scope.storedNumber).toEqual(-25);
        });
    });

    describe('Test Case for the correctness of the input values', function () {
        it('If the input number is an integer the calculator must accept it as an integer', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(2);
            $scope.numberClicked(5);
            expect($scope.currentNumber).toEqual(25);

        });

        it('If the input number is a decimal number the calculator must accept it a decimal number', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.setDecimal();
            $scope.numberClicked(2);
            $scope.numberClicked(5);
            expect($scope.currentNumber).toEqual(0.25);

        });
    });

    describe('Test Case for the maximum length of digits allowed to be entered for the input number', function () {
        it('For an integer number with length of 20 digits, the first 10 digits will only be accepted', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            for($scope.count = 1; $scope.count <= 2; $scope.count++) {
                for($scope.count2 = 1; $scope.count2 <= 9; $scope.count2++) {
                    $scope.numberClicked($scope.count2);
                }
            }

            expect($scope.currentNumber).toEqual(1234567891);
            expect($scope.currentDisplay.length).toEqual(10);


        });

        it('For a decimal number with length of 20 digits, the first 10 digits will only be accepted starting from the right side', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            for($scope.count = 1; $scope.count <= 2; $scope.count++) {
                for($scope.count2 = 1; $scope.count2 <= 9; $scope.count2++) {
                    $scope.numberClicked($scope.count2);
                    if($scope.count2 === 7){
                        $scope.setDecimal();
                    }
                }
            }


            expect($scope.currentNumber).toEqual(1234567.891);
            expect($scope.currentNumber.toString().length).toEqual(11);

        });
    });

    describe('Test Case for the rejection of Zero division', function () {
        it('The calculator must reject any division on Zero and the output should be "undefined value"', function () {
            var $scope = {};
            var controller = $controller('calcCtrl', {$scope: $scope});

            $scope.numberClicked(8);
            $scope.operatorEntered("/");
            $scope.numberClicked(0);
            $scope.calculate();

            expect($scope.currentDisplay).toBe("undefined value");


        });
    });

});
