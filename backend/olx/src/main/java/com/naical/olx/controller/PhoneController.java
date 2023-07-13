package com.naical.olx.controller;

import com.naical.olx.apartment.Apartment;
import com.naical.olx.phone.Phone;
import com.naical.olx.phone.PhoneServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Component
@RequiredArgsConstructor
@RequestMapping("api/v1/phone")
@RestController
public class PhoneController {

    private final PhoneServiceImp phoneServiceImp;

    @PostMapping("/save")
    public ResponseEntity<Phone> save(@RequestBody Phone phone){
        phoneServiceImp.save(phone);
        return new ResponseEntity<>(phone, HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public List<Phone> search(@PathVariable("name") String name){
        return phoneServiceImp.findByKeyWord(name);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") int id){
        phoneServiceImp.delete(id)  ;
    }
}
