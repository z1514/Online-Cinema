package com.seu.film.service;

import com.seu.film.pojo.Info;
import com.seu.film.pojo.ResultDTO;

import java.util.List;

public interface InfoService {
    List<Info> findAllInfo();
    //使用DTO
    ResultDTO<Info> findAllInfo2();
}
