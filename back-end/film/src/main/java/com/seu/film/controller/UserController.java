package com.seu.film.controller;


import com.seu.film.pojo.ResultDTO;
import com.seu.film.pojo.User;
import com.seu.film.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("user")
public class UserController {


    @Autowired
    UserService userService;

    @RequestMapping("/addUser")
    @ResponseBody
    public ResultDTO<User> addUser(@RequestBody User user) throws Exception {
        System.out.println(user.toString());
        return userService.addUser(user);
    }

    @RequestMapping("/deleteUser")
    @ResponseBody
    public ResultDTO<User> deleteUser(@RequestBody User user) throws Exception {
        System.out.println(user.toString());
        return userService.deleteUser(user);
    }

    @RequestMapping("/vipUser")
    @ResponseBody
    public ResultDTO<User> vipUser(@RequestBody User user) throws Exception {
        System.out.println(user.toString());
        return userService.vipUser(user);
    }

    @RequestMapping("/reviseUser")
    @ResponseBody
    public ResultDTO<User> reviseUser(@RequestBody User user) throws Exception {
        System.out.println(user.toString());
        return userService.reviseUser(user);
    }

    //login
    @RequestMapping("/loginUser")
    @ResponseBody
    public ResultDTO<User> loginUser(@RequestBody User user) throws Exception {
        System.out.println(user.toString());
        return userService.loginUser(user);
    }

    //retrieve
    @RequestMapping("/retrieveUser")
    @ResponseBody
    public ResultDTO<User> retrieveUser(@RequestBody User user) throws Exception {
        System.out.println(user.toString());
        return userService.retrieveUser(user);
    }

}

