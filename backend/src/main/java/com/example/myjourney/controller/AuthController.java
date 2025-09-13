package com.example.myjourney.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myjourney.dto.LoginRequestDto;
import com.example.myjourney.dto.LoginResponseDto;
import com.example.myjourney.dto.SignUpRequestDto;
import com.example.myjourney.dto.SignupResponseDto;
import com.example.myjourney.entity.User;
import com.example.myjourney.security.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginRequestDto) {
        return ResponseEntity.ok(authService.login(loginRequestDto));
    }

    @PostMapping("/signup")
    public ResponseEntity<SignupResponseDto> signup(@RequestBody SignUpRequestDto signupRequestDto) {
        SignupResponseDto response = authService.signup(signupRequestDto);
        logger.info("User registered successfully: {}", signupRequestDto.getEmail());
        return ResponseEntity.ok(response);
    }


}
