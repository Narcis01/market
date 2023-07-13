package com.naical.olx.apartment;

import java.util.List;

public interface ApartmentService {
    Apartment save(Apartment apartment);

    List<Apartment> findByKeyWord(String name);

    void delete(int id);
}
