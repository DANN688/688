package com.erp.controller;

import com.erp.model.User;
import com.erp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/用户")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Map<String, Object>> 获取所有用户() {
        return userService.获取所有用户().stream().map(user -> Map.of(
            "编号", user.get编号(),
            "用户名", user.get用户名(),
            "角色", user.get角色()
        )).collect(Collectors.toList());
    }

    @GetMapping("/{用户名}")
    public Map<String, Object> 根据用户名查询用户(@PathVariable String 用户名) {
        User user = userService.根据用户名查询用户(用户名);
        return Map.of(
            "编号", user.get编号(),
            "用户名", user.get用户名(),
            "角色", user.get角色()
        );
    }
}
