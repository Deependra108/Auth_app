package com.substring.auth.auth_app_backend.services;

import com.substring.auth.auth_app_backend.dtos.UserDto;

public  interface UserService {
    // create user
    UserDto createUser(UserDto userDto);

    // getUser by email
    UserDto getUserByEmail(String email);

    // Update User
    UserDto updateUser(UserDto userDto,String userId);

    // delete User
    void deleteUser(String userId);

    //get User By Id
    UserDto getUserById(String userId);

    // get All the users
    Iterable<UserDto> getAllUsers();
}
