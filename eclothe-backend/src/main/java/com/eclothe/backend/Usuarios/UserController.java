package com.eclothe.backend.Usuarios;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/")
    public String saludo(){
        return "3306:3306";
    }
}
