package com.example.myjourney.security;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.myjourney.dto.LoginRequestDto;
import com.example.myjourney.dto.LoginResponseDto;
import com.example.myjourney.dto.SignUpRequestDto;
import com.example.myjourney.dto.SignupResponseDto;
import com.example.myjourney.entity.User;
import com.example.myjourney.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final AuthUtil authUtil;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDto.getEmail(), loginRequestDto.getPassword())
        );

        User user = (User) authentication.getPrincipal();
        String token = authUtil.generateAccessToken(user);

        return new LoginResponseDto(token, user.getId());
    }

    public SignupResponseDto signup(SignUpRequestDto signupRequestDto) {
        User user = userRepository.findByEmail(signupRequestDto.getEmail()).orElse(null);

        if (user != null) throw new IllegalArgumentException("User already exists");

        user = userRepository.save(User.builder()
                .email(signupRequestDto.getEmail())
                .password(passwordEncoder.encode(signupRequestDto.getPassword()))
                .name(signupRequestDto.getName())
                .build()
        );

        return new SignupResponseDto(user.getId(), user.getEmail());
    }
}