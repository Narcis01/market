package com.naical.olx.car;

import java.util.List;

public interface CarService {

    Car save(Car car);

    List<Car> findByKeyWord(String name);

    void deleteCar(int id);

}
