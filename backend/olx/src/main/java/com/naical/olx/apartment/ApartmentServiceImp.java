package com.naical.olx.apartment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ApartmentServiceImp implements ApartmentService{

    private final ApartmentRepository apartmentRepository;
    @Override
    public Apartment save(Apartment apartment) {
        return apartmentRepository.save(apartment);
    }

    @Override
    public List<Apartment> findByKeyWord(String name) {
        return apartmentRepository.findByNameContaining(name);
    }

    @Override
    public void delete(int id) {
        apartmentRepository.deleteById(id);
    }
}
