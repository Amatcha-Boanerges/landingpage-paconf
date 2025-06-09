
## Git hub flow

git init
git add README.md
git commit -m "first commit"

git branch -M main
git remote add origin https://github.com/Amatcha-Boanerges/landingpage-paconf.git
git push -u origin main

git checkout -b develop 
git push --set-upstream origin develop


git checkout -b feat/hero-section
git checkout -b feat/awaityou
git checkout -b feat/whyattend


git checkout develop
git checkout main
git merge develop
git push origin main


git checkout -b release