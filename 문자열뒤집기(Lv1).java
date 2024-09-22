import java.lang.StringBuilder;

class Solution {
    public String solution(String my_string, int s, int e) {
        
        StringBuilder sb = new StringBuilder(my_string);
        
        // sb.substring() 은 String객체 반환. - 문자열 짜르기.
        // .reverse()는 StringBuilder에서만 사용가능.
        StringBuilder sub = new StringBuilder(sb.substring(s,e+1)).reverse();
        System.out.println(sub);
        sb.replace(s,e+1, sub.toString());  // 문자열 치환.
              
        return sb.toString();
    }
}