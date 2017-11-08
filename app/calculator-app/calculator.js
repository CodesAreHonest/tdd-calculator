'use strict';

var calcApp = angular.module('calcApp', []);

calcApp.controller('calcCtrl', function ($scope) {

    $scope.currentNumber = 0;

    $scope.storedNumber = 0;

    // determines the negative sign of the number
    $scope.negate = false;

    // determines the decimal point of the number
    $scope.decimal = false;

    // The mathematical operation obtained results.
    $scope.result = 0;

    $scope.decimalValue = 10;

    // The variable that store Mathemtical Operation
    $scope.operator = "";

    // The values that show on Calculator in String
    $scope.currentDisplay = "0";

    $scope.numberClicked = function (number) {
        if($scope.reachMaxLength()){
            window.alert("The input number reaches the maximum specified length!");
        }
        else {
            if (($scope.currentNumber === 0)) {
                if(number === 0){
                    $scope.currentDisplay = "0";
                }
                $scope.currentNumber = 0;
                if (!Boolean($scope.decimal)){
                    $scope.currentDisplay = "";
                }
            }
            if (Boolean($scope.decimal)) {
                $scope.currentDisplay = $scope.currentDisplay + number;
                number = number / ($scope.decimalValue);
                $scope.currentNumber = $scope.currentNumber + number;
                $scope.decimalValue = $scope.decimalValue * 10;
            }
            else {
                $scope.currentNumber = $scope.currentNumber * 10 + number;
                $scope.currentDisplay = $scope.currentDisplay + number;
            }
        }
    };

    $scope.clear = function () {
        $scope.currentNumber = 0;
        $scope.result = 0;
        $scope.operator = "";
        $scope.currentDisplay = "0";
        $scope.storedNumber = 0;
        $scope.setPositive();
        $scope.removeDecimal();
    }

    $scope.operatorEntered = function (operator) {

        $scope.operator = operator;
        $scope.storedNumber = $scope.currentNumber;
        $scope.currentDisplay = operator;
        $scope.currentNumber = 0;
        $scope.removeDecimal();

        if(Boolean($scope.negate)) {
            $scope.storedNumber= $scope.storedNumber * -1;
            $scope.setPositive();
        }
    };


    $scope.calculate = function () {
        if(Boolean($scope.negate)) {
            $scope.currentNumber= $scope.currentNumber * -1;
        }
        switch ($scope.operator) {
            case "+":
                $scope.result = $scope.storedNumber + $scope.currentNumber;
                $scope.currentDisplay = "= " + $scope.result;
                $scope.currentNumber = 0;
                $scope.storedNumber = 0;
                $scope.setPositive();
                $scope.removeDecimal();
                break;

            case "-":
                $scope.result = $scope.storedNumber - $scope.currentNumber;
                $scope.currentDisplay = "= " + $scope.result;
                $scope.currentNumber = 0;
                $scope.storedNumber = 0;
                $scope.setPositive();
                $scope.removeDecimal();
                break;

            case "*":
                $scope.result = $scope.storedNumber * $scope.currentNumber;
                $scope.currentDisplay = "= " + $scope.result;
                $scope.currentNumber = 0;
                $scope.storedNumber = 0;
                $scope.setPositive();
                $scope.removeDecimal();
                break;

            case "/":
                if ($scope.currentNumber !== 0) {
                    $scope.result = $scope.storedNumber / $scope.currentNumber;
                    $scope.currentDisplay = "= " + $scope.result;
                    $scope.currentNumber = 0;
                    $scope.storedNumber = 0;
                    $scope.setPositive();
                    $scope.removeDecimal();

                }
                else {
                    $scope.currentDisplay = "undefined value";
                    window.alert("Division on Zero is not allowed!");

                }
                break;

            default:
                window.alert("Arithmetic operator is not defined!");
                break;
        }
    };

     $scope.setNegative = function(){
         if(!Boolean($scope.negate)) {
             $scope.negate = true;
             $scope.currentDisplay = "-" + $scope.currentDisplay;
         }

    };

    $scope.setPositive = function(){
        $scope.negate = false;
    };

    $scope.setDecimal = function(){
        if(!Boolean($scope.decimal)) {
            $scope.decimal = true;
            $scope.currentDisplay = $scope.currentDisplay + ".";
        }
    };

    $scope.removeDecimal = function(){
        $scope.decimal = false;
        $scope.decimalValue = 10;
    };

    $scope.reachMaxLength = function(){
        if(Boolean($scope.decimal) && Boolean($scope.negate)) {
            if($scope.currentDisplay.length >= 12) {
                return true;
            }
        }
        else if(Boolean($scope.decimal)){
            if($scope.currentDisplay.length >= 11) {
                return true;
            }
        }
        else if(Boolean($scope.negate)){
            if($scope.currentDisplay.length >= 11) {
                return true;
            }
        }
        else if($scope.currentDisplay.length >= 10){
            return true;
        }
        else{
            return false;
        }
    };

});

