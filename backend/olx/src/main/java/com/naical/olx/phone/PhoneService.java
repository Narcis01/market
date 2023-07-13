package com.naical.olx.phone;

import java.util.List;

public interface PhoneService {

    Phone save(Phone phone);

    List<Phone> findByKeyWord(String name);

    void delete(int id);
}
