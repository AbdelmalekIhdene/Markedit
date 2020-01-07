mkdir -p ~/run
nohup ./markedit &> /dev/null & echo $! > ~/run/markedit.pid
