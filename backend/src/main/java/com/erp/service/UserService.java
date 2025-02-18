package com.erp.service;

import com.erp.model.User;
import com.erp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> 获取所有用户() {
        return userRepository.findAll();
    }

    public User 根据用户名查询用户(String 用户名) {
        return userRepository.findBy用户名(用户名);
    }
}
