import sys
 
#Expand Python classes path with your app's path
sys.path.insert(0, "/mnt/server/www/kevin-lin/main")
 
from main import app
 
#Put logging code (and imports) here ...
 
#Initialize WSGI app object
application = app
