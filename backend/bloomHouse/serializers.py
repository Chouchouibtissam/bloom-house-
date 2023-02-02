from django.conf import settings
from rest_framework import serializers
from library.sociallib import google
from library.register.register import register_social_user
from rest_framework.exceptions import AuthenticationFailed
from bloomHouse.models import Annonce, Localisation, ContactInfo

class GoogleSocialAuthSerializer(serializers.Serializer):
    auth_token = serializers.CharField()

    def validate_auth_token(self, auth_token):
        user_data = google.Google.validate(auth_token) #Validating the token and fetching user data
        try:
            user_data['sub']
        except:
            raise serializers.ValidationError(
                'The token is invalid or expired. Please login again.'
            )
        print(user_data['aud'])
        if user_data['aud'] != settings.GOOGLE_CLIENT_ID: #If user is not recognized

            raise AuthenticationFailed('Unknown user, who are you?')
        #Returning user data 
        user_id = user_data['sub'] 
        email = user_data['email']
        name = user_data['name']
        provider = 'google'

        return register_social_user( #Make the sign up or the sign in process
            provider=provider, user_id=user_id, email=email, name=name)

#Annonce serializer
class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = ('AI_id','User_id', 'AI_Categorie', 'AI_Type', 'AI_Surface','AI_Description','AI_Prix', 'AI_Localisation', 'AI_Contact')

#Location serializer
class LocalisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Localisation
        fields = ('Loc_id','wilaya','commune','adresse')

#Contact Info serializer
class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = ('Contact_id','nom_contact','prenom_contact','email_contact','telephone_contact','adresse_contact')