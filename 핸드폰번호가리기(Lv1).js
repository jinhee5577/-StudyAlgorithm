function solution(phone_number) {
    phone_number = phone_number.split('');
    phone_number.fill('*', 0, phone_number.length - 4);    
    
    return phone_number.join('');
}