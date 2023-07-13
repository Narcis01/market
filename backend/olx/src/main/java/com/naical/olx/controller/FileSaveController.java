package com.naical.olx.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

@RestController
@Component
@RequiredArgsConstructor
@RequestMapping("api/v1/file")
@CrossOrigin("http://localhost:4200")
public class FileSaveController {

    @PostMapping("/car")
    public ResponseEntity<String> SaveCar(@RequestParam("file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                String userHomeDir = System.getProperty("user.home");
                String uploadDir = "C:\\Users\\nicul\\Desktop\\olx clone\\frontend\\olx\\olx\\src\\assets\\image\\car\\"; // Absolute path to the desired upload directory

                Path directoryPath = Paths.get(uploadDir);
                if (!Files.exists(directoryPath)) {
                    try {
                        Files.createDirectories(directoryPath);
                    } catch (IOException e) {
                        e.printStackTrace();
                        // Handle directory creation failure
                    }
                }

                // Save the file to the upload directory
                File destFile = new File(uploadDir + file.getOriginalFilename());
                file.transferTo(destFile);

                return ResponseEntity.ok("File uploaded successfully.");
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading file: " + e.getMessage());
            }
        } else {
            return ResponseEntity.badRequest().body("No file selected.");
        }
    }
}

