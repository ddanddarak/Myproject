git config --global user.name [user name]    작업자 이름 설정
git config --global user.email [user email]   작업자 이메일 설정
git config --global --list                              설정값(이름 및 메일등 ) 확인

git init                                     git 저장소(repo) 만들기
 
﻿
git remote add [remote name] [remote addres]  별명으로 원격지주소를 저장
git remote rm [remote name]                   별명의 원격지를 삭제
git remote rename [remote name] [new name]    별명을 새로운 별명으로 변경
 
git fetch [remote name]                      remoet의 모든 정보를 가져옴(모든 branch)
 
git pull                                               저장소에서 변경 내용 가져오기
 
git push                                          commit들을 master 저장소에 저장﻿
git push [remote name] [localbranch name] local branch의 내용을 업데이트
git push [server] tag [TAG]                                  server에 tag 전송
git push [server] --tags                                     변경된 모든 tag 전송
git push [server] [L.B]:[R:B]           server 에 local branch 를
                                		  -Remote branch이름으로저장
 
git tag [TAG NAME]                                저장소에 태그를 붙인다.
git tag                                                      태그목록을 본다.
git branch [branch name]                  저장소의 branch name으로 branch를 만든다.
git branch                                        branch 목록을 본다.
git branch -a                현재 생성된 모든 local branch와 reomte branch 확인
 
git checkout [branch name]                              다른 브랜치로 전환
 
git merge [branch name]                                 branch의 내용을 가져와 합침
git add [file or folder]                                   git에 file 또는 folder 추가
git add *                                     git에 모든 file 또는 folder 추가
git rm [file or folder]                                     git 파일 또는 폴더 제거
git status                                                         현재 git 상태 보기
git commit -m [message]                                message를 repo에 저장
git diff                                    local과 remote의 차이점을 보여줌
git remote                                                        remote서버 확인



<update>

git pull origin master 

<branch / tag 목록 다운받기 >

git fetch

 

<마지막 commit 보기>

git show
 

<commit 정보 확인>

git log


<tag 보기>

git tag –l


<모든 branch 보기 >

git branch -a 또는 git branch -r 또는 git remote show origin 또는 git ls-remote --heads origin

 

<만들었던 local branch 삭제>

git branch -D [help]

 

<프로젝트 생성후 처음 push할 때> 
git push -v --all origin
 

<커밋하기> 
git commit -a -m "bug fixed" 
git push sv

 

<모르고 파일 삭제/추가했을때, 원복하기> 
git reset --hard HEAD 
git pull

 

<target 디렉토리가 git 소스에 commit되어 있어서 날리기> 
git rm -r --cached <your directory>

.gitignore 파일을 이용해서 정리할 필요있음


<rollback 하기> 
git log 
   (commit 넘버 확인) 
git reset --hard (commit 넘버)


<두 사람이 작업하다가 conflict 날 것 같으면, 작업하던 것을 임시저장(stash) 함> 
git stash save "work in progress" 
git pull 
git stash apply 
git commit -m '11'

 

<rebase – merge 가 좀 더 좋아짐>

git rebase 
- merge될 대상 branch를 다운받기 git checkout .. 
- git rebase merge할 소스

 

<crlf 적용>

git config core.autocrlf false


<devolop으로부터 branch 하나 따기> 
git checkout -b feature-old-deletion master
(소스 수정) 
git commit -a -m "Rearrange old api" 
git push origin : feature-old-deletion