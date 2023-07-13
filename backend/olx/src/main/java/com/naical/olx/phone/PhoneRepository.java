package com.naical.olx.phone;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
@CrossOrigin("http://localhost:4200")
public interface PhoneRepository extends JpaRepository<Phone, Integer> {

    List<Phone> findByNameContaining(@RequestParam("name") String name);
}
