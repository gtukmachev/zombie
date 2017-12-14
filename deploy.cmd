rmdir dist /s /q
call ng build --prod --base-href ""
call ngh --message="auto deploy"
@echo "https://gtukmachev.github.io/zombie/"
