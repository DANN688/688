package com.erp.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "用户")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "编号")
    private Long 编号;

    @Column(name = "用户名", nullable = false, unique = true)
    private String 用户名;

    @Column(name = "密码", nullable = false)
    private String 密码;

    @Column(name = "角色", nullable = false)
    private String 角色;
}
