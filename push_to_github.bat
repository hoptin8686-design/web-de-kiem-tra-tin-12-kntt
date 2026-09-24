@echo off
set "PATH=C:\Users\DMX HOA THUAN\AppData\Local\Programs\Git\cmd;C:\Users\DMX HOA THUAN\AppData\Local\Programs\gh\bin;%PATH%"
cd /d "d:\Du-an-web\web-de-kiem-tra-tin-12-kntt"

echo ========================================================
echo   DANG DONG BO DE KIEM TRA TIN 12 LEN GITHUB...
echo ========================================================

git add .
git commit -m "Cap nhat Ma tran, Bang dac ta, De kiem tra Giua HK I Tin 12 KNTT"
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   DA DAY LEN GITHUB THANH CONG!
    echo   Vercel se tu dong cap nhat trang web sau vai giay.
    echo ========================================================
) else (
    echo.
    echo [THONG BAO] Khong co thay doi moi hoac co loi ket noi.
)

pause
