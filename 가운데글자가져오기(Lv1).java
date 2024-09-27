class Solution {
    public String solution(String s) {
        String[] str_arr = s.split("");
        int lenth = str_arr.length;
        
        return lenth % 2 == 0 
               ? str_arr[(lenth-1) / 2] + str_arr[((lenth-1) / 2)+1]
               : str_arr[lenth / 2];        
    }
}