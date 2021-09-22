package com.seu.film.service;


import com.seu.film.mapper.UserMapper;
import com.seu.film.pojo.Info;
import com.seu.film.pojo.ResultDTO;
import com.seu.film.pojo.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service("userService")
public class UserServiceImpl implements UserService {
    @Resource
    UserMapper userMapper;

    //充值vip
    @Override
    public ResultDTO<User> vipUser(User user) {
        ResultDTO<User> resultDTO = new ResultDTO<>();
        try {
            int i = userMapper.vipUser(user);
            if (i > 0) {
                resultDTO.setCode(1);
            } else {
                resultDTO.setCode(0);
            }
        } catch (Exception e) {
            resultDTO.setCode(0);

        }
        return resultDTO;    }

        //删除账号
    @Override
    public ResultDTO<User> deleteUser(User user) {
        ResultDTO<User> resultDTO = new ResultDTO<>();
        try {
            int i = userMapper.deleteUser(user);
            if (i > 0) {
                resultDTO.setCode(1);
            } else {
                resultDTO.setCode(0);
            }
        } catch (Exception e) {
            resultDTO.setCode(0);

        }
        return resultDTO;
    }

    //注册
    @Override
    public ResultDTO<User> addUser(User user) {
        ResultDTO<User> resultDTO = new ResultDTO<>();
        try {
            int i = userMapper.addUser(user);
            if (i > 0) {
                resultDTO.setCode(1);
            } else {
                resultDTO.setCode(0);
            }
        } catch (Exception e) {
            resultDTO.setCode(0);

        }
        return resultDTO;

    }

    //修改密码
    @Override
    public ResultDTO<User> reviseUser(User user) {
        ResultDTO<User> resultDTO = new ResultDTO<>();
        try {
            int i = userMapper.reviseUser(user);
            if (i > 0) {
                resultDTO.setCode(1);
            } else {
                resultDTO.setCode(0);
            }
        } catch (Exception e) {
            resultDTO.setCode(0);

        }
        return resultDTO;
    }

    //登录
    @Override
    public ResultDTO<User> loginUser(User user) {
        ResultDTO<User> resultDTO = new ResultDTO<>();
        List<User> data = new ArrayList<>();
        data = userMapper.loginUser(user);

        String pwd1 = user.getPwd();
        try {
            if (pwd1.equals(data.get(0).getPwd())) {
                resultDTO.setCode(1);
            } else {
                resultDTO.setCode(0);
            }
        }catch (Exception e) {
            resultDTO.setCode(0);

        }


        return resultDTO;
    }

    //找回密码
    @Override
    public ResultDTO<User> retrieveUser(User user) {
        ResultDTO<User> resultDTO = new ResultDTO<>();
        List<User> data = new ArrayList<>();
        data = userMapper.retrieveUser(user);

        String pwd1 = user.getAnswer();
        try {
            if (pwd1.equals(data.get(0).getAnswer())) {
                resultDTO.setCode(1);
            } else {
                resultDTO.setCode(0);
            }
        }catch (Exception e) {
            resultDTO.setCode(0);

        }


        return resultDTO;
    }
}
