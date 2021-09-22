package com.seu.film.service;

import com.seu.film.mapper.InfoMapper;
import com.seu.film.pojo.Info;
import com.seu.film.pojo.ResultDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
@Service("infoService")
@Transactional
public class InfoServiceImpl implements InfoService{
    @Resource
    InfoMapper infoMapper;

    @Override
    public List<Info> findAllInfo() {
        //查之前如果有其他业务 可以自行编写
        return this.infoMapper.findAllInfo();
    }

    @Override
    public ResultDTO<Info> findAllInfo2() {
        ResultDTO<Info> resultDTO = new ResultDTO<>();
        List<Info> data= new ArrayList<>();
        data = infoMapper.findAllInfo();
        resultDTO.setData(data);
        resultDTO.setCode(6);
        resultDTO.setMsg("success");
        return resultDTO;
    }
}
