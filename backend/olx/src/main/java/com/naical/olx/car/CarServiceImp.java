package com.naical.olx.car;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CarServiceImp implements CarService {

    private final CarRepository carRepository;

    @Override
    public Car save(Car car) {
        return carRepository.save(car);
    }

    @Override
    public List<Car> findByKeyWord(String name) {
        return carRepository.findByNameContaining(name);
    }

    @Override
    public void deleteCar(int id) {
        carRepository.deleteById(id);
    }
}
