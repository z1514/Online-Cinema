package com.seu.film.service;

import com.seu.film.pojo.ResultDTO;
import com.seu.film.pojo.User;

public interface UserService {
    //注册
    ResultDTO<User> addUser(User user);
    //删除
    ResultDTO<User> deleteUser(User user);
    //vip
    ResultDTO<User> vipUser(User user);
    //revise
    ResultDTO<User> reviseUser(User user);
    //login
    ResultDTO<User> loginUser(User user);
    //retrieve
    ResultDTO<User> retrieveUser(User user);

}
