package com.substring.auth.auth_app_backend.services.impl;

import com.substring.auth.auth_app_backend.dtos.UserDto;
import com.substring.auth.auth_app_backend.entities.Provider;
import com.substring.auth.auth_app_backend.entities.User;
import com.substring.auth.auth_app_backend.exceptions.ResourceNotFoundException;
import com.substring.auth.auth_app_backend.repositories.UserRepository;
import com.substring.auth.auth_app_backend.services.UserService;
import com.substring.auth.auth_app_backend.utils.UserHelper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    @Override
    @Transactional
    public UserDto createUser(UserDto userDto){
      if(userDto.getEmail() == null || userDto.getEmail().isEmpty()){
          throw new IllegalArgumentException("Email is Required");
      }
      if(userRepository.existsByEmail(userDto.getEmail())){
          throw new IllegalArgumentException("User with given Email Already Exists");
      }
      // if You have extra check put here...
        User user = modelMapper.map(userDto, User.class);
        user.setProvider(userDto.getProvider()!=null?userDto.getProvider(): Provider.LOCAL);
        // role assign here to new user for authorization
        //TODO...
        User savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDto.class);
    }
    @Override
    public  UserDto getUserByEmail(String email){
      User user =  userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User Not Found with given email id"));
      return modelMapper.map(user, UserDto.class);
    }

    // Update User
    @Override
    public UserDto updateUser(UserDto userDto,String userId){
        UUID uId = UserHelper.parseUUID(userId);
        User existingUser = userRepository
                .findById(uId)
                .orElseThrow(() -> new ResourceNotFoundException("User Not Found with given id"));
        // we are not going to change the email for this project
        if(userDto.getName() != null) existingUser.setName(userDto.getName());
        if(userDto.getImage() != null) existingUser.setImage(userDto.getImage());
        if(userDto.getProvider() != null) existingUser.setProvider(userDto.getProvider());
        // we will update the update password feature in future
        if(userDto.getPassword() != null) existingUser.setPassword(userDto.getPassword());
        existingUser.setEnable(userDto.isEnable());
        existingUser.setUpdatedAt(Instant.now());
        userRepository.save(existingUser);
        return modelMapper.map(existingUser, UserDto.class);

    }

    // delete User
    @Override
    public void deleteUser(String userId){
        UUID uId = UserHelper.parseUUID(userId);
        User user = userRepository.findById(uId).orElseThrow(()-> new ResourceNotFoundException("User Not Found with given UserId"));
        userRepository.delete(user);
    }

    //get User By Id
   public  UserDto getUserById(String userId){
       User user = userRepository.findById(UserHelper.parseUUID(userId)).orElseThrow(()-> new ResourceNotFoundException("User Not Found with given UserId"));
       return modelMapper.map(user,UserDto.class);
    }

    // get All the users
    @Override
   public  Iterable<UserDto> getAllUsers(){
        return userRepository
                .findAll()
                .stream()
                .map(user -> modelMapper.map(user, UserDto.class))
                .toList();
    }
}
