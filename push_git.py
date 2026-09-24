import subprocess
import os

cwd = r"d:\Du-an-web\web-de-kiem-tra-tin-12-kntt"
git_exe = r"C:\Users\DMX HOA THUAN\AppData\Local\Programs\Git\cmd\git.exe"
gh_exe = r"C:\Users\DMX HOA THUAN\AppData\Local\Programs\gh\bin\gh.exe"

def run(cmd):
    p = subprocess.run(cmd, cwd=cwd, shell=True, capture_output=True, text=True, encoding="utf-8")
    print(f"=== {cmd} ===")
    if p.stdout.strip():
        print(p.stdout.strip())
    if p.stderr.strip():
        print("ERR:", p.stderr.strip())
    return p.returncode

run(f'"{git_exe}" init')
run(f'"{git_exe}" branch -M main')
run(f'"{git_exe}" add .')
run(f'"{git_exe}" commit -m "Khoi tao he thong Ma tran, Bang dac ta va De kiem tra Giua HK1 Tin hoc 12 KNTT"')
run(f'"{gh_exe}" repo create web-de-kiem-tra-tin-12-kntt --public --source=. --remote=origin --push')
