//
//  main.swift
//  FirstCourseSecondTask
//
//  Copyright © 2017 E-Legion. All rights reserved.
//

import Foundation
import FirstCourseSecondTaskChecker


let checker = Checker()


func firstFunction(_ numbers: [Int]) -> (evenQuantity: Int, oddQuantity: Int) {
    var evenQuantity = 0
    var oddQuantity = 0
    
    for number in numbers{
        if (number % 2 == 0){
            evenQuantity += 1;
        }else{
            oddQuantity += 1;
        }
    }
    
    return (evenQuantity, oddQuantity)
}

//Передайте в этот метод функцию, которая возвращает количество четных и нечетных чисел во вхолящем массиве
checker.checkFirstFunction(function: firstFunction)

func secondFunction(_ circles: [FirstCourseSecondTaskChecker.Checker.Circle]) -> ([FirstCourseSecondTaskChecker.Checker.Circle]) {
    var circle = circles
    var count = 0
    var c = 0
    
    for var circleElement in circle{
        switch circleElement.color{
        case .green:
            circle.remove(at: count)
            circleElement.color = .blue
            circle.insert(circleElement, at: circle.endIndex)
            count -= 1
        case .white:
            circle.remove(at: count)
            circle.insert(circleElement, at: c)
            c += 1
        case .black:
            circle.remove(at: count)
            circleElement.radius *= 2
            circle.insert(circleElement, at: count)
        case .red:
            circle.remove(at: count)
            count -= 1
        case .blue:
            circle.remove(at: count)
            circle.insert(circleElement, at: circle.endIndex)
            count -= 1
        }
        count += 1
    }
    
    return circle
}

//Преобразовать данные, там был большой список условий(например, красые элементы удалить и т.п.)
checker.checkSecondFunction(function: secondFunction)

func thirdFunction(employees: [Checker.EmployeeData]) -> ([Checker.Employee]) {
    
    var someArr = [Checker.Employee]()
    
    for item in employees {
        guard let fullname = item["fullName"], let salary = item["salary"], let company = item["company"], item.count <= 3 else { continue }
        let newEmp = Checker.Employee(fullName: fullname, salary: salary, company: company)
        someArr.append(newEmp)
    }
    return someArr
}

//Вернуть те поля, где заполнены все данные
checker.checkThirdFunction(function: thirdFunction)