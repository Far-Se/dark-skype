#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
#NoTrayIcon
SendMode Input
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
;Disable win + l key locking (This line must come before any hotkey assignments in the .ahk file)
RegWrite, REG_DWORD, HKEY_CURRENT_USER, Software\Microsoft\Windows\CurrentVersion\Policies\System, DisableLockWorkstation, 1
; ListHotkeys
#L::
    KeyWait, LWin
    KeyWait, RWin
    Send {RCtrl down}{RAlt down}{[}{RAlt up}{RCtrl up}
return
#+F21::
    KeyWait, Shift
    KeyWait, LWin
    KeyWait, RWin
    Send {RCtrl down}{RAlt down}{]}{RAlt up}{RCtrl up}
return

#F21::
    KeyWait, Shift
    KeyWait, LWin
    KeyWait, RWin
    Send {RCtrl down}{RAlt down}{\}{RAlt up}{RCtrl up}
return
