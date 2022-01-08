package com.ssr.controller;

import com.ssr.model.LoginModel;
import com.ssr.model.UserModel;
import com.ssr.model.NewsModel;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class IndexController {

    public static void main(String[] args) {
        SpringApplication.run(IndexController.class, args);
    }

    @GetMapping("/isLogin")
    public LoginModel isLogin(HttpSession session) {
        Object user = session.getAttribute("user");
        LoginModel loginModel = new LoginModel();
        loginModel.setIsLogin(user != null);
        return loginModel;
    }

    @GetMapping("/login")
    public UserModel login(HttpSession session) {
        UserModel user = new UserModel();
        user.setName("noah");
        session.setAttribute("user", user);
        return user;
    }

    @GetMapping("/logout")
    public Boolean logout(HttpSession session) {
        session.setAttribute("user", null);
        return true;
    }

    @GetMapping("/news")
    public ArrayList<NewsModel> news(HttpSession session) {
        ArrayList<NewsModel> newsModels = new ArrayList<>();
        String[] str = {
            "速构装定相影都自交品况比解参得影须科度几",
            "导达支目值化按写去而九进安层当都别即离毛",
            "飞发七名完人就样花头只一件受面角深生制度",
            "林把己现气装动同带统光知也任由集清光级运",
            "如中青听适华无看因调候把一年少片矿上般少"
        };
        for (int i = 0; i < str.length; i++) {
            NewsModel newsModel = new NewsModel();
            newsModel.setId(i + 1);
            newsModel.setTitle(str[i]);
            newsModels.add(newsModel);
        }
        return newsModels;
    }

    @GetMapping("/hots")
    public ArrayList<NewsModel> hots(HttpSession session) {
        ArrayList<NewsModel> newsModels = new ArrayList<>();
        String[] str = {
            "西安正抓紧改进服务保障不到位情况热",
            "十九届六中全会决议中的10个明确热",
            "广告中使用红领巾 三只松鼠致歉",
            "包贝尔回应抄袭质疑",
            "陕西马帮牵8头骡子给社区捐物资"
        };
        for (int i = 0; i < str.length; i++) {
            NewsModel newsModel = new NewsModel();
            newsModel.setId(i + 1);
            newsModel.setTitle(str[i]);
            newsModels.add(newsModel);
        }
        return newsModels;
    }
}
