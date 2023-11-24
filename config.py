import os

# Get the current working directory
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    # Set the secret key
    SECRET_KEY = os.getenv('SECRET_KEY')
    # Set the path to the database
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
    # Disable the signalling system
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    TESTING = False
    DEBUG = False

class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = True

class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'test.db')