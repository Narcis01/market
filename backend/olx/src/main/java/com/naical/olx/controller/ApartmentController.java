package com.naical.olx.controller;

import com.naical.olx.apartment.Apartment;
import com.naical.olx.apartment.ApartmentService;
import com.naical.olx.apartment.ApartmentServiceImp;
import com.naical.olx.car.Car;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Component
@RequiredArgsConstructor
@RequestMapping("api/v1/apartment")
@RestController
public class ApartmentController {

    private final ApartmentServiceImp apartmentServiceImp;
    @PostMapping("/save")
    public ResponseEntity<Apartment> save(@RequestBody Apartment apartment){
        apartmentServiceImp.save(apartment);
        return new ResponseEntity<Apartment>(apartment, HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public List<Apartment> search(@PathVariable("name") String name){
        return apartmentServiceImp.findByKeyWord(name);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") int id){
        apartmentServiceImp.delete(id);
    }
}
