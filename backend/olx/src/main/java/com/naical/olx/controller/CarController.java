package com.naical.olx.controller;

import com.naical.olx.apartment.Apartment;
import com.naical.olx.car.Car;
import com.naical.olx.car.CarServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Component
@RequiredArgsConstructor
@RequestMapping("api/v1/car")
public class CarController {
    private final CarServiceImp carServiceImp;


    @PostMapping("/save")
    public ResponseEntity<Car> save(@RequestBody Car car){
        carServiceImp.save(car);
        return new ResponseEntity<Car>(car, HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public List<Car> search(@PathVariable("name") String name){
        return carServiceImp.findByKeyWord(name);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") int id){
        carServiceImp.deleteCar(id);
    }
}
