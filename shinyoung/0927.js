function solution(t, p) {
    let string = t.slice(0, p.length);
    let answer = +string <= +p ? 1 : 0;
    for (let i = p.length; i < t.length; i++) {
        string = string.slice(1) + t[i];
        answer += +string <= +p ? 1 : 0;
    }
    
    return answer;
}
