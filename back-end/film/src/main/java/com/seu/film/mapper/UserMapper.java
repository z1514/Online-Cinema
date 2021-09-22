package com.seu.film.mapper;

import com.seu.film.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface UserMapper {
    //insert
    int addUser(User user);
    //delete
    int deleteUser(User user);
    //vip
    int vipUser(User user);
    //revise
    int reviseUser(User user);
    //login
    List<User> loginUser(User user);
    //retrieve
    List<User> retrieveUser(User user);


}
