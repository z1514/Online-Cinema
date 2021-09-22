package com.seu.film.controller;

import com.seu.film.pojo.Info;
import com.seu.film.pojo.ResultDTO;
import com.seu.film.service.InfoService;
import com.seu.film.service.InfoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping({"test"})
public class TestController {

    //InfoService infoService=new InfoServiceImpl();

    @Autowired
    InfoService infoService;

    public TestController(){

    }
    //http://localhost:8090/film/test/toIndex
    @RequestMapping("/toIndex")
    public String toIndex() throws Exception{
        System.out.println("执行了toIndex");
        return "index";
    }

    @RequestMapping("/testMav")
    public ModelAndView testMav(ModelAndView mav) throws  Exception{
        mav.addObject("name", "刘");
        mav.setViewName("index");
        return mav;
    }

    //http://localhost:8090/film/test/findAll
    @RequestMapping("/findAll")
    @ResponseBody
    public List<Info> findAll() throws Exception{
        List<Info> infos;
        return infoService.findAllInfo();
    }

    @RequestMapping("/findAll2")
    @ResponseBody
    public ResultDTO<Info> findAll2() throws Exception{
        ResultDTO<Info> resultDTO= infoService.findAllInfo2();
        return resultDTO;
    }

    @PostMapping("/login")
    public String login(Info info,String name,String pwd) throws Exception{
        System.out.println(info.toString());
        System.out.println(name+"~~"+pwd);
        return "index";
    }

    @RequestMapping("/admin/del/{id}")
    public String del(@PathVariable("id")int id) throws Exception{
        System.out.println(id);
        return "index";
    }

    @RequestMapping("/rqJson1")
    @ResponseBody
    public String rqJson1(@RequestBody Info info) throws Exception{
        System.out.println(info.toString());
        return "ok";
    }

    @RequestMapping("/findFilm/{keyword}")
    @ResponseBody
    public String del(@PathVariable("keyword") String keyword) throws Exception{
        System.out.println(keyword);
        return "ok";
    }
}
