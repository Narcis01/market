package com.naical.olx;

import jakarta.persistence.Entity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.naical.olx")
@EntityScan( "com.naical.olx")
@ComponentScan(basePackages = {"com.naical.olx"})
public class OlxCloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(OlxCloneApplication.class, args);
	}

}
