
  let startDay = new Date("2022-01-01").getTime(); //금연시작일
  let today = new Date().getTime(); //오늘

  //result = today - startDay
  result = today - startDay;
  console.log(result / (1000 * 60 * 60 * 24)); //일수
  result = result / (1000 * 60 * 60 * 24);
  //MAth 객체에서 소수점 제하기
  intResult = Math.floor(result);

  //시간표시
    document.getElementById("day").innerHTML = intResult;

