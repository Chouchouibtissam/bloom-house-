from rest_framework.authtoken.models import Token
from bloomHouse.models import User
from django.conf import settings
from rest_framework.exceptions import AuthenticationFailed

"""

This is used to check if the user is already registred and exists in the DB or whether he is new

"""
def register_social_user(provider, user_id, email, name):
    filtered_user_by_email = User.objects.filter(email=email)
     #Retrieves a specific QuerySet from the users table in the database based on the arguments given (Refining the Queryset returned to match the args)
    if filtered_user_by_email.exists(): #if the user is found in the database 
        if provider == filtered_user_by_email[0].auth_provider: #Check if the auth_provider field of the user is the same as the provider
            new_user = User.objects.get(email=email) #If so then retrieve the one object that matches the email given as an argument
            registered_user = User.objects.get(email=email)
            registered_user.check_password(settings.SOCIAL_SECRET) #Checks if the password of the user retrived earlier is the same as Google auth secret

            Token.objects.filter(user=registered_user).delete()  #Delete the users that match registred_user from the token table in DB
            Token.objects.create(user=registered_user) #Create a new user in the same table 
            new_token = list(Token.objects.filter(
                user_id=registered_user).values("key")) #Gets the new token associated to the user
            return {
                'username': registered_user.username, #returns the already registrered user email
                'email': registered_user.email, #returns the already registrered user email
                'tokens': str(new_token[0]['key']),  #Convert the token value to a string
                'user_id': registered_user.user_id,
                }
        else:
            raise AuthenticationFailed(
                detail='Please continue your login using ' + filtered_user_by_email[0].auth_provider) #Case where the provider is different

    else: #If the user doesn't already exist
        user = { #Create a new user instance with the provided email 
            'username': email, 'email': email, 
            'password': settings.SOCIAL_SECRET
        }
        user = User.objects.create_user(**user) #Create a new object for the new user to store it in the user table in the DB
        user.is_active = True #Set the user is active field to true
        user.auth_provider = provider #Save the provider he used to sign up with
        user.save() #Save the user
        new_user = User.objects.get(email=email) #Retrieve the recently created user
        new_user.check_password(settings.SOCIAL_SECRET) #Check the password
        Token.objects.create(user=new_user) #Create a new object for the user in the Token table
        new_token = list(Token.objects.filter(user_id=new_user).values("key")) #Get the user's token value
        return { #Return user's info
            'email': new_user.email, 
            'username': new_user.username,
            'tokens': str(new_token[0]['key']),
            'user_id': new_user.user_id,
            
        }
