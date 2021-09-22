package com.seu.film.pojo;

public class User {
    private String name;
    private String pwd;
    private int auth;
    private String answer;

    public User() {
    }

    public User(String answer) {
        this.answer = answer;
    }

    public User(String name, String pwd, int auth) {
        this.name = name;
        this.pwd = pwd;
        this.auth = auth;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public int getAuth() {
        return auth;
    }

    public void setAuth(int auth) {
        this.auth = auth;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", pwd='" + pwd + '\'' +
                ", auth=" + auth +
                ", answer='" + answer + '\'' +
                '}';
    }
}
