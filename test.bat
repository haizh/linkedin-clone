@echo off

echo STOP NODE SERVER? (y/n)
set /p Input=Enter Yes or No:
if /I "%Input%"=="y" goto yes
goto no

:yes
taskkill /F /IM node.exe
:no
pause
