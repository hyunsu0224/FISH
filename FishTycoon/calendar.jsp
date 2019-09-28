<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <title>달력</title>
</head>

<body>
    <p>
        <input type="text" id="datepicker" placeholder="Click"> <br>
        <input type="submit" value="입력" />
    </p>



    <script>
        $(function () {
            $("#datepicker").datepicker();
            $("#datepicker_init_day").datepicker();
            $("#datepicker_init_day").datepicker('setDate', new Date);

            $("#datepicker_special_day").datepicker();
            $("#datepicker_special_day").datepicker('setDate', '2018-12-25');

            var today = new Date(); // 오늘날짜가 만들어진다.
            console.log('오늘 날짜 => ' + today);
            today.setDate(today.getDate() + 3); // 3일을 더하기
            console.log('3일 후 날짜 => ' + today);

            $("#datepicker_add_day").datepicker();
            $("#datepicker_add_day").datepicker('setDate', today);
        });
    </script>
</body>

</html>
