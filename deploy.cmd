rmdir dist /s /q
ng build --prod --base-href ""
ngh --message="auto deploy"

@echo "https://gtukmachev.github.io/zombie/"
