from flask import Flask
from flask_cors import CORS
from config import Config, DevelopmentConfig, basedir
from app.models import db

cors = CORS()

def create_app(config_class: Config=DevelopmentConfig):
    app = Flask(__name__,
                instance_path=basedir,
                instance_relative_config=True,
                static_url_path='/home/at/Documents/jatRESTapi/app/static',
                static_folder='/static',
                template_folder='/app/templates'
                )
    app.config.from_object(config_class)

    cors.init_app(app)
    db.init_app(app)

    with app.app_context():
        from . import models, routes
        db.create_all()

    return app