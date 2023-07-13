package com.naical.olx.phone;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class PhoneServiceImp implements PhoneService{

    private final PhoneRepository phoneRepository;

    @Override
    public Phone save(Phone phone) {
        return phoneRepository.save(phone);
    }

    @Override
    public List<Phone> findByKeyWord(String name) {
        return phoneRepository.findByNameContaining(name);
    }

    @Override
    public void delete(int id) {
        phoneRepository.deleteById(id);
    }
}
